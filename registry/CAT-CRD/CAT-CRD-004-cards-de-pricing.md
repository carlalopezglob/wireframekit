# CAT-CRD-004 | Cards de pricing

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-004-cards-de-pricing.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Comparar y presentar planes de precios o niveles de servicio. Usar cuando hay entre 2 y 4 planes con diferencias claras en precio y características. Para un único plan o un formulario de suscripción, usar un componente diferente. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera de sección (overtitle + h2 + subtítulo) | Recomendado | Sí | Proporciona contexto antes de los planes. |
| Card por plan | Obligatorio | — | Mínimo 2, máximo 4. Más de 4 requiere revisión del layout. |
| Nombre del plan (h3) | Obligatorio | Sí | Corto y descriptivo. Máximo 20 caracteres. |
| Badge "Recomendado" | Opcional | Sí | Solo en una card. Usar `.tag` existente. |
| Precio (número + período) | Obligatorio | Sí | Si el precio es variable o "a consultar", reemplazar el bloque de precio por texto plano. |
| Descripción del plan | Opcional | Sí | 1–2 frases. Máximo ~100 caracteres. |
| Lista de características | Recomendado | Sí | Entre 3 y 8 ítems. Más de 8 dificulta la comparación visual. |
| CTA | Obligatorio | Sí | `.btn` para el plan destacado; `.btn--outline` para los demás. |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CRD-004-A | Destacado central | Card del plan Pro con `crd004__card--highlighted` (2px border). Por defecto. |
| CRD-004-B | Destacado izquierda | Highlight en el primer plan (p. ej., plan gratuito destacado como punto de entrada). |
| CRD-004-C | Sin destacado | Todos los planes visualmente iguales; la jerarquía la da solo el contenido. |
| CRD-004-D | Sin descripción | Variante compacta; la lista de características habla por sí sola. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Nombre de plan | Texto plano | 2 car. | 20 car. | Obligatorio; bloquear publicación si vacío |
| Precio | Número o texto | — | 10 car. | Si es "A consultar", reemplazar bloque entero |
| Período | Texto plano | — | 10 car. | Ocultar si el precio no tiene periodicidad (pago único) |
| Características | Lista de texto | 3 ítems | 8 ítems | Si la lista está vacía, ocultar `<ul>` y el separador |
| CTA label | Texto plano | 3 car. | 30 car. | Obligatorio |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Cards | Apiladas verticalmente | Apiladas o 2+1 (revisar) | Fila horizontal (flex row) |
| Altura de cards | Auto | Auto | Igualada por `align-items:stretch` en el padre |
| Precio | Clamp 2–3rem | Clamp 2–3rem | Clamp 2–3rem |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI.

- `align-items:stretch` en `.crd004__grid` garantiza que todas las cards tengan la misma altura en desktop, independientemente del número de características. Los CTAs quedan alineados al pie gracias al `flex:1` del body.
- El borde de la card destacada es de 2px (vs 1px de las otras). El color es `--color-accent` para mantener coherencia con la paleta. No usar un fondo de color diferente en la card destacada: complica el contraste de texto y quiebra la coherencia del sistema.
- En mobile, las cards se apilan. Considerar reordenar el DOM en plantillas de servidor para que el plan recomendado aparezca primero (no hay CSS que cambie el orden sin `order`, que puede confundir a lectores de pantalla).
- El badge "Recomendado" ocupa espacio físico en el layout: si se oculta con `hidden`, las otras cards no tienen el mismo padding superior. Si la alineación exacta de los nombres de plan es crítica, usar `visibility:hidden` en el badge de las otras cards en lugar de `hidden`.
- Para precios anuales con descuento, añadir un segundo bloque de precio tachado encima del precio principal; esto no está en el módulo base pero es un caso frecuente.
