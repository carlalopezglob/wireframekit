# CAT-CON-011 | Muro de logos

**Visualización HTML:** `modules/CAT-CON/CAT-CON-011-muro-de-logos.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Mostrar logos de clientes, partners o medios de comunicación para transmitir confianza o prueba social. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Etiqueta de cabecera | Opcional | Sí | P. ej. "Con la confianza de" |
| Flechas de navegación | Condicional | No | Solo visibles en modo carrusel |
| Logos | Obligatorio | Sí (imagen) | Mínimo 5, hasta 12 en modo carrusel |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-011-A | Cuadrícula | Logos en fila(s) que envuelven (`flex-wrap`), estática. Hasta 8 logos visibles (5 + 3 adicionales opcionales). |
| CAT-CON-011-B | Carrusel | Fila scrollable horizontal con flechas prev/next, muestra los 12 logos. Cabecera alineada a la izquierda. |
| CAT-CON-011-C | Atenuado | Logos en escala de grises y opacidad reducida — más discreto. |
| CAT-CON-011-D | Dividido | Sin tarjeta por logo; separados por una línea vertical en lugar de fondo/borde. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Logos | Imagen / placeholder | 5 | 12 | Con menos de 5, valorar otro módulo (no queda bien un muro corto) |
| Etiqueta de cabecera | Texto plano | — | ~30 car. | Se oculta, los logos suben |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Cuadrícula | `flex-wrap`, varias filas | Igual | Igual |
| Carrusel | Scroll horizontal táctil con snap | Igual + flechas | Igual |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- En modo carrusel, las flechas se deshabilitan automáticamente al llegar al inicio/final del scroll.
- El scroll usa `scroll-snap` para que los logos no queden cortados a medias.

**Restricciones de implementación:**
- Los logos son placeholders de texto en el wireframe — en producción son imágenes con `alt` descriptivo del nombre de marca.

**Casos edge a contemplar:**
- Logos de anchos muy dispares (marca muy ancha junto a una muy estrecha): el `min-width` por logo ayuda a mantener ritmo, pero revisar visualmente con los logos reales.
