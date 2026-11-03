# CAT-COM-009 | Tooltip

**Visualización HTML:** `modules/CAT-COM/CAT-COM-009-tooltip.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Mostrar información adicional breve al pasar el ratón o enfocar un elemento, sin ocupar espacio permanente en el layout. Para contenido que el usuario debe poder leer sin depender del hover, usar un helper de texto visible en su lugar. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Disparador (trigger) | Obligatorio | Sí | Icono, texto con subrayado punteado, o botón completo |
| Burbuja (bubble) | Obligatorio | Sí | Aparece al hover/focus, con flecha apuntando al trigger |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-009-A | Posición | top (default) / bottom / left / right. |
| CAT-COM-009-B | Trigger icono ⓘ | Botón circular con icono de información. |
| CAT-COM-009-C | Trigger enlace punteado | Texto con `cursor: help` y subrayado punteado. |
| CAT-COM-009-D | Trigger botón completo | El tooltip cuelga de un botón de acción normal. |
| CAT-COM-009-E | Contenido enriquecido (`--rich`) | Burbuja multilínea con título + descripción, en vez de una sola línea. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto simple | Texto plano | — | ~40 car. (una línea, `white-space: nowrap`) | — |
| Contenido enriquecido | Título + texto | — | Título ~30 car., texto ~160 car. | — |

## Comportamiento responsive

En mobile, el hover no existe — el tooltip debe ser accesible por tap/focus; revisar que el trigger tenga un tamaño de toque mínimo de 24-40px.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Aparece con `:hover` y `:focus-within` — accesible por teclado, no solo por ratón.
- La burbuja lleva `role="tooltip"`.

**Restricciones de implementación:**
- Nunca poner información crítica u obligatoria solo en un tooltip — debe ser siempre contenido complementario, no la única fuente de un dato necesario.

**Casos edge a contemplar:**
- Tooltip cerca del borde del viewport: el wireframe no implementa "flip" automático de posición — revisar visualmente en producción si el trigger está cerca de un borde.
