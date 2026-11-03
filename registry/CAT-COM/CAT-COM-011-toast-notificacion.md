# CAT-COM-011 | Toast / Notificación

**Visualización HTML:** `modules/CAT-COM/CAT-COM-011-toast-notificacion.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-COM |
| **Cuándo usar** | Informar al usuario sobre el resultado de una acción. Banner inline para mensajes persistentes ligados a un contenido concreto; toast flotante para confirmaciones puntuales (guardado, error, subida) que no deben bloquear la pantalla. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Icono semántico | Obligatorio | No | Refuerza el tipo sin depender solo del color |
| Título | Obligatorio | Sí | Máx. ~30 car. |
| Mensaje | Opcional | Sí | Banner: más detalle permitido. Toast: máx. 2 líneas |
| Botón de cierre | Obligatorio | No | `×`, siempre funcional |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-COM-011-A | Banner inline | Se inserta en el flujo del documento, junto al contenido afectado. Permanece hasta que se cierra manualmente. |
| CAT-COM-011-B | Toast flotante | Posición fija (esquina inferior derecha por defecto; configurable a izquierda o centro). Auto-desaparece a los 4s. |

Tipos semánticos (ambas variantes): info, success, warning, error — color de borde/icono distinto por tipo.

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Título | Texto plano | — | ~30 car. | Obligatorio |
| Mensaje (toast) | Texto plano | — | 2 líneas | Se omite, queda solo el título |
| Toasts simultáneos en pantalla | Cantidad | — | 3 | El cuarto desplaza (elimina) al primero |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet/Desktop |
| --- | --- | --- |
| Toast stack | Ancho completo con margen de 1rem a cada lado | max-width 340-400px, anclado a la esquina/centro elegido |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El toast se auto-elimina a los 4 segundos o antes si el usuario lo cierra manualmente.
- El contenedor del stack de toasts lleva `aria-live="polite"` para que los lectores de pantalla anuncien los mensajes sin interrumpir.

**Restricciones de implementación:**
- El banner inline nunca se auto-elimina — solo se cierra por acción explícita del usuario.
- Un toast puede incluir una acción opcional (p. ej. "Deshacer"), alineada a la derecha del mensaje.

**Casos edge a contemplar:**
- Varios toasts disparados en rápida sucesión: verificar que el límite de 3 en el stack se respeta y que el más antiguo se retira con una transición suave, no de golpe.
