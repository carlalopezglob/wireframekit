# CAT-CRD-003 | Carrusel horizontal

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-003-carrusel-horizontal.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Mostrar una colección de ítems en un espacio horizontal limitado, cuando el número de elementos supera lo que cabe cómodamente en un grid o cuando se quiere comunicar que hay "más contenido" para explorar. Ideal para secciones de contenido relacionado, colecciones editoriales o galerías de productos. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera de sección (overtitle + h2 + subtítulo) | Opcional | Sí | Se coloca en la misma fila que las flechas de navegación (flex row). |
| Botones prev / next | Opcional | No | UI kit. Se posicionan en la esquina derecha de la cabecera. En mobile pueden ocultarse si el swipe es suficiente. |
| Track de scroll | Obligatorio | — | Contenedor `.crd003__track` con `overflow-x:auto` y `scroll-snap-type:x mandatory`. |
| Cards | Obligatorio | Sí | Misma estructura que CRD-001. `min-width:280px` mobile / `320px` desktop. |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CRD-003-A | 5 cards con flechas | Por defecto. |
| CRD-003-B | 6 cards | Sexta card visible en el DOM. |
| CRD-003-C | Sin cabecera | Bloque de header omitido; flechas pueden moverse a otra posición. |
| CRD-003-D | Sin flechas | Solo swipe nativo; apto para contextos donde el gesto táctil es predominante. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Cards | — | 4 | Sin límite técnico | Con menos de 4, el track no hace overflow; el scroll snap no activa. Valorar usar CRD-002. |
| Título de card | Texto plano | 10 car. | ~70 car. | Obligatorio por card |
| Imagen por card | URL / placeholder | — | — | Eliminar `.card__img` en esa card |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Card min-width | 280px | 280px | 320px |
| Cards visibles | ~1.3 (sugiere hay más) | ~2.3 | ~3.2 |
| Flechas | Opcionales (ocultar si interfieren) | Recomendadas | Recomendadas |
| Cabecera | Stacked (columna) si espacio escaso | Flex row | Flex row |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI.

- La flecha "Anterior" arranca con `disabled` y `aria-disabled="true"` porque el scroll comienza en posición 0. El JS actualiza ambos atributos después de cada scroll.
- `scrollbar-width:none` y `::-webkit-scrollbar {display:none}` ocultan la barra de scroll en todos los navegadores modernos. En Firefox esta barra ya no ocupa espacio visual, pero en Safari el padding-bottom del track da margen de seguridad.
- El paso de scroll de las flechas equivale al `offsetWidth` de la primera slide más el `gap` del track. Si las slides tienen anchos mixtos, ajustar la función `getCardWidth()`.
- Para accesibilidad de teclado, las cards dentro del track deben ser alcanzables con Tab. El `overflow-x:auto` no bloquea el foco; el scroll se desplaza automáticamente cuando el foco entra en un elemento fuera del viewport.
- Si el número de slides es dinámico (fetch), recalcular el estado de los botones después de inyectar el HTML con `updateArrows()`.
