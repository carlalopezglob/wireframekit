# CAT-MDL-004 | Menú desplegable

**Visualización HTML:** `modules/CAT-MDL/CAT-MDL-004-menu-desplegable.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-MDL |
| **Cuándo usar** | Menús contextuales, menús de usuario y desplegables de navegación anidados. Se agrupa en CAT-MDL (no en CAT-NAV) porque es una capa flotante que aparece sobre el contenido y requiere cierre explícito (clic exterior / Escape) — el mismo patrón de interacción que un modal, aunque su contenido sea navegación. CAT-NAV es para elementos de navegación estructural siempre visibles (barras, breadcrumbs, paginación, tabs). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Disparador (trigger) | Obligatorio | Sí (texto/icono) | Botón con `aria-haspopup` y `aria-expanded` |
| Panel desplegable | Obligatorio | No | `role="menu"`, oculto por defecto |
| Ítems de menú | Obligatorio | Sí | `role="menuitem"`; variante peligrosa (rojo) para acciones destructivas |
| Separador | Opcional | No | Línea divisoria entre grupos de ítems |
| Etiqueta de grupo | Opcional | Sí | Encabezado de subgrupo dentro del panel |
| Cabecera de usuario | Condicional | Sí | Solo en variante "menú de usuario": avatar + nombre + email |
| Navegación de 2 niveles | Condicional | Sí | Ítem con flecha `›` que abre un subnivel con botón "← Volver" |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-MDL-004-A | Menú básico | Lista de acciones simple, con separador antes de la acción destructiva. |
| CAT-MDL-004-B | Menú de usuario | Cabecera con avatar/nombre/email antes de los ítems. |
| CAT-MDL-004-C | Con grupos etiquetados | Ítems agrupados bajo etiquetas de categoría. |
| CAT-MDL-004-D | Disparador de puntos suspensivos (⋯) | Trigger compacto, panel alineado a la derecha — típico de acciones por fila en tabla. |
| CAT-MDL-004-E | Navegación de 2 niveles | El panel puede profundizar a un subnivel con botón de vuelta, manteniendo un CTA persistente visible en ambos niveles. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Ítems de menú | Lista | 2 | ~8 (sin subgrupos) | Con más ítems, agrupar con etiquetas o pasar a navegación de 2 niveles |
| Etiqueta de grupo | Texto plano | — | ~20 car. | — |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Panel | Ancho mínimo 200px, se adapta a la posición del trigger | Igual | Igual |
| Alineación | Puede necesitar forzarse a la derecha para no desbordar el viewport | Configurable (izq./dcha./centro) | Configurable |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Solo un panel puede estar abierto a la vez: abrir uno cierra cualquier otro abierto en la página.
- Cierre por clic exterior, tecla `Escape`, o selección de un ítem.
- En la variante de 2 niveles, al cerrar el panel el estado vuelve automáticamente al nivel 1 para la siguiente apertura.

**Restricciones de implementación:**
- El trigger lleva siempre `aria-haspopup="true"` y `aria-expanded` sincronizado con el estado real del panel.
- Transición de apertura: fade + translateY(-6px) de 120ms. En el cambio de nivel (2 niveles), el wireframe hace show/hide directo — en producción valorar una transición de 150ms con `translate(-100%/0)`.

**Casos edge a contemplar:**
- Trigger cerca del borde derecho o inferior del viewport: el panel debe recolocarse (flip) para no quedar cortado — el wireframe no lo resuelve automáticamente, es responsabilidad de la implementación real.
