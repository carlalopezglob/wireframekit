# CAT-CON-004 | Lista de características

**Visualización HTML:** `modules/CAT-CON/CAT-CON-004 Lista de caracteristicas.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Presentar un conjunto de características, funcionalidades o beneficios en formato de grid escaneable. Ideal para páginas de producto, planes o propuestas de valor. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Clase `.section-head`: overtitle + h2 + párrafo descriptivo |
| Ícono placeholder | Opcional | No (placeholder) | 48×48px, radius md. Reemplazar por SVG o componente de icono |
| Título de ítem (h3) | Requerido | Sí | Max 50 caracteres por ítem |
| Descripción de ítem | Opcional | Sí | Max 120 caracteres por ítem. Color muted |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-004-A | 3 columnas | `.grid.grid--3` — 1 col mobile, 2 col tablet, 3 col desktop |
| CON-004-B | 2 columnas | `.grid.grid--2` — 1 col mobile, 2 col tablet y desktop |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Ítems en grid | Ítems individuales | 2 | 6 | Kit muestra 4 o 6 vía toggle |
| Título de ítem | Texto plano | 5 car. | 50 caracteres | Requerido por ítem |
| Descripción | Texto plano | — | 120 caracteres | Se oculta con `hidden` en todos los ítems |
| Ícono | SVG / imagen 48×48 | — | — | El placeholder se oculta con `hidden` |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid 3 col | 1 columna | 2 columnas | 3 columnas |
| Grid 2 col | 1 columna | 2 columnas | 2 columnas |
| Ícono | 48×48px (sin cambio) | Igual | Igual |
| Encabezado | Stack vertical | Igual | Igual |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- Los ítems NO usan `.card` — no deben tener borde, fondo propio ni sombra. Son simplemente icon + título + texto en columna.
- Los íconos son placeholders de 48×48px con `border-radius: var(--radius-md)`. En producción reemplazar por `<svg>` o un sistema de iconos (Lucide, Heroicons, etc.).
- El grid usa las clases del sistema de diseño compartido (`.grid.grid--3`, `.grid.grid--2`). No definir columnas con CSS propio.
- Para contenido sin ícono, el ítem queda solo con título + descripción — visualmente funciona bien como lista de features en texto.
- Evitar descripciones de más de 2 líneas para mantener el ritmo visual del grid.
