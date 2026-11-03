# CAT-NAV-005 | Stepper

**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-005-stepper.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Indicar progreso en un proceso de varios pasos (checkout, onboarding, formulario multi-paso) de forma siempre visible, a diferencia de un stepper embebido dentro de un módulo de formulario concreto (ver CAT-FRM-004, que incluye su propio indicador integrado). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Burbuja numerada | Obligatorio | No | Número; se sustituye por ✓ cuando el paso está completado |
| Etiqueta del paso | Obligatorio | Sí | 1-3 palabras |
| Sub-etiqueta | Opcional | Sí | Solo en variante vertical ("Completado", "En progreso"…) |
| Conector | Obligatorio | No | Línea entre burbujas; cambia de color según progreso |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-NAV-005-A | Horizontal | Por defecto. Pasos en fila, con scroll horizontal si no caben. |
| CAT-NAV-005-B | Vertical | Pasos en columna, con sub-etiqueta de estado y conector vertical. Útil para paneles laterales o resúmenes de progreso. |
| CAT-NAV-005-C | Compacto | Sin etiquetas, solo las burbujas — para espacios reducidos. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Número de pasos | Entero | 2 | 6 | Con más de 6 en horizontal, revisar que no se vuelva ilegible en mobile |
| Etiqueta de paso | Texto plano | — | ~15 car. (horizontal), más margen en vertical | — |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Horizontal | Scroll horizontal si excede el ancho | Ancho completo | Ancho completo |
| Vertical | Sin cambios — ya es columna por defecto | Igual | Igual |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El paso activo lleva `aria-current="step"`.
- Pasos completados se marcan visualmente (color + icono ✓) y deben comunicar también `aria-label="Completado"`.
- Pasos deshabilitados (futuros) no deben ser clicables; añadir `aria-disabled="true"`.

**Restricciones de implementación:**
- Decidir en cada proyecto si los pasos ya completados son navegables (clic para volver) o el flujo es solo hacia adelante — este wireframe no define esa interacción, solo el estado visual.

**Casos edge a contemplar:**
- Con etiquetas largas en la variante horizontal y muchos pasos, el `white-space: nowrap` puede forzar scroll horizontal incómodo — valorar la variante compacta o vertical en ese caso.
