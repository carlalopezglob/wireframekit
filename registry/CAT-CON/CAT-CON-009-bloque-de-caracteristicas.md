# CAT-CON-009 | Bloque de características

**Visualización HTML:** `modules/CAT-CON/CAT-CON-009-bloque-de-caracteristicas.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Presentar un conjunto de características, funcionalidades, ventajas o datos en formato de grid escaneable, con contenido flexible por columna (texto, lista o cifras). Sustituye y ampliía al antiguo CAT-CON-004 "Lista de características" (ver `_eliminar/`). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Overtitle + H2 + párrafo descriptivo |
| Marcador (icono / imagen / ninguno) | Opcional | Sí (icono/imagen) | Uno de los tres tipos por grid completo, no mezclado por ítem |
| Título de ítem (H3) | Obligatorio | Sí | Máx. 40 caracteres |
| Contenido de ítem | Obligatorio | Sí | Un tipo por ítem: párrafo, lista o cifras (stats) |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-009-A | 2 columnas | Hasta 4 ítems (2×2). Para contenido más denso. |
| CAT-CON-009-B | 3 columnas | Uso general. Hasta 6 ítems (2 filas). |
| CAT-CON-009-C | 4 columnas | Hasta 8 ítems (2 filas). Solo para contenido muy corto — usar con precaución. |
| CAT-CON-009-D | Marcador imagen | En lugar de icono 48×48, cada ítem lleva una imagen 16:9 (útil para capturas o ilustraciones). |
| CAT-CON-009-E | Sin marcador | Solo título + contenido, sin icono ni imagen. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Título de ítem | Texto plano | — | 40 car. | Obligatorio |
| Párrafo (tipo contenido) | Texto plano | — | 120 car. por columna | — |
| Lista (tipo contenido) | 2-4 ítems | 2 | 4, 50 car. c/u | — |
| Stats (tipo contenido) | 1-2 cifras | 1 | 2, número 6 car. + etiqueta 20 car. | — |
| Icono | SVG / imagen 48×48 | — | — | Grid pasa a "sin marcador" |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid | 1 columna | 2 columnas | 2 / 3 / 4 según variante elegida |
| Encabezado | Stack vertical, máx. 640px | Igual | Igual |
| Marcador | 48×48 (icono) sin cambio; imagen 16:9 a ancho de columna | Igual | Igual |

## Historial

- v1.0 · Creación como consolidación de CAT-CON-004 "Lista de características" (archivada): añade marcador de imagen, filas múltiples y tipo de contenido configurable por columna (párrafo / lista / stats).

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El tipo de contenido (párrafo / lista / stats) se fija por columna y se repite igual en la segunda fila si la hay — mantener coherencia visual entre filas.
- Los ítems NO usan `.card` — sin borde, fondo propio ni sombra. Son icon/imagen + título + contenido en columna.

**Restricciones de implementación:**
- El grid usa las clases compartidas (`data-cols` 2/3/4). No definir columnas con CSS propio.
- Evitar mezclar tipos de contenido distintos entre columnas salvo razón semántica clara.

**Casos edge a contemplar:**
- Con 4 columnas y descripciones largas, revisar que no se rompa el ritmo vertical del grid — valorar bajar a 3 columnas.
