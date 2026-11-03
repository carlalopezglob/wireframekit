# CAT-CON-010 | Banner CTA

**Visualización HTML:** `modules/CAT-CON/CAT-CON-010-banner-cta.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Franja de llamada a la acción, normalmente al cierre de una página o sección, para dirigir al usuario a un siguiente paso claro (registro, contacto, demo). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Etiqueta (tag/pill) | Opcional | Sí | Útil para urgencia u oferta |
| Título (H2) | Obligatorio | Sí | Máx. 80 car. (~2 líneas desktop) |
| Subtítulo | Opcional | Sí | Máx. 120 car. |
| CTA principal | Obligatorio | Sí | Siempre visible |
| CTA secundario | Opcional | Sí | Solo si hay un segundo destino claro |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-010-A | Centrado | Texto y CTAs centrados, en columna. Layout por defecto. |
| CAT-CON-010-B | Horizontal | ≥768px: texto a la izquierda, CTAs a la derecha en columna. |
| CAT-CON-010-C | Fondo oscuro | Usa `var(--color-accent)` de fondo; ajusta automáticamente los colores de texto y etiqueta. |
| CAT-CON-010-D | Fondo superficie / con borde superior | Alternativas de fondo más suaves para no competir con bloques vecinos. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Etiqueta | Texto plano | — | 30 car. | Se oculta |
| Título | Texto plano | — | 80 car. | Obligatorio |
| Subtítulo | Texto plano | — | 120 car. | Se oculta |
| CTA principal / secundario | Texto plano | — | 30 car. | Se ocultan de forma independiente |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout horizontal | Colapsa a centrado en 1 columna | Texto + CTAs en fila | Igual |
| CTAs | `flex-wrap`, en fila centrada | En columna si horizontal | Igual |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno más allá de los enlaces de los CTA.

**Restricciones de implementación:**
- El fondo oscuro (`--color-accent`) recalcula automáticamente el color de texto, etiqueta y subtítulo — no fijar colores sueltos al cambiar de variante de fondo.

**Casos edge a contemplar:**
- Con etiqueta + título + subtítulo + 2 CTAs a la vez, comprobar que no se sature verticalmente en mobile.
