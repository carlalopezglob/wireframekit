# CAT-NAV-001 | Nav bar
**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-001-nav-bar.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Barra de navegación principal fija en la parte superior de cada página del sitio. Proporciona acceso global a las secciones principales y un CTA de conversión. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Logo / nombre de marca | Obligatorio | Sí | Texto o imagen SVG; max-height recomendado 32px |
| Lista de enlaces de navegación | Obligatorio (desktop) | Sí | 4–7 ítems; visible solo en ≥768px |
| Enlace activo (is-active) | Opcional | No | Establecido por la página actual |
| Botón CTA | Opcional | Sí | Texto corto, acción principal (ej. "Empieza ya") |
| Botón hamburguesa | Obligatorio (mobile) | No | Visible solo en <768px |
| Menú móvil desplegable | Obligatorio (mobile) | No | Replica los mismos enlaces del menú desktop |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| NAV-001-A | Por defecto | Fondo blanco, sin sticky |
| NAV-001-B | Sticky | Añade `position:sticky; top:0; z-index:100` |
| NAV-001-C | Sin CTA | Oculta el botón de acción |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Logo | Texto o imagen | 1 carácter | 120px ancho | No se renderiza la nav |
| Ítems de menú | Texto plano | 2 | 7 | Menú vacío — revisar diseño |
| Etiqueta CTA | Texto plano | 1 palabra | 20 caracteres | Se oculta el botón |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Lista de enlaces | Oculta | Visible | Visible |
| Botón hamburguesa | Visible | Oculto | Oculto |
| Menú móvil | Desplegable bajo la barra | — | — |
| Botón CTA | Oculto (disponible en menú móvil) | Visible | Visible |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El enlace activo debe establecerse vía JS/server según la ruta actual; no hardcodear.
- El botón CTA debería usar `<a>` si redirige a otra página, o `<button>` si abre un modal.
- Evitar más de 7 ítems de navegación — considerar menús desplegables si crece.
- El `z-index` del sticky debe coordinarse con modales y drawers del proyecto.
