# CAT-CON-006 | Acordeón FAQ

**Visualización HTML:** `modules/CAT-CON/CAT-CON-006-acordeon-faq.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Secciones de preguntas frecuentes, políticas, especificaciones técnicas detalladas o cualquier contenido que se beneficie de ser progresivo (el usuario abre solo lo que le interesa). |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | `.section-head`: overtitle + h2 + párrafo intro |
| Ítem de acordeón | Requerido (mín. 4) | Sí | Cada ítem: trigger (botón) + panel (contenido) |
| Pregunta / trigger | Requerido | Sí | Botón full-width, `font-weight: 600` |
| Icono chevron | Automático | No | Carácter `▸`, rota 90° cuando abierto |
| Respuesta / panel | Requerido | Sí | Texto plano o HTML básico, color muted |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| — | Única variante | Sin variante visual diferenciada. El número de ítems es configurable (4, 5 o 6) |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Ítems | Pares pregunta/respuesta | 4 | 6 | Toggle en kit: 4, 5 o 6 ítems |
| Pregunta | Texto plano | 10 car. | 120 caracteres | Requerido por ítem |
| Respuesta | Texto plano / HTML básico | — | ~300 palabras | Requerido por ítem |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Lista de ítems | Ancho completo | max-width 760px | max-width 760px |
| Trigger | Padding vertical reducido | `--space-4` | `--space-4` |
| Panel | Stack vertical | Igual | Igual |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- Accesibilidad crítica: cada `<button>` trigger tiene `aria-expanded` (true/false) y `aria-controls` apuntando al id del panel. Cada panel tiene `role="region"` y `aria-labelledby` apuntando al trigger.
- El JS actualiza `aria-expanded` en cada click. No usar solo CSS para mostrar/ocultar — los lectores de pantalla dependen del atributo ARIA.
- El estado inicial es: primer ítem abierto (`aria-expanded="true"`, sin atributo `hidden` en el panel), resto cerrados.
- El comportamiento actual permite múltiples ítems abiertos simultáneamente. Si el cliente necesita comportamiento exclusivo (solo uno abierto), agregar lógica de cierre de otros paneles en el click handler.
- El icono chevron `▸` (U+25B8) se puede reemplazar por un SVG para mejor control visual. La clase `.con006__icon--open` añade `transform: rotate(90deg)`.
- Borde separador: solo `border-bottom` en cada ítem, sin borde exterior en la lista. No añadir `border-top` al primer ítem.
