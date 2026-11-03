# CAT-FRM-002 | Login / Registro
**Visualización HTML:** `modules/CAT-FRM/CAT-FRM-002-login-registro.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-FRM |
| **Cuándo usar** | Pantalla de autenticación cuando el sitio o aplicación requiere cuenta de usuario. Combina login y registro en un componente de pestañas para reducir la fricción. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Pestañas (Login / Registro) | Obligatorio | No | Roles ARIA `tab`/`tabpanel` |
| Campo Email (login) | Obligatorio | No | `autocomplete="email"` |
| Campo Contraseña (login) | Obligatorio | No | `type="password"`; `autocomplete="current-password"` |
| Checkbox "Recordarme" | Opcional | Sí | Solo panel login |
| Enlace "¿Olvidaste tu contraseña?" | Opcional | No | Abre flujo de recuperación |
| Botón social (Google / Apple) | Opcional | Sí | Requiere integración OAuth |
| Divider "o" | Condicional | No | Solo si hay botones sociales |
| Campos de registro | Obligatorio (panel reg.) | No | Nombre, Email, Contraseña, Confirmar |
| Checkbox privacidad (registro) | Obligatorio | Sí | Enlace real a política |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| FRM-002-A | Con redes sociales | Incluye botones Google + Apple |
| FRM-002-B | Sin redes sociales | Solo formulario clásico |
| FRM-002-C | Tab registro activo | Panel de registro visible por defecto |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Email | Email válido | — | 254 caracteres | Error inline |
| Contraseña | Texto | 8 caracteres | — | Error inline con requisitos |
| Confirmar contraseña | Debe coincidir | — | — | Error inline si no coincide |
| Nombre (registro) | Texto plano | 1 carácter | 100 caracteres | Required |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Contenedor | Full-width con padding lateral | max-width 440px centrado | max-width 440px centrado |
| Botones sociales | Full-width | Full-width | Full-width |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- El componente se usa típicamente en página dedicada `/login` o dentro de un modal/drawer.
- Si se usa en modal, ajustar el `max-width` del contenedor al ancho del modal.
- Los botones de redes sociales son decorativos en el wireframe; requieren SDK de Google/Apple en producción.
- Valorar añadir indicador de fortaleza de contraseña en el campo de registro.
- El enlace "¿Olvidaste tu contraseña?" debe abrir flujo propio — no incluido en este módulo.
