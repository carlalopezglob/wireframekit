# CAT-CON-018 | Lista simple de texto

**Visualización HTML:** `modules/CAT-CON/CAT-CON-018-lista-simple-de-texto.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Enumerar afirmaciones cortas (instalaciones, requisitos, características, condiciones) cuando un tratamiento de card o grid sería sobredimensionado para el contenido. Es el módulo más ligero de enumeración del catálogo: solo texto, sin imagen, sin icono y sin enlace por ítem — si cualquiera de esos tres elementos hace falta, no es este módulo (ver "Diferencia con otros módulos" en Notas para UI). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Título del contenedor | Opcional | Sí | H2 o H3 sobre la lista. Si se omite, la lista sube sin hueco vacío |
| Numeración | Opcional (config. del contenedor) | No | Ninguna / bullets / numerada — se aplica a todos los ítems por igual, no se mezcla dentro de una misma lista |
| Ítem | Obligatorio (mín. 3) | Sí | **Solo texto.** Nunca imagen, icono ni enlace individual por ítem |

---

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CAT-CON-018-A | Sin marcador | Por defecto. Ítems sin viñeta ni número, solo separación vertical |
| CAT-CON-018-B | Bullets | Punto (viñeta) antes de cada ítem |
| CAT-CON-018-C | Numerada | Número secuencial antes de cada ítem (1, 2, 3…) |

---

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Título | Texto plano | — | 60 caracteres | La lista sube; sin hueco vacío |
| Ítems | Texto plano | 3 | 15 (wireframe); sin límite estructural en producción | Por debajo de 3 ítems, valorar si el contenido no cabe mejor como párrafo corrido |
| Texto del ítem | Texto plano | 3 car. | 100 caracteres (~1-2 líneas desktop) | Requerido por ítem |

**Explícitamente fuera de este módulo** (si el contenido real necesita alguno de estos, usar otro módulo del catálogo):
- Imagen o icono por ítem → ver CAT-CON-009 Bloque de características
- Enlace individual por ítem, o ítem clicable → ver un módulo de cards/grid de navegación

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Lista | 1 columna, ancho completo | max-width 640px | max-width 640px |
| Ítem | Padding vertical reducido | `--space-3` | `--space-3` |
| Numeración/bullets | Igual en los 3 breakpoints — no cambia de tipo según el viewport | Igual | Igual |

---

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Estructura semántica:**
- Las tres variantes comparten `<ul>` con `list-style: none` y marcador propio vía `::before` (mismo patrón que `.slot-list` de CAT-CON-001) — no usar el bullet/número nativo del navegador, no sigue los tokens del kit.
- En el wireframe, la variante "Numerada" usa un contador CSS (`counter-increment`) sobre el mismo `<ul>` para poder alternar entre las 3 variantes con el panel de estados sin cambiar de etiqueta. **En producción**, si el orden de los ítems es semánticamente significativo (p. ej. pasos de un proceso), cambiar el contenedor a `<ol>` real — el wireframe prioriza la alternancia de variantes sobre la semántica exacta de la etiqueta.

**Diferencia con otros módulos (para no mezclar):**
- CAT-CON-009 Bloque de características: cada ítem lleva marcador (icono/imagen/ninguno) y puede tener contenido flexible por columna (texto, lista o stats) — pensado para un grid escaneable de funcionalidades, más pesado visualmente.
- CAT-CON-006 Acordeón FAQ: pares pregunta/respuesta con revelado progresivo — usar cuando el contenido de cada ítem es largo y se beneficia de ocultarse por defecto. Este módulo (018) es para afirmaciones cortas, siempre visibles, sin interacción.
- Este módulo (018): la opción más ligera — ni iconos, ni interacción, ni jerarquía de dos niveles. Puro texto enumerado.

**Comportamiento interactivo:** ninguno — bloque estático.

**Casos edge a contemplar:**
- Ítems de longitud muy desigual (uno de 5 caracteres junto a otro de 95): el espaciado vertical entre ítems es fijo (no proporcional a la longitud del texto) — no debería generar ritmo visual extraño, pero revisar con contenido real si algún ítem ocupa 3+ líneas.
- Numeración con más de 9 ítems: el contador pasa a 2 dígitos ("10.") — verificar que el espaciado entre el número y el texto no se descompensa frente a los ítems de 1 dígito (usar un ancho mínimo para el marcador, no padding fijo pegado al número).
