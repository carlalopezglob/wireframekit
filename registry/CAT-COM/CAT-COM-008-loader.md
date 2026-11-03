# CAT-COM-008 | Loader

**Visualización HTML:** `modules/CAT-COM/CAT-COM-008-loader.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Comunicar que el contenido o una acción está cargando. Elegir el tipo según el contexto: spinner/puntos para esperas cortas e indefinidas, barra de progreso cuando se conoce el avance, skeleton para contenido que aún no ha llegado. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Spinner / puntos / barra / skeleton | Obligatorio (uno) | No | Según variante |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-008-A | Spinner | Círculo girando. Tallas sm/normal/lg. Para esperas cortas dentro de un botón o área pequeña. |
| CAT-COM-008-B | Puntos | 3 puntos con animación de rebote secuencial. Alternativa más suave al spinner. |
| CAT-COM-008-C | Barra de progreso | Indeterminada (animación continua) o determinada (`aria-valuenow` con % real). |
| CAT-COM-008-D | Skeleton | Bloques con efecto shimmer que anticipan la forma del contenido real (card, párrafo). |

## Restricciones de contenido

No aplica — es un indicador visual sin contenido editable.

## Comportamiento responsive

Tamaño fijo por variante/talla; el skeleton se adapta al ancho de su contenedor (`width` en %).

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Spinner y puntos llevan `role="status"` + `aria-label="Cargando"`. La barra de progreso determinada lleva `aria-valuenow`/`aria-valuemin`/`aria-valuemax`.
- El skeleton es `aria-hidden="true"` — no debe anunciarse a lectores de pantalla, ya que es puramente visual.

**Restricciones de implementación:**
- Usar barra determinada solo cuando el progreso real es conocido (p. ej. subida de archivo); si no, usar la indeterminada para no mentir sobre el avance.

**Casos edge a contemplar:**
- Cargas que tardan más de lo esperado: considerar un mensaje de texto adicional tras unos segundos (p. ej. "Esto está tardando más de lo normal…") — no cubierto por este wireframe.
