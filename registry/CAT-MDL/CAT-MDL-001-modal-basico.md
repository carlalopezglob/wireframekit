# CAT-MDL-001 | Modal básico

**Visualización HTML:** `modules/CAT-MDL/CAT-MDL-001-modal-basico.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-MDL |
| **Cuándo usar** | Cuando necesitas captar la atención del usuario para una acción puntual: confirmaciones, alertas, formularios cortos o información crítica que requiere respuesta antes de continuar. |

---

## Anatomía

- **Overlay:** capa fija semitransparente que cubre todo el viewport (z-index 1000), desactiva la interacción con el fondo.
- **Panel:** contenedor centrado con cabecera, cuerpo scrollable y pie opcional.
- **Cabecera (`.mdl001__header`):** título h2 a la izquierda + botón ✕ a la derecha.
- **Cuerpo (`.mdl001__body`):** zona de contenido libre, padding uniforme, overflow-y auto si el contenido supera 90vh.
- **Pie (`.mdl001__footer`):** botones de acción, alineados a la derecha. Acción primaria a la derecha, acción secundaria (Cancelar) a su izquierda.

## Variantes

| Variante | Modificador |
| --- | --- |
| Por defecto | `max-width: 560px` |
| Grande | `.mdl001__panel--large` → `max-width: 800px` |
| Sin pie | Eliminar o ocultar `.mdl001__footer` |

## Restricciones de contenido

- El cuerpo no debe contener más de un formulario complejo. Si el flujo es largo, usar un drawer lateral (CAT-MDL-003) o un modal multi-paso.
- El título del modal debe tener 60 caracteres como máximo.
- El pie siempre tiene un máximo de 2 botones: acción principal + acción secundaria.
- No anidar modales.

## Comportamiento responsive

- En móvil (< 600px) el panel ocupa el ancho total menos `var(--space-4)` de margen lateral.
- El max-height (90vh) evita que el modal supere la pantalla; el cuerpo hace scroll interno.
- En pantallas muy pequeñas (< 400px) el pie apila los botones verticalmente (`flex-direction: column-reverse`).

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2025-01 | Versión inicial |

## Notas para UI

- Añadir `focus-trap` en producción: el foco debe quedar atrapado dentro del modal mientras está abierto.
- Al cerrar, devolver el foco al elemento que abrió el modal (`mdl001-open-btn`).
- Tecla `Escape` debe cerrar el modal — añadir listener en producción.
- El overlay click-to-close es opcional; desactivarlo si el modal contiene un formulario con datos no guardados para evitar pérdida accidental.
- Usar `aria-describedby` si el cuerpo contiene un párrafo que describe la acción principal.
