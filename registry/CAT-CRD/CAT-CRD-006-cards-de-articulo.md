# CAT-CRD-006 | Cards de artículo

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-006-cards-de-articulo.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Listar varios artículos de blog o recursos en grid, con cabecera de sección y enlace "Ver todos". Para un único ítem destacado y aislado, usar CAT-CRD-001; para un grid genérico de cards no editoriales, usar CAT-CRD-002. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera de sección | Opcional | Sí | Overtitle + H2 + enlace "Ver todos →" |
| Imagen | Opcional | Sí | 16:9 |
| Meta (categoría + fecha + lectura) | Opcional | Sí/Calculado | Igual que CAT-CRD-001 |
| Título (H3) | Obligatorio | Sí | |
| Extracto | Opcional | Sí | |
| Pie de card (autor + enlace "Leer") | Opcional | Sí | Avatar + nombre + enlace |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CRD-006-A | Cuadrícula | Por defecto. 1 col mobile → 2 col tablet → 3 col desktop. 3 o 6 cards. |
| CAT-CRD-006-B | Lista horizontal | Cada card ocupa el ancho completo, imagen a la izquierda (280px) y contenido a la derecha, desde 640px. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Número de cards | Ítems | 3 | 6 | Con más de 6, usar paginación o enlace al hub de contenidos |
| Título | Texto plano | — | 2 líneas en la card | Obligatorio |
| Extracto | Texto plano | — | ~2 líneas | Se oculta |
| Autor | Nombre + avatar | — | — | Se oculta el pie completo |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid | 1 columna | 2 columnas | 3 columnas |
| Lista horizontal | Columna (imagen arriba) hasta 640px, luego fila | Fila | Fila |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El hover de la card aplica una sombra sutil (`0 4px 20px rgba(0,0,0,0.08)`), sin desplazamiento.

**Restricciones de implementación:**
- El CTA "Ver todos →" de la cabecera es independiente de los enlaces "Leer →" de cada card — ambos deben apuntar a rutas reales en el proyecto.

**Casos edge a contemplar:**
- Con 6 cards y disposición "Lista horizontal", revisar la altura total de la sección — puede ser muy larga; valorar si en ese caso conviene forzar cuadrícula.
