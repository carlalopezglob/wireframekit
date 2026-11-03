# CAT-CON-005 | Stats / Métricas

**Visualización HTML:** `modules/CAT-CON/CAT-CON-005-stats.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Destacar métricas clave de negocio, KPIs o datos de impacto que refuercen la credibilidad o propuesta de valor. Especialmente efectivo como separador visual entre secciones de contenido. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Clase `.section-head`: overtitle + h2 + párrafo |
| Número / métrica | Requerido por stat | Sí | Texto libre: "98%", "+500", "12", "40+" |
| Etiqueta | Requerido por stat | Sí | Max 40 caracteres, color muted |
| Descripción adicional | Opcional por stat | Sí | Max 60 caracteres, color muted, font 0.8rem |
| Divisores verticales | Opcionales | No | Pseudo-elemento `::after` entre stats |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-005-A | Clara | Fondo blanco/gris (hereda de sección), texto en --color-text |
| CON-005-B | Oscura | Fondo --color-accent, números y texto en blanco |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Stats | Ítems de métrica | 3 | 4 | Toggle en kit: 3 o 4 stats |
| Número | Texto plano | 1 car. | 8 caracteres | Requerido por stat |
| Etiqueta | Texto plano | 5 car. | 40 caracteres | Requerido por stat |
| Descripción | Texto plano | — | 60 caracteres | Se oculta con `hidden` en todos |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| 3 stats | Grid 2 col, tercero centrado debajo | Flex row | Flex row |
| 4 stats | Grid 2×2 | Flex row | Flex row |
| Números | `clamp(2.5rem, 5vw, 4rem)` | Intermedio | Max 4rem |
| Divisores | Ocultos en mobile | Visibles | Visibles |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- El tamaño del número usa `clamp(2.5rem, 5vw, 4rem)` con `font-weight: 800` — no reducir por debajo de 2.5rem ni cambiar el peso.
- En la variante oscura, el fondo es `var(--color-accent)` (#333333). Si el accent del cliente es un color muy oscuro, verificar contraste WCAG AA con texto blanco.
- Los divisores verticales son pseudo-elementos `::after` posicionados absolutamente. Se ocultan automáticamente en el último stat de la fila.
- En mobile con 3 stats: los dos primeros ocupan cada uno una columna, el tercero se extiende a ancho completo y se centra visualmente.
- Los números son texto plano — se pueden animar con countUp.js o Intersection Observer en producción si el proyecto lo requiere.
- La variante oscura desactiva la opción de radio "Fondo" del kit-states ya que el color está determinado por la variante.
