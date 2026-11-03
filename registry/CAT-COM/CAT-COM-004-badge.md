# CAT-COM-004 | Badge / Tag

**Visualización HTML:** `modules/CAT-COM/CAT-COM-004-badge.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Etiqueta inline no interactiva para categorizar, indicar estado o señalar un atributo de contenido. Para una etiqueta clicable que filtra o selecciona, usar CAT-COM-010 (Chip). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Texto | Obligatorio | Sí | Máx. 20 car., siempre en mayúsculas (`text-transform`) |
| Punto indicador (opcional) | Opcional | No | `::before` con `currentColor` |
| Botón de eliminar (opcional) | Opcional | No | Decorativo en wireframe; en UI real `button` con `aria-label` |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-004-A | Neutral (`.tag`) | Sin carga semántica — categoría o tipo. |
| CAT-COM-004-B | Success / Warning / Error / Info | Semántica de estado (positivo, atención, fallo, informativo). |
| CAT-COM-004-C | Accent | Sin semántica de estado, para destacar o marcar categoría principal. |
| CAT-COM-004-D | Solid | Relleno de acento, máximo contraste — para contadores o valores numéricos. |
| CAT-COM-004-E | Con punto (`.tag--dot`) | Añade un punto de color antes del texto. |
| CAT-COM-004-F | Eliminable | Añade un botón de cierre ×. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto | Texto plano | — | 20 car. | Obligatorio |
| Por fila de contenido | Cantidad | — | 3 | Más de 3 indica que el modelo de datos necesita revisión |

## Comportamiento responsive

Sin breakpoints propios — es un elemento inline que envuelve (`flex-wrap`) dentro de su contenedor.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno en la variante base — es decorativo/informativo. Solo la variante eliminable tiene interacción (clic en ×).

**Restricciones de implementación:**
- En listas, alinear verticalmente con el texto (`vertical-align: middle`); no más de 1 tag por fila de lista.

**Casos edge a contemplar:**
- No usar para acciones clicables — ese caso es CAT-COM-010 (Chip/Filtro), con affordance de botón.
