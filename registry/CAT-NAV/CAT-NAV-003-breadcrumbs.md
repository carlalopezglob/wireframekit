# CAT-NAV-003 | Breadcrumbs
**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-003-breadcrumbs.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Páginas interiores de 2 o más niveles de profundidad. Proporciona orientación al usuario y ruta de regreso sin ocupar espacio visual significativo. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Ítem raíz (Inicio) | Obligatorio | No | Siempre primer ítem; texto fijo o traducción i18n |
| Ítems intermedios | Condicional | Sí | Solo si hay niveles entre raíz y actual |
| Página actual | Obligatorio | No | No es enlace; `aria-current="page"` |
| Separadores "/" | Decorativo | No | Via `::after` CSS — no incluir en el HTML |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| NAV-003-A | 2 niveles | Inicio / Página actual |
| NAV-003-B | 3 niveles | Inicio / Sección / Página actual |
| NAV-003-C | 4 niveles | Inicio / Sección / Subsección / Página actual |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Etiqueta de ítem | Texto plano | 1 carácter | 40 caracteres | Truncar con ellipsis en mobile |
| Número de niveles | Entero | 2 | 4 | Con >4 niveles considerar colapso central |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Lista | `flex-wrap: wrap` — puede partir en 2 líneas | Una línea | Una línea |
| Ítems intermedios (>3 niveles) | Considerar ocultar el/los del medio con "…" | Todos visibles | Todos visibles |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El componente no lleva `h1`/`h2` — se incrusta antes o después del título de la página.
- Usar `<nav aria-label="Ruta de navegación">` y `<ol>` (no `<ul>`) — es una secuencia ordenada.
- En mobile con 4 niveles, valorar colapsar los intermedios a "…" para no partir en 3 líneas.
