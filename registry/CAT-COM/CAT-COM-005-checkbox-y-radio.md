# CAT-COM-005 | Checkbox y Radio

**Visualización HTML:** `modules/CAT-COM/CAT-COM-005-checkbox-y-radio.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Checkbox para selección múltiple independiente (sí/no, aceptar términos); Radio para selección única dentro de un grupo de opciones mutuamente excluyentes. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Control (checkbox/radio) | Obligatorio | No | `appearance: none`, estilo custom |
| Etiqueta | Obligatorio | Sí | Texto clicable, asociado al control |
| Sub-descripción | Opcional | Sí | Línea secundaria bajo la etiqueta |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-005-A | Checkbox simple | Marcado / sin marcar. |
| CAT-COM-005-B | Checkbox indeterminado | Estado "parcial" (selección mixta en un grupo). |
| CAT-COM-005-C | Radio en grupo | Varias opciones, una sola seleccionable (`name` compartido). |
| CAT-COM-005-D | Con descripción | Etiqueta + sub-texto explicativo (p. ej. selector de plan). |

Estados (ambos): default, marcado, deshabilitado (sin marcar y marcado).

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Etiqueta | Texto plano | — | ~60 car. | Obligatoria |
| Sub-descripción | Texto plano | — | ~80 car. | Se omite |
| Opciones de radio por grupo | Cantidad | 2 | ~6 | Con más opciones, valorar un select |

## Comportamiento responsive

Elemento inline-flex sin breakpoints propios; el layout en columnas lo define el módulo contenedor.

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El estado indeterminado del checkbox se establece vía JS (`el.indeterminate = true`), no existe un atributo HTML nativo para ello.
- Toda la etiqueta (`<label>`) es clicable, no solo el control.

**Restricciones de implementación:**
- Los radios de un mismo grupo comparten siempre el mismo `name`.

**Casos edge a contemplar:**
- Checkbox indeterminado + interacción del usuario: al hacer clic debe pasar a un estado definido (marcado o sin marcar), nunca quedarse indeterminado tras la interacción.
