# CAT-CRD-001 | Card básica

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-001-card-basica.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Presentar un único ítem de contenido (artículo, recurso, producto) en un contexto donde se necesita destacar ese elemento de forma aislada — por ejemplo, un artículo relacionado al final de un post, o un recurso destacado en un sidebar. No usar para listas o conjuntos: ver CRD-002. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Imagen | Opcional | Sí | Relación de aspecto 16:9. Si no hay imagen, eliminar `.card__img` completo; no dejar el placeholder vacío en producción. |
| Etiqueta (tag) | Opcional | Sí | Categoría del contenido. Máximo 24 caracteres para evitar desbordamiento. |
| Título (h3) | Obligatorio | Sí | Sin límite estricto, pero el diseño está pensado para 4–10 palabras. Títulos largos cortan con 2 líneas. |
| Extracto | Opcional | Sí | Limitado a 3 líneas con `line-clamp`. El CMS debe advertir si el campo supera ~200 caracteres. |
| Fecha + tiempo de lectura | Opcional | Calculado | La fecha se formatea por el frontend; el tiempo de lectura lo calcula el backend (palabras / 200). |
| CTA (enlace) | Opcional | Sí | Texto configurable. Por defecto "Leer artículo →". |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CRD-001-A | Default | Con imagen, tag, extracto, meta y CTA. Clickable. |
| CRD-001-B | Sin imagen | `.card__img` eliminado; el body ocupa toda la card. |
| CRD-001-C | Sin tag | `.crd001__tag-wrap` oculto con `hidden`. |
| CRD-001-D | Solo título + CTA | Extracto y meta ocultos; versión compacta. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Imagen | URL de imagen / placeholder | — | — | Eliminar `.card__img`; no mostrar placeholder en producción |
| Etiqueta | Texto plano | 1 car. | 24 car. | Ocultar contenedor `.crd001__tag-wrap` |
| Título | Texto plano | 10 car. | ~80 car. | Campo obligatorio; bloquear publicación si vacío |
| Extracto | Texto plano | — | ~200 car. | Ocultar con `hidden`; no mostrar puntos suspensivos vacíos |
| Fecha | ISO 8601 | — | — | Ocultar bloque meta completo |
| CTA label | Texto plano | 2 car. | 30 car. | Ocultar enlace si no hay texto |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Card | Ancho completo (con `max-width:380px` centrado) | Ídem | Ídem |
| Imagen | 16:9 | 16:9 | 16:9 |
| Extracto | 3 líneas (clamp) | 3 líneas | 3 líneas |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI.

- El estado hover (`.card--clickable`) añade `transform:translateY(-2px)` y `box-shadow`. Asegurarse de que la transición CSS esté definida en `shared/styles.css` para evitar saltos bruscos.
- La card puede ser completamente clickable (área completa) mediante un enlace absoluto dentro del `<article>`. En ese caso, el CTA explícito debe suprimirse para evitar enlaces anidados.
- Si el tag forma parte de una taxonomía navegable, el `<span class="tag">` debe convertirse en `<a class="tag" href="/categoría">` para mantener la semántica.
- El `<article>` implica contenido autónomo. Si la card se usa para contenido no editorial (producto, usuario), considerar cambiar a `<div role="article">` o simplemente `<div>`.
