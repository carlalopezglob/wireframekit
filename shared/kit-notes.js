/* =============================================
   KIT NOTES + KIT STATES — herramientas de kit standalone

   kit-notes: carga en directo la spec .md del módulo.
   kit-states: permite alternar elementos opcionales en el navegador.

   No se copian a proyectos de cliente.
   Requiere npx serve . desde la raíz (fetch de archivos locales).
   ============================================= */

(function () {

  /* ─── Kit Notes — carga spec .md en directo ─────────────────────────
     Requiere: <details class="kit-notes" data-spec-src="ruta/al/spec.md">
  ──────────────────────────────────────────────────────────────────── */
  function mdInlineToHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  function mdBlockToHtml(md) {
    var lines = md.split('\n');
    var html = '';
    var inList = false;
    var inTable = false;
    var tableRows = [];

    function closeList()  { if (inList)  { html += '</ul>'; inList = false; } }
    function closeTable() {
      if (inTable) {
        var header = tableRows[0];
        var rows   = tableRows.slice(1);
        html += '<table><tr>' + header.map(function(c){ return '<th>' + mdInlineToHtml(c) + '</th>'; }).join('') + '</tr>';
        rows.forEach(function(r) {
          html += '<tr>' + r.map(function(c){ return '<td>' + mdInlineToHtml(c) + '</td>'; }).join('') + '</tr>';
        });
        html += '</table>';
        tableRows = [];
        inTable = false;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) { closeList(); closeTable(); continue; }

      if (/^#{2,4}\s+/.test(line)) {
        closeList(); closeTable();
        var text = line.replace(/^#{2,4}\s+/, '');
        html += '<h4>' + mdInlineToHtml(text) + '</h4>';
        continue;
      }
      if (/^>\s?/.test(line)) { continue; }
      if (/^-{3,}$/.test(line)) { closeList(); closeTable(); continue; }

      if (/^\|/.test(line)) {
        closeList();
        if (line.replace(/[|\-:\s]/g, '') === '') continue;
        var cells = line.split('|').slice(1, -1).map(function(c){ return c.trim(); });
        tableRows.push(cells);
        inTable = true;
        continue;
      } else { closeTable(); }

      if (/^-\s+/.test(line)) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + mdInlineToHtml(line.replace(/^-\s+/, '')) + '</li>';
        continue;
      }

      closeList();
      html += '<p>' + mdInlineToHtml(line) + '</p>';
    }
    closeList(); closeTable();
    return html;
  }

  function extractSection(mdText, heading) {
    var re = new RegExp('##\\s+' + heading + '[\\s\\S]*?(?=\\n##\\s|$)', 'i');
    var match = mdText.match(re);
    return match ? match[0] : null;
  }

  function loadSpec(details) {
    var src  = details.getAttribute('data-spec-src');
    var body = details.querySelector('.kit-notes__body');
    if (!src || !body || details.dataset.loaded) return;

    fetch(src)
      .then(function(r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function(mdText) {
        var variantes  = extractSection(mdText, 'Variantes');
        var restricciones = extractSection(mdText, 'Restricciones de contenido');
        var notasUI    = extractSection(mdText, 'Notas para UI');
        var out = '';
        if (variantes)     out += mdBlockToHtml(variantes);
        if (restricciones) out += mdBlockToHtml(restricciones);
        if (notasUI)       out += mdBlockToHtml(notasUI);
        if (!out) out = '<p>No se encontraron secciones en la spec.</p>';
        body.innerHTML = out;
        details.dataset.loaded = 'true';
      })
      .catch(function() {
        // Fallback: renderizar window.UX_NOTES si existe.
        // Soporta dos formatos:
        //   { clave: 'string' }                     → tabla clave/valor
        //   { clave: { label: '…', notes: ['…'] } } → sección h4 + lista
        var notes = window.UX_NOTES;
        if (notes && Object.keys(notes).length) {
          var out = '';
          var tableRows = [];

          function flushTable() {
            if (!tableRows.length) return;
            out += '<table><tr><th>Elemento</th><th>Regla</th></tr>';
            tableRows.forEach(function(r) {
              out += '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
            });
            out += '</table>';
            tableRows = [];
          }

          Object.keys(notes).forEach(function(k) {
            var v = notes[k];
            if (typeof v === 'string') {
              tableRows.push([k, v]);
            } else if (v && typeof v === 'object') {
              flushTable();
              out += '<h4>' + (v.label || k) + '</h4>';
              if (Array.isArray(v.notes)) {
                out += '<ul>';
                v.notes.forEach(function(n) { out += '<li>' + n + '</li>'; });
                out += '</ul>';
              }
            }
          });
          flushTable();
          body.innerHTML = out;
        } else {
          body.innerHTML = '<p>No se pudo cargar la spec. Ábrela manualmente: <code>' + src + '</code></p>';
        }
        details.dataset.loaded = 'true';
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('details.kit-notes[data-spec-src]').forEach(function(details) {
      details.addEventListener('toggle', function() { if (details.open) loadSpec(details); }, { once: false });
    });
  });


  /* ─── Kit States — panel de alternancia de estados opcionales ────────
     Requiere: <details class="kit-states"> con inputs configurados.

     Tipos de control:
       data-show="#selector"           — checkbox: muestra/oculta el elemento
       data-class="nombre-clase"
       data-class-target="#selector"   — checkbox: añade/quita clase en el target
       data-bg-target="#selector"      — radio: cambia el fondo del target al value del radio
  ──────────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {

    // Checkbox data-show: muestra u oculta elementos
    document.querySelectorAll('.kit-states input[type="checkbox"][data-show]').forEach(function(cb) {
      function apply() {
        document.querySelectorAll(cb.getAttribute('data-show')).forEach(function(el) {
          el.hidden = !cb.checked;
        });
      }
      cb.addEventListener('change', apply);
    });

    // Checkbox data-class: añade o quita una clase en data-class-target
    document.querySelectorAll('.kit-states input[type="checkbox"][data-class]').forEach(function(cb) {
      function apply() {
        var cls    = cb.getAttribute('data-class');
        var target = cb.getAttribute('data-class-target') || 'body';
        document.querySelectorAll(target).forEach(function(el) {
          el.classList.toggle(cls, cb.checked);
        });
      }
      cb.addEventListener('change', apply);
    });

    // Radio data-bg-target: cambia el background del target según el value del radio
    document.querySelectorAll('.kit-states input[type="radio"][data-bg-target]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        if (!radio.checked) return;
        var target = radio.getAttribute('data-bg-target');
        document.querySelectorAll(target).forEach(function(el) {
          el.style.background = radio.value;
        });
      });
    });

  });

})();
