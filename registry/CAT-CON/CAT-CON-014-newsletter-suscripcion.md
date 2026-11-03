# CAT-CON-014 | Newsletter / Suscripción

**Visualización HTML:** `modules/CAT-CON/CAT-CON-014-newsletter-suscripcion.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Captar suscripciones a una newsletter o lista de correo. Puede ir como bloque de página o como cierre de sección (p. ej. final de un artículo de blog). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Sobretítulo | Opcional | Sí | Máx. 30 car. |
| Título (H2) | Obligatorio | Sí | |
| Subtítulo | Opcional | Sí | Máx. 120 car. |
| Campo de email | Obligatorio | No | `type="email"`, validación nativa |
| CTA de envío | Obligatorio | Sí | Texto configurable, máx. 20 car. |
| Texto legal | Opcional | Sí | Máx. 60 car., p. ej. "Sin spam. Cancela cuando quieras." |
| Prueba social | Opcional | Sí | Solo en variante centrada; 2-3 datos numéricos |
| Estado de éxito | Obligatorio (interacción) | No | Sustituye al formulario tras el envío |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-014-A | Centrada | Por defecto. Input + botón en fila desde 640px, máx. 560px de ancho. Incluye prueba social. |
| CAT-CON-014-B | Horizontal (split) | Desde 768px, 50/50: texto a la izquierda, formulario a la derecha. Sin prueba social. |
| CAT-CON-014-C | Tarjeta elevada | Card centrada con fondo, borde y sombra, máx. 600px. Útil sobre fondos con color o imagen. |
| CAT-CON-014-D | Fondo oscuro | Clase `.con014--dark`: invierte colores de input, texto legal y prueba social. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Sobretítulo | Texto plano | — | 30 car. | Se oculta |
| Subtítulo | Texto plano | — | 120 car. | Se oculta |
| Texto legal | Texto plano | — | 60 car. | Se oculta |
| Prueba social | 2-3 datos | — | 3 | Se oculta (solo variante centrada) |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Input + botón | Apilados en columna (<640px) | En fila | En fila |
| Split | 1 columna | 2 columnas 50/50 (desde 768px) | Igual |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Al enviar el formulario (`submit`), este se oculta y aparece el mensaje de éxito en su lugar — en producción esto depende de la respuesta real del backend (éxito/error), no es automático.
- Validación nativa del navegador vía `type="email"`; en producción añadir manejo de error visible si el backend rechaza el email (duplicado, inválido).

**Restricciones de implementación:**
- El CTA es primario por defecto; el tipo de botón es configurable pero debe mantenerse consistente con el resto de la página.

**Casos edge a contemplar:**
- Doble suscripción (email ya registrado): el wireframe no cubre este estado — definir mensaje de error específico en el proyecto real.
