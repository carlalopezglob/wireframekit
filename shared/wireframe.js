/**
 * wireframe.js — utilidades compartidas para wireframes HTML
 * Importar con defer desde todas las páginas y módulos.
 * Desde pages/<sección>/: ../../shared/wireframe.js
 * Desde modules/<cat>/: ../../shared/wireframe.js
 *
 * NO duplicar estas funciones en archivos individuales.
 * Funciones disponibles: ver secciones marcadas con ─── nombre ───
 */

(function () {
  'use strict';

  /* ─── Module ID badge ─────────────────────────────────────────
     Auto-inyecta un badge con el ID del módulo extraído del
     <title> (formato "CAT-XXX-000 · Nombre"). Solo visible en
     el kit — no copiar al proyecto de cliente.
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    var match = document.title.match(/^([A-Z]+-[A-Z]+-\d+)/);
    if (!match) return;
    var badge = document.createElement('div');
    badge.textContent = match[1];
    badge.setAttribute('aria-hidden', 'true');
    Object.assign(badge.style, {
      position: 'fixed',
      top: '8px',
      left: '8px',
      zIndex: '8888',
      background: 'rgba(0,0,0,0.55)',
      color: '#fff',
      fontFamily: 'monospace',
      fontSize: '0.7rem',
      fontWeight: '700',
      padding: '0.2em 0.7em',
      borderRadius: '4px',
      pointerEvents: 'none',
      userSelect: 'none',
      letterSpacing: '0.03em'
    });
    document.body.appendChild(badge);
  });

  /* ─── UX Notes ────────────────────────────────────────────────
     Declarar en cada página/módulo:
       window.UX_NOTES = { clave: "valor", ... }
     Se muestran en consola al cargar. Nunca incrustar anotaciones
     visibles en el wireframe — solo en UX_NOTES.
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    if (window.UX_NOTES && Object.keys(window.UX_NOTES).length) {
      console.group('📋 UX Notes');
      Object.entries(window.UX_NOTES).forEach(function ([k, v]) {
        console.log('%c' + k + ':', 'font-weight:bold;color:#555', v);
      });
      console.groupEnd();
    }
  });

  /* ─── Placeholders de imagen ──────────────────────────────────
     Añade dimensiones calculadas al texto de placeholder.
     Uso: <div class="img-placeholder" style="height:300px"></div>
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    function stampPlaceholder(el) {
      var w = el.offsetWidth, h = el.offsetHeight;
      if (w > 0 && h > 0) {
        el.textContent = w + ' × ' + h + ' px';
      } else {
        el.textContent = '— × — px'; // oculto o sin dimensiones aún
      }
    }
    document.querySelectorAll('.img-placeholder').forEach(function (el) {
      if (!el.textContent.trim()) stampPlaceholder(el);
    });
    // Actualizar cuando un tab-panel se hace visible
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab-btn');
      if (!btn) return;
      setTimeout(function () {
        document.querySelectorAll('.tab-panel:not([hidden]) .img-placeholder').forEach(function (el) {
          stampPlaceholder(el);
        });
      }, 0);
    });
  });

  /* ─── Acordeón ────────────────────────────────────────────────
     Uso:
       <button class="accordion-trigger" data-target="#id" aria-expanded="false">
         Título
       </button>
       <div id="id" class="accordion-body" hidden>Contenido</div>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.accordion-trigger');
    if (!btn) return;
    var body = document.querySelector(btn.getAttribute('data-target'));
    if (!body) return;
    var isOpen = !body.hidden;
    body.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  /* ─── Tabs ────────────────────────────────────────────────────
     Uso:
       <div class="tabs">
         <button class="tab-btn is-active" data-tab="tab1">Tab 1</button>
         <button class="tab-btn" data-tab="tab2">Tab 2</button>
       </div>
       <div class="tab-panel" data-tab="tab1">...</div>
       <div class="tab-panel" data-tab="tab2" hidden>...</div>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.tab-btn');
    if (!btn) return;
    var tabId = btn.getAttribute('data-tab');
    var scope = btn.closest('[data-tabs-scope]') || document;
    scope.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.toggle('is-active', b === btn);
    });
    scope.querySelectorAll('.tab-panel').forEach(function (p) {
      p.hidden = p.getAttribute('data-tab') !== tabId;
    });
  });

  /* ─── Texto expandible (PAT-002 "Ver más") ───────────────────
     Uso:
       <div class="text-expand">
         <div class="text-expand__body" hidden>Contenido extra</div>
         <button class="text-expand__toggle">Ver más</button>
       </div>
     En desktop (≥1200px) el CSS ya lo muestra siempre — el botón
     queda oculto via CSS. En mobile/tablet este JS lo controla.
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.text-expand__toggle');
    if (!btn) return;
    var body = btn.closest('.text-expand').querySelector('.text-expand__body');
    if (!body) return;
    body.hidden = !body.hidden;
    btn.textContent = body.hidden ? 'Ver más' : 'Ver menos';
  });

  /* ─── MAX content button ─────────────────────────────────────
     Muestra un botón "MAX" (esquina superior derecha) si el módulo
     tiene elementos [data-max] o inputs [data-max-state] en kit-states.

     Al activarlo:
       1. Rellena cada [data-max] con su texto de longitud máxima.
       2. Activa todos los inputs [data-max-state] (checkboxes on,
          radios seleccionados) disparando change para que el módulo
          responda. Guarda el estado anterior para restaurarlo.

     Al desactivarlo restaura el estado anterior exacto.

     Uso en módulos:
       Texto:     data-max="texto de longitud máxima"  en el nodo.
       Controles: data-max-state en el input del estado máximo.
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    var maxEls      = document.querySelectorAll('[data-max]');
    var maxStateEls = document.querySelectorAll('.kit-states [data-max-state]');
    if (!maxEls.length && !maxStateEls.length) return;

    var isMax       = false;
    var savedTexts  = [];
    var savedCBs    = {};   // id → checked
    var savedRadios = {};   // name → value

    var btn = document.createElement('button');
    btn.textContent = 'MAX';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('title', 'Activar contenido y opciones máximas');
    Object.assign(btn.style, {
      position:      'fixed',
      top:           '8px',
      right:         '8px',
      zIndex:        '8888',
      background:    'rgba(0,0,0,0.55)',
      color:         '#fff',
      fontFamily:    'monospace',
      fontSize:      '0.7rem',
      fontWeight:    '700',
      padding:       '0.2em 0.7em',
      borderRadius:  '4px',
      border:        'none',
      cursor:        'pointer',
      letterSpacing: '0.03em'
    });

    function saveState() {
      savedTexts  = [];
      savedCBs    = {};
      savedRadios = {};
      maxEls.forEach(function (el) {
        savedTexts.push({ el: el, text: el.textContent.trim() });
      });
      document.querySelectorAll('.kit-states input[type="checkbox"]').forEach(function (cb) {
        if (cb.id) savedCBs[cb.id] = cb.checked;
      });
      document.querySelectorAll('.kit-states input[type="radio"]:checked').forEach(function (r) {
        savedRadios[r.name] = r.value;
      });
    }

    function activateMax() {
      maxEls.forEach(function (el) {
        el.textContent = el.getAttribute('data-max');
      });
      maxStateEls.forEach(function (inp) {
        if ((inp.type === 'checkbox' || inp.type === 'radio') && !inp.checked) {
          inp.checked = true;
          inp.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }

    function restoreState() {
      savedTexts.forEach(function (s) { s.el.textContent = s.text; });
      document.querySelectorAll('.kit-states input[type="checkbox"]').forEach(function (cb) {
        if (cb.id && cb.id in savedCBs && cb.checked !== savedCBs[cb.id]) {
          cb.checked = savedCBs[cb.id];
          cb.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
      Object.keys(savedRadios).forEach(function (name) {
        var val = savedRadios[name];
        document.querySelectorAll('.kit-states input[type="radio"][name="' + name + '"]').forEach(function (r) {
          if (r.value === val && !r.checked) {
            r.checked = true;
            r.dispatchEvent(new Event('change', { bubbles: true }));
          }
        });
      });
    }

    btn.addEventListener('click', function () {
      isMax = !isMax;
      btn.setAttribute('aria-pressed', String(isMax));
      btn.style.background = isMax ? '#b00' : 'rgba(0,0,0,0.55)';
      if (isMax) { saveState(); activateMax(); }
      else { restoreState(); }
    });

    document.body.appendChild(btn);
  });

  /* ─── Sticky nav ──────────────────────────────────────────────
     Añade clase "is-sticky" al primer elemento con [data-sticky]
     cuando el scroll supera su posición inicial.
  ─────────────────────────────────────────────────────────────── */
  (function () {
    var el = document.querySelector('[data-sticky]');
    if (!el) return;
    var threshold = el.getBoundingClientRect().top + window.scrollY;
    window.addEventListener('scroll', function () {
      el.classList.toggle('is-sticky', window.scrollY > threshold);
    }, { passive: true });
  })();

  /* ─── Carrusel simple ────────────────────────────────────────
     Uso:
       <div class="carousel" data-carousel>
         <div class="carousel__track">
           <div class="carousel__slide">...</div>
           ...
         </div>
         <button class="carousel__prev" aria-label="Anterior">‹</button>
         <button class="carousel__next" aria-label="Siguiente">›</button>
       </div>
  ─────────────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track  = carousel.querySelector('.carousel__track');
    var slides = carousel.querySelectorAll('.carousel__slide');
    var prev   = carousel.querySelector('.carousel__prev');
    var next   = carousel.querySelector('.carousel__next');
    if (!track || !slides.length) return;

    var current = 0;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
    }

    if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
    if (next) next.addEventListener('click', function () { goTo(current + 1); });
  });

  /* ─── Slot type switcher (kit-slot-type) ────────────────────
     Select con class="kit-slot-type" y data-slot-target="id".
     Muestra el hijo [data-slot-type="value"] y oculta el resto.

     Uso:
       <select class="kit-slot-type" data-slot-target="feat-1">
         <option value="text">Párrafo</option>
         <option value="list">Lista</option>
         <option value="stats">Stats</option>
       </select>
       ...
       <div data-slot="feat-1">
         <p data-slot-type="text">…</p>
         <ul data-slot-type="list" hidden>…</ul>
         <div data-slot-type="stats" hidden>…</div>
       </div>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.kit-states .kit-slot-type').forEach(function (sel) {
      sel.addEventListener('change', function () {
        var target = document.querySelector('[data-slot="' + sel.getAttribute('data-slot-target') + '"]');
        if (!target) return;
        var type = sel.value;
        target.querySelectorAll('[data-slot-type]').forEach(function (el) {
          el.hidden = el.getAttribute('data-slot-type') !== type;
        });
      });
    });
  });

  /* ─── Component variant select (kit-swap) ───────────────────
     Select con class="kit-swap", data-swap-target y data-swap-from.
     El value de la opción seleccionada es la clase a aplicar.
     "" = variante base (sin modificador). Patrón estilo Figma.

     Uso:
       <select class="kit-swap"
               data-swap-target="[data-slot='cta-prim']"
               data-swap-from="btn--outline btn--ghost btn--link btn--danger">
         <option value="">Primario</option>
         <option value="btn--outline">Outline</option>
         <option value="btn--ghost">Ghost</option>
         <option value="btn--link">Link</option>
       </select>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.kit-states .kit-swap').forEach(function (sel) {
      sel.addEventListener('change', function () {
        var targets     = document.querySelectorAll(sel.getAttribute('data-swap-target'));
        var fromClasses = (sel.getAttribute('data-swap-from') || '').split(/\s+/).filter(Boolean);
        var toClass     = sel.value;
        targets.forEach(function (el) {
          fromClasses.forEach(function (cls) { el.classList.remove(cls); });
          if (toClass) el.classList.add(toClass);
        });
      });
    });
  });

  /* ─── Component variant swapper (radio) ──────────────────────
     Radio con data-swap-target (selector CSS), data-swap-from
     (clases a quitar, separadas por espacio) y data-swap-to
     (clases a aplicar). Permite cambiar la variante visual de
     un componente desde kit-states sin JS en el módulo.

     Uso en kit-states:
       <input type="radio" name="var-cta"
              data-swap-target="[data-slot='cta-prim']"
              data-swap-from="btn--outline btn--ghost btn--link btn--danger"
              data-swap-to="btn--outline"> Secundario
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.kit-states input[type="radio"][data-swap-target]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        if (!radio.checked) return;
        var targets     = document.querySelectorAll(radio.getAttribute('data-swap-target'));
        var fromClasses = (radio.getAttribute('data-swap-from') || '').split(/\s+/).filter(Boolean);
        var toClasses   = (radio.getAttribute('data-swap-to')   || '').split(/\s+/).filter(Boolean);
        targets.forEach(function (el) {
          fromClasses.forEach(function (cls) { el.classList.remove(cls); });
          toClasses.forEach(function (cls)   { el.classList.add(cls); });
        });
      });
    });
  });

  /* ─── Modal de vídeo estándar ────────────────────────────────
     Función global openVideoModal(url) — NO redefinir en páginas.
     Uso en HTML: <button onclick="openVideoModal('URL')">Play</button>
  ─────────────────────────────────────────────────────────────── */
  window.openVideoModal = function (url) {
    var modal = document.getElementById('video-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-modal';
      Object.assign(modal.style, {
        position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: '9999', cursor: 'pointer'
      });
      modal.innerHTML = '<div style="background:#000;width:min(90vw,800px);aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.9rem">[Vídeo: ' + url + ']</div>';
      modal.addEventListener('click', function () { modal.remove(); });
      document.body.appendChild(modal);
    } else {
      modal.style.display = 'flex';
    }
  };

})();
