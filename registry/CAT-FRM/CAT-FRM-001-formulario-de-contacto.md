# CAT-FRM-001 | Formulario de contacto
**Visualización HTML:** `modules/CAT-FRM/CAT-FRM-001-formulario-de-contacto.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-FRM |
| **Cuándo usar** | Página de contacto o sección de contacto en landing pages. Permite al usuario enviar una consulta directa sin necesidad de abrir su cliente de correo. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera (overtitle + h2 + subtítulo) | Opcional | Sí | Omitir si el formulario va dentro de una sección con encabezado propio |
| Campo Nombre | Obligatorio | No | `autocomplete="name"` |
| Campo Email | Obligatorio | No | `type="email"`; lleva estado de error en el wireframe |
| Campo Teléfono | Opcional | Sí | Oculto por defecto; mostrar si el negocio requiere contacto telefónico |
| Campo Empresa | Opcional | Sí | Oculto por defecto; mostrar en B2B |
| Campo Asunto | Obligatorio | No | Texto libre; puede reemplazarse por `<select>` según el caso |
| Campo Mensaje | Obligatorio | No | `<textarea>` 6 filas mínimo |
| Checkbox privacidad | Obligatorio | Sí | Enlace a política real |
| Botón enviar | Obligatorio | Sí | Full-width en mobile |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| FRM-001-A | Por defecto | Sin cabecera, sin campos opcionales |
| FRM-001-B | Con cabecera | Incluye overtitle + h2 + descripción |
| FRM-001-C | B2B extendido | Incluye teléfono + empresa |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Nombre | Texto plano | 1 carácter | 100 caracteres | Validación required en submit |
| Email | Email válido | — | 254 caracteres | Error inline visible |
| Asunto | Texto plano | 1 carácter | 150 caracteres | Validación required |
| Mensaje | Texto plano | 1 carácter | 2000 caracteres | Validación required; mostrar contador si aplica |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Nombre + Email | 1 col apilados | 2 col en fila | 2 col en fila |
| Teléfono + Empresa | 1 col apilados | 2 col en fila | 2 col en fila |
| Botón enviar | Full-width | Auto | Auto |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El estado de error del email es visible por defecto en el wireframe para que el diseñador vea el layout de error; en producción solo aparece tras intento de envío.
- El texto del checkbox de privacidad debe incluir enlace real a la política — coordinar con el equipo legal.
- Valorar añadir feedback de éxito/error post-envío (mensaje inline, no modal).
- Si el formulario se embebe en una página con fondo gris (`.section--alt`), cambiar el fondo del radio a "Gris" para previsualizar.
