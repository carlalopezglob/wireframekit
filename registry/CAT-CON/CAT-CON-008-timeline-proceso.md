# CAT-CON-008 | Timeline / Proceso

**Visualización HTML:** `modules/CAT-CON/CAT-CON-008-timeline-proceso.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Mostrar un proceso secuencial, un roadmap, etapas de un servicio, hitos de un proyecto o una línea de tiempo histórica. El orden y la progresión son el mensaje central. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | `.section-head`: overtitle + h2 + párrafo |
| Círculo numerado | Requerido | No (auto-numera) | 40×40px, fondo `--color-accent`, texto blanco |
| Línea conectora | Automático | No | Elemento visual entre círculos, `--color-border` |
| Título del paso (h3) | Requerido | Sí | Max 60 caracteres |
| Descripción del paso | Opcional | Sí | Max 180 caracteres, color muted |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-008-A | Vertical | Default. Lista vertical con línea conectora a la izquierda. Funciona en todos los breakpoints |
| CON-008-B | Horizontal | Pasos en fila con línea conectora horizontal en la parte superior. Vuelve a vertical en mobile |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Pasos | Ítems de proceso | 3 | 5 | Toggle en kit: 3, 4 o 5 pasos |
| Título del paso | Texto plano | 5 car. | 60 caracteres | Requerido por paso |
| Descripción | Texto plano | — | 180 caracteres | Se oculta con `hidden` en todos los pasos |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Variante vertical | Lista vertical (igual que desktop) | Igual | max-width 680px |
| Variante horizontal | Vuelve a layout vertical (media query) | Horizontal | Horizontal |
| Círculo | 40×40px (sin cambio) | Igual | Igual |
| Línea conectora | Vertical, 2px | Vertical (v.) / Horizontal (h.) | Vertical (v.) / Horizontal (h.) |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- La línea conectora vertical es un `<div class="con008__line">` dentro de `.con008__left`, que crece con `flex: 1` para llenar el espacio entre el círculo y el siguiente paso. El último paso visible no debe mostrar la línea.
- En la variante horizontal, la línea conectora se vuelve horizontal (`height: 2px`, `flex: 1`, `width: auto`) dentro del `.con008__left` que pasa a `flex-direction: row`.
- La variante horizontal vuelve a vertical en mobile (< 768px) via media query — el markup no cambia, solo el CSS.
- Los números en los círculos son contenido HTML. Si se reordenan pasos en el CMS, los números deben actualizarse manualmente o generarse dinámicamente.
- `<ol>` (lista ordenada) es el elemento semántico correcto para pasos con orden relevante. Si el orden no importa, usar `<ul>`.
- La `min-height` de la línea conectora garantiza que cuando la descripción está oculta, hay suficiente separación visual entre círculos.
- Accesibilidad: el `<ol>` tiene `aria-label="Pasos del proceso"`. No se necesitan atributos adicionales en los `<li>` individuales.
