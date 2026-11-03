# CAT-MDL-003 | Drawer lateral

**Visualización HTML:** `modules/CAT-MDL/CAT-MDL-003-drawer-lateral.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-MDL |
| **Cuándo usar** | Navegación secundaria, menús móviles, paneles de filtros, carritos de compra o cualquier contenido auxiliar que no justifica una página completa y se beneficia de permanecer anclado al lateral de la pantalla. |

---

## Anatomía

- **Overlay (`.mdl003__overlay`):** capa fija semitransparente (rgba 0,0,0,0.4) que cubre el viewport excepto el drawer. Clic cierra el drawer.
- **Drawer (`.mdl003__drawer`):** panel anclado al lado derecho, altura 100vh, desplazamiento vertical interno.
  - **Cabecera:** título h2 + botón ✕.
  - **Cuerpo (`.mdl003__body`):** lista de navegación con links `.mdl003__nav-link`, separados por borde inferior. Flex:1, overflow-y:auto.
  - **Pie (`.mdl003__footer`, opcional):** botón CTA de ancho completo.

## Variantes

| Variante | Modificador / Ancho |
| --- | --- |
| Angosto | `.mdl003__drawer--narrow` → 280px |
| Normal | (sin modificador) → 380px |
| Ancho | `.mdl003__drawer--wide` → 480px |
| Sin pie | Eliminar `.mdl003__footer` |

## Restricciones de contenido

- El cuerpo puede contener cualquier contenido; si supera la altura de pantalla el scroll interno gestiona el desbordamiento.
- No usar más de 8 ítems de primer nivel en la lista sin añadir secciones o categorías.
- El pie se reserva para una única acción CTA principal. No añadir más de 2 botones en el pie.
- Anchor a la derecha; si se necesita drawer izquierdo, cambiar `right:0` por `left:0` en `.mdl003__drawer`.

## Comportamiento responsive

- `max-width: 90vw` evita que el drawer cubra la pantalla completa en móvil.
- En pantallas mayores de 1024px puede considerarse el drawer siempre visible (sin overlay) como sidebar fija.
- El overlay oscurece el contenido detrás pero no impide el scroll del cuerpo del drawer.

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2025-01 | Versión inicial |

## Notas para UI

- Añadir animación de entrada `transform: translateX(100%)` → `translateX(0)` con `transition: transform 0.25s ease` en producción.
- Incluir `focus-trap` mientras el drawer esté abierto.
- `Escape` debe cerrar el drawer en producción.
- Al cerrar, devolver el foco al elemento que abrió el drawer.
- Si el drawer se usa como carrito de compra, añadir `aria-live="polite"` en el cuerpo para anunciar cambios de contenido.
- El drawer lateral izquierdo es más apropiado para navegación principal (patrón hamburger); el derecho para paneles contextuales (filtros, carrito, detalles).
