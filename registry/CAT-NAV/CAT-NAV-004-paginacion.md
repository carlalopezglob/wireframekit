# CAT-NAV-004 | Paginación
**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-004-paginacion.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Listados de resultados, blogs, catálogos de productos u cualquier colección paginada con más de una página. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Botón "Anterior" | Obligatorio | No | Deshabilitado en página 1 |
| Botón "Siguiente" | Obligatorio | No | Deshabilitado en última página |
| Números de página | Obligatorio (desktop) | No | Generados dinámicamente |
| Elipsis "…" | Condicional | No | Solo si total > 7 páginas |
| Indicador mobile "X de N" | Obligatorio (mobile) | No | Reemplaza los números en <768px |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| NAV-004-A | Por defecto | Página actual en el centro con elipsis |
| NAV-004-B | Anterior deshabilitado | Primera página activa |
| NAV-004-C | Siguiente deshabilitado | Última página activa |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Total de páginas | Entero | 2 | Sin límite | Con 1 página, ocultar el componente |
| Números visibles | 5 alrededor de la actual + primera y última | — | — | Ajustar ventana si hay pocas páginas |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Números de página | Ocultos | Visibles | Visibles |
| Indicador "X de N" | Visible | Oculto | Oculto |
| Anterior / Siguiente | Visibles | Visibles | Visibles |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El estado deshabilitado debe combinar `disabled` atributo + `aria-disabled="true"` + estilo visual (opacity 0.4).
- La página activa lleva `aria-current="page"` además del estilo visual.
- En listados con scroll infinito, este componente se reemplaza por un botón "Cargar más" — documentar en el módulo de listado correspondiente.
- Número de páginas a mostrar en la ventana (5 alrededor del actual) puede reducirse a 3 si el viewport es muy estrecho.
