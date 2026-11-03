# CAT-CON-002 | Bloque solo texto

**Visualización HTML:** `modules/CAT-CON/CAT-CON-002-bloque-solo-texto.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Secciones de contenido editorial puro sin imágenes: introducción de sección, descripción de propuesta de valor, texto de contexto antes de un CTA. |

---
## Anatomía
| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Overtitle (eyebrow) | Opcional | Sí | Texto breve en mayúsculas o capitales, clase `.overtitle` |
| Título h2 | Requerido | Sí | Max recomendado: 80 caracteres |
| Subtítulo | Opcional | Sí | Párrafo muted debajo del título, max 150 caracteres |
| Párrafos de cuerpo | Opcionales (1–2) | Sí | Siempre alineados a la izquierda |
| CTA | Opcional | Sí | Puede ser `.btn`, `.btn--outline` o `.btn--link` |

## Variantes
| Código | Nombre | Diferencia |
| --- | --- | --- |
| CON-002-A | Ancho completo | El wrapper de texto no tiene max-width limitante dentro del container |
| CON-002-B | Estrecho | Wrapper con max-width:55ch para líneas de lectura óptimas |

## Restricciones de contenido
| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Overtitle | Texto plano | — | 50 caracteres | Se oculta con `hidden` |
| Título h2 | Texto plano | 10 car. | 80 caracteres | Requerido, siempre visible |
| Subtítulo | Texto plano | — | 150 caracteres | Se oculta con `hidden` |
| Párrafos | HTML básico (p, strong, em) | — | 2 párrafos | El bloque se oculta con `hidden` |
| CTA | Texto de enlace | — | 40 caracteres | El contenedor se oculta con `hidden` |

## Comportamiento responsive
| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Wrapper | Ancho completo | max-width 700px | max-width 700px (o 55ch en variante estrecha) |
| Tipografía h2 | Tamaño reducido por `clamp` del sistema | Intermedio | Full size |
| CTA | Ancho completo si necesario | Inline | Inline |

## Historial
- v1.0 · Creación

---
## Notas para UI
> Esta sección es para el equipo de UI.

- El `max-width: 700px` del wrapper convive con el `max-width: 1200px` del `.container`. El wrapper siempre es hijo directo del container.
- En variante estrecha usar `max-width: 55ch` — las ch units garantizan líneas de lectura óptimas independientemente del tamaño de fuente.
- Nunca añadir `text-align: center` a ningún párrafo — la regla global `p { text-align: left }` del sistema aplica.
- El CTA puede cambiar de nivel de énfasis según el contexto de la página: `.btn` (primario), `.btn--outline` (secundario), `.btn--link` (terciario/ghost).
- Si el módulo precede a un hero o sección con imagen, usar variante ancho completo. Si está solo en una sección de lectura, usar variante estrecha.
