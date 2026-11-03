# CAT-COM-003 | Select

**Visualización HTML:** `modules/CAT-COM/CAT-COM-003-select.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Componente atómico de selección entre opciones predefinidas (nativo `<select>`), cuando hay más de ~5 opciones y no se necesita selección múltiple visible (para eso ver chips o checkboxes). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Label | Opcional | Sí | |
| Campo select | Obligatorio | No | Flecha custom vía `background-image` SVG |
| Opción placeholder | Opcional | Sí | `disabled selected`, p. ej. "Selecciona una opción" |
| Grupos de opciones (`optgroup`) | Opcional | Sí | Para listas largas organizadas por categoría |
| Texto de ayuda / error | Opcional | Sí | Igual que CAT-COM-002 |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-003-A | Básico | Select simple sin agrupar. |
| CAT-COM-003-B | Con grupos (`optgroup`) | Opciones organizadas bajo etiquetas de categoría. |
| CAT-COM-003-C | Con label y helper/error | Igual patrón que el input de texto. |

Tamaños: `.select--sm` y normal (default).
Estados: default, con valor, focus, error, disabled.

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Opciones | Lista | 2 | — | Con muchas opciones, agrupar con `optgroup` |
| Texto de opción | Texto plano | — | ~40 car. | Se corta con el ancho del select |

## Comportamiento responsive

`width: 100%` del contenedor en todos los breakpoints.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- La opción placeholder (`disabled selected`) nunca debe poder volver a seleccionarse una vez el usuario elige otra opción.

**Restricciones de implementación:**
- `appearance: none` + flecha SVG propia — mantener consistente con el resto del kit, no usar la flecha nativa del navegador.

**Casos edge a contemplar:**
- Listas muy largas (países, por ejemplo): valorar un combobox con búsqueda en lugar de un `<select>` nativo si la usabilidad lo requiere — fuera del alcance de este módulo base.
