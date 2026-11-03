# CAT-CRD-002 | Grid de cards

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-002-grid-de-cards.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Mostrar un conjunto de ítems de contenido (artículos, recursos, productos) en formato de cuadrícula. Usar cuando hay entre 3 y 4 ítems simultáneos y no se necesita scroll horizontal. Para colecciones más largas o en espacios estrechos, ver CRD-003 (carrusel). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera de sección (overtitle + h2 + subtítulo) | Opcional | Sí | Completo bloque `.section-head`. Ocultar si la sección ya tiene título contextual en el layout padre. |
| Grid de cards | Obligatorio | — | Clase `.grid.grid--3` o `.grid.grid--4` según variante. |
| Cada card | Obligatorio | Sí | Misma estructura que CRD-001: imagen 16:9, tag, h3, extracto, meta, CTA. |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CRD-002-A | 3 columnas | `.grid--3`, 3 cards. Por defecto. |
| CRD-002-B | 4 columnas | `.grid--4`, 4 cards. Cards más estrechas; extracto y tag son opcionales para ganar espacio. |
| CRD-002-C | Sin cabecera | Bloque `.section-head` omitido. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Overtitle | Texto plano | — | 30 car. | Ocultar elemento `.overtitle` |
| H2 | Texto plano | 10 car. | ~60 car. | Obligatorio si la cabecera está visible |
| Subtítulo | Texto plano | — | ~120 car. | Ocultar el `<p>` |
| Número de cards | — | 3 | 4 | Menos de 3: valorar CRD-001; más de 4: valorar paginación o CRD-003 |
| Imagen por card | URL / placeholder | — | — | Eliminar `.card__img`; no dejar hueco vacío |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid 3 cols | 1 columna | 2 columnas | 3 columnas |
| Grid 4 cols | 1 columna | 2 columnas | 4 columnas |
| Cabecera | Ancho completo, centrada | Ídem | Ídem |
| Imagen | 16:9 | 16:9 | 16:9 |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI.

- En la variante de 4 columnas en tablet (768–1199px), el grid colapsa a 2 columnas (comportamiento del sistema). No sobreescribir con CSS personalizado.
- Si se activa la variante de 4 cards sin cambiar a `.grid--4`, la cuarta card ocupa una fila completa sola. Asegurarse de cambiar ambas cosas simultáneamente.
- El botón "Ver todos" / "Cargar más" (si existe paginación) debe colocarse debajo del grid con `text-align:center` o `display:flex; justify-content:center` en el contenedor, no como parte del grid.
- Las cards en el grid heredan `card--clickable`. Si en algún contexto no deben ser clickables (por ejemplo, cards informativas sin enlace), eliminar esa clase y revisar el contraste de hover.
