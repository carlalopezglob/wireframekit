# CAT-COM-010 | Chip / Filtro

**Visualización HTML:** `modules/CAT-COM/CAT-COM-010-chip-filtro.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Etiqueta interactiva (clicable) para filtrar, seleccionar categorías o mostrar un resumen de filtros activos. Para una etiqueta puramente informativa y no clicable, usar CAT-COM-004 (Badge). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Texto | Obligatorio | Sí | |
| Icono (opcional) | Opcional | No | Antes del texto, máx. 16×16px |
| Botón de cierre (`×`) | Condicional | No | Solo en chips eliminables / filtros activos |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-010-A | Selección múltiple | Varios chips activos a la vez (`role="group"`). Para filtros de categoría. |
| CAT-COM-010-B | Selección única | Solo un chip activo a la vez, comportamiento tipo radio. Para orden o vistas. |
| CAT-COM-010-C | Eliminable | Chip con botón `×` interno que lo retira. |
| CAT-COM-010-D | Resumen de filtros activos | Fila de chips eliminables + enlace "Limpiar todo". |
| CAT-COM-010-E | Con icono | Icono + texto dentro del chip. |

Tamaños: `.chip--sm` · normal (default) · `.chip--lg`.
Estados: default, hover, seleccionado (`.chip--selected`), deshabilitado.

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto del chip | Texto plano | — | ~25 car. | — |
| Filtros activos simultáneos | Cantidad | — | 6-7 | Con más, revisar el diseño de filtrado |

## Comportamiento responsive

`flex-wrap` en todos los breakpoints — los chips envuelven a nueva línea cuando no caben.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- En selección única, activar un chip desactiva automáticamente los demás del mismo grupo (`data-single`).
- "Limpiar todo" retira todos los chips de filtros activos a la vez.

**Restricciones de implementación:**
- Nunca mezclar selección única y múltiple en el mismo grupo visual. Los chips son siempre `<button>`, nunca `<span>` o `<div>` sin semántica de control.
- El botón de cierre siempre lleva `aria-label` descriptivo (p. ej. "Eliminar filtro Talla: M").

**Casos edge a contemplar:**
- Tamaño mínimo de toque: 32px de alto — revisar en la variante `--sm` que no quede por debajo en mobile.
