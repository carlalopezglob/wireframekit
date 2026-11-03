# CAT-CON-003 | Cita destacada

**Visualización HTML:** `modules/CAT-CON/CAT-CON-003-cita-destacada.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Resaltar un testimonio, una cita de cliente, un dato memorable o una declaración de posicionamiento en medio del flujo de contenido. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Texto de cita | Requerido | Sí | Max 200 caracteres. Font grande, sin itálica. Dentro de `<blockquote>` |
| Comillas decorativas | Automático | No | Generado por `::before` en el blockquote. Solo en variante centrada |
| Nombre del autor | Opcional | Sí | Bold, dentro de `<footer>` del blockquote |
| Cargo / empresa | Opcional | Sí | Muted small, debajo del nombre |
| Avatar | Opcional | No (placeholder) | Círculo 48×48px. Reemplazar por `<img>` en producción |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-003-A | Centrada | Columna estrecha centrada (max-width:600px, margin auto), comillas decorativas via `::before` |
| CON-003-B | Lateral | Borde izquierdo grueso (4px solid accent), padding-left, alineación izquierda, sin comillas decorativas |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto de cita | Texto plano | 20 car. | 200 caracteres | Requerido, siempre visible |
| Autor | Texto plano | — | 60 caracteres | Se oculta con `hidden` |
| Cargo/empresa | Texto plano | — | 80 caracteres | Se oculta con `hidden` |
| Avatar | Imagen | — | 48×48px | Se oculta con `hidden` |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Wrapper centrada | Ancho completo | max-width 600px centrado | max-width 600px centrado |
| Wrapper lateral | Ancho completo | max-width 700px | max-width 700px |
| Texto de cita | clamp reduce tamaño | Intermedio | Full size (hasta 1.75rem) |
| Atribución | Flex row (avatar + texto) | Igual | Igual |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- El texto de la cita NO usa `font-style: italic` — es una elección deliberada de diseño para mayor legibilidad y modernidad visual.
- Las comillas decorativas se generan via `::before` con `font-size: 6rem` y `line-height: 0` — esto las saca del flujo de texto pero mantiene el espacio visual. No usar comillas reales en el contenido.
- En variante lateral, el `::before` se oculta con `display:none` ya que el borde izquierdo cumple la función visual.
- Cuando el autor no existe, ocultar todo el `<footer>` de atribución (incluye avatar + nombre + cargo).
- El avatar es un placeholder visual. En implementación real usar `<img>` con `object-fit: cover` y el mismo border-radius 50%.
- Accesibilidad: el `<blockquote>` debe tener un `<footer>` con `<cite>` para la atribución cuando exista.
