# CAT-COM-006 | Toggle

**Visualización HTML:** `modules/CAT-COM/CAT-COM-006-toggle.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Activar o desactivar una opción de efecto inmediato (sin necesidad de guardar/enviar), típicamente en paneles de ajustes. Para una selección que requiere confirmación o envío, usar checkbox (CAT-COM-005). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Pista + pulgar (`track`) | Obligatorio | No | Checkbox oculto por accesibilidad, estilo visual custom |
| Etiqueta | Opcional | Sí | Puede ir junto al toggle o en un patrón de fila de ajuste |
| Sub-descripción | Opcional | Sí | Solo en patrón de fila de ajuste (settings-style) |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-006-A | Simple | Solo el control, sin etiqueta. |
| CAT-COM-006-B | Con etiqueta inline | Control + texto corto al lado. |
| CAT-COM-006-C | Fila de ajuste (settings-style) | Etiqueta + sub-descripción a la izquierda, toggle a la derecha, con separador entre filas. |

Tamaños: `.toggle--sm`, normal (default), `.toggle--lg`.
Estados: activado, desactivado, deshabilitado (en ambos valores).

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Etiqueta | Texto plano | — | ~40 car. | — |
| Sub-descripción | Texto plano | — | ~60 car. | Se omite |

## Comportamiento responsive

Sin breakpoints propios; en fila de ajuste, el texto y el control se mantienen en la misma fila en todos los tamaños (`justify-content: space-between`).

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El cambio de estado es inmediato y no requiere un botón de guardar — si en el proyecto real sí lo requiere, usar checkbox en su lugar para no generar expectativas erróneas.

**Restricciones de implementación:**
- El `<input type="checkbox">` real queda oculto visualmente (`opacity: 0`) pero sigue siendo el elemento accesible — no eliminarlo ni sustituirlo por un `<div>` clicable.

**Casos edge a contemplar:**
- Toggle que depende de otro (p. ej. deshabilitado hasta que se cumpla una condición): el wireframe no cubre dependencias entre toggles, definir en el proyecto real.
