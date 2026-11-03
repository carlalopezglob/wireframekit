# CAT-NAV-006 | Lista de enlaces
**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-006-lista-de-enlaces.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Cualquier bloque titulado de enlaces: navegación por anclas dentro de la misma página, sidebar de páginas hermanas (con la actual resaltada), bloque de enlaces relacionados, o lista de documentos descargables. No sirve para la navegación principal del sitio (`CAT-NAV-001`) ni para un footer completo (`CAT-NAV-002`). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Título de bloque | Opcional | Sí | Encabezado corto del bloque; se omite si el contexto ya aporta uno (p. ej. dentro de un `<aside>` con su propio heading) |
| Ítem de nivel 1 | Obligatorio (mín. 1) | Sí | Texto + destino |
| Sub-ítems (nivel 2–3) | Opcional | Sí | Anidación máxima 3 niveles |
| Ítem activo / actual | Opcional | No (se calcula por ruta o scroll) | Máximo un ítem activo por lista; `aria-current="page"` |
| Indicador de destino | Opcional | No | Icono solo para enlace externo y archivo descargable — enlace interno y ancla no llevan icono |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| NAV-006-A | Lista simple | Un solo nivel, sin anidación |
| NAV-006-B | Lista anidada | 2–3 niveles de sub-listas indentadas |
| NAV-006-C | Con ítem activo | Un ítem marcado como página/sección actual (resaltado + `aria-current`) |
| NAV-006-D | Destino archivo | Uno o más ítems apuntan a un archivo descargable en vez de a una página |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Título de bloque | Texto plano | 0 | 40 caracteres | Se omite; la lista queda sin encabezado |
| Etiqueta de enlace | Texto plano | 1 carácter | 60 caracteres | Truncar con ellipsis si excede el ancho disponible |
| Ítems de nivel 1 | Lista | 1 | 12 | — |
| Niveles de anidación | Entero | 1 | 3 | Más de 3 niveles: aplanar o repensar como índice de página |
| Ítems activos | Entero | 0 | 1 | — |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Indentación por nivel de anidación | `--space-4` | `--space-6` | `--space-6` |
| Lista | Vertical, un ítem por línea, ancho 100% del contenedor | Vertical | Vertical |
| Ancho del bloque | 100% del contenedor | Si se usa como sidebar, lo define el layout de la página (ajeno al módulo) | Igual que tablet |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El icono de destino es puramente visual y debe derivarse del `href` real (dominio externo, extensión de archivo) — no se marca a mano en el CMS.
- En la variante sidebar de páginas hermanas, el ítem activo se calcula por la ruta actual, nunca a mano.
- En la variante de navegación por anclas, en producción el ítem activo debería actualizarse con scroll-spy; en este wireframe se fija con el panel de estados.
- Anidación máxima recomendada: 3 niveles. Si se necesita más profundidad, replantear como índice de página o menú propio en vez de forzar esta lista.
