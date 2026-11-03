# CAT-COM-002 | Input de texto

**Visualización HTML:** `modules/CAT-COM/CAT-COM-002-input-de-texto.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Componente atómico de entrada de texto. Base para cualquier campo de formulario del kit (texto, email, teléfono, textarea). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Label | Opcional | Sí | Recomendado salvo contexto evidente |
| Campo (`input`/`textarea`) | Obligatorio | No | |
| Texto de ayuda (helper) | Opcional | Sí | Bajo el campo, color muted |
| Mensaje de error | Condicional | Sí | Sustituye al helper cuando hay error |
| Icono prefijo | Opcional | No | Dentro del campo, a la izquierda |
| Contador de caracteres | Opcional | No | Esquina inferior derecha, junto a `maxlength` |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-002-A | Básico | Input simple sin label. |
| CAT-COM-002-B | Con label + helper | Campo + etiqueta + texto de ayuda. |
| CAT-COM-002-C | Con icono prefijo | Icono dentro del campo (p. ej. email). |
| CAT-COM-002-D | Con contador | Para campos con `maxlength` visible. |
| CAT-COM-002-E | Textarea | Multilínea, resize vertical, min-height 80px. |

Tamaños: `.input--sm` y normal (default).
Estados: default, con valor, focus, error (`.is-error`), disabled.

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Label | Texto plano | — | ~30 car. | Campo sin etiqueta visible (solo `placeholder`) |
| Helper / error | Texto plano | — | ~80 car. | Se oculta |

## Comportamiento responsive

El campo es `width: 100%` de su contenedor en todos los breakpoints; el layout (columnas, agrupación) lo define el módulo que lo usa.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El estado de error sustituye visualmente al helper — no mostrar ambos a la vez.
- El contador de caracteres se actualiza en cada pulsación (`input` event).

**Restricciones de implementación:**
- `label` debe asociarse al campo con `for`/`id`, incluso cuando se omite visualmente.

**Casos edge a contemplar:**
- Campo con error y contador simultáneos: revisar que no se superpongan visualmente.
