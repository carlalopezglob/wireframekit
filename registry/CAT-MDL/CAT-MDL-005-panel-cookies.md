# CAT-MDL-005 | Panel de cookies

**Visualización HTML:** `modules/CAT-MDL/CAT-MDL-005-panel-cookies.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-MDL |
| **Cuándo usar** | Cualquier sitio que necesite cumplimiento de cookies/consentimiento (estilo RFC/GDPR) — prácticamente universal. Debe aparecer visible al cargar la página y permanecer hasta que la persona responda. |

---

## Anatomía

- **Franja (`.mdl005__bar`):** capa fija anclada a un borde de la ventana (inferior por defecto), ancho completo, por encima del contenido. Visible automáticamente al cargar.
  - **Texto explicativo (`.mdl005__text`):** mensaje breve sobre el uso de cookies, con enlace a la política de cookies (`.mdl005__link`).
  - **Grupo de acciones (`.mdl005__actions`):** tres botones con el mismo peso visual — Rechazar, Personalizar, Aceptar todas.
- **Panel de preferencias (`.mdl005__prefs-panel`):** capa modal secundaria que se abre al pulsar "Personalizar". Reutiliza el patrón overlay + panel de CAT-MDL-001 (Modal básico).
  - **Cabecera:** título + botón cerrar.
  - **Cuerpo:** lista de categorías de cookies (`.mdl005__category`), cada una con etiqueta, descripción breve y un control toggle:
    - **Necesarias** — toggle deshabilitado, siempre activado. No se puede desactivar.
    - **Analíticas** — toggle editable, desactivado por defecto.
    - **Marketing** — toggle editable, desactivado por defecto.
  - **Pie:** "Rechazar todas" (secundario) + "Guardar preferencias" (principal).

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-MDL-005-A | Franja inferior (base, construida en este wireframe) | Anclada a `bottom: 0`, ancho completo de la ventana. |
| CAT-MDL-005-B | Franja superior | Modificador `.mdl005__bar--top` → ancla a `top: 0` en vez de `bottom: 0`. Misma anatomía y comportamiento. |
| CAT-MDL-005-C | Modal centrado (alternativa documentada, no construida aquí) | En vez de franja fija a un borde, el aviso se presenta como modal centrado con overlay que cubre el contenido de fondo — reutilizar el patrón de CAT-MDL-001 (Modal básico) con el mismo contenido (texto + 3 acciones) en lugar de construir un módulo aparte. Usar cuando se quiere bloquear visualmente la interacción con la página hasta que la persona responda, en vez de dejar el contenido visible debajo de una franja. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto explicativo | Texto plano + 1 enlace | — | ~220 car. | Obligatorio |
| Acciones de la franja | Botones | 3 (Rechazar / Personalizar / Aceptar todas) | 3 | Las tres son obligatorias — no reducir a solo "Aceptar" |
| Categorías en preferencias | Lista | 3 (Necesarias / Analíticas / Marketing) | — | El proyecto puede añadir más categorías (p. ej. Personalización), nunca menos de estas 3 |
| Descripción por categoría | Texto plano | — | ~90 car. | Se omite, queda solo la etiqueta |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Franja | Texto y acciones apiladas en columna; botones a ancho completo | Texto y acciones en fila si caben, si no se apilan | Fila: texto a la izquierda, acciones a la derecha, `max-width` del contenido alineado al `.container` |
| Panel de preferencias | Ancho completo menos `var(--space-4)` de margen lateral, `max-height: 90vh` con scroll interno | `max-width: 480px` centrado | Igual que tablet |

## Historial

| Versión | Fecha | Descripción |
| --- | --- | --- |
| 1.0 | 2026-11 | Versión inicial |

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- La franja aparece visible al cargar la página y permanece hasta una decisión explícita.
- "Aceptar todas" y "Rechazar" cierran la franja inmediatamente y registran la decisión (en producción: cookie/localStorage con fecha, no debe volver a mostrarse en visitas posteriores salvo caducidad o cambio de política).
- "Personalizar" abre el panel de preferencias sin cerrar la franja de fondo. Cerrar el panel de preferencias con la ✕ no equivale a una decisión — la franja sigue visible.
- "Guardar preferencias" dentro del panel aplica los toggles elegidos, cierra el panel y cierra la franja.
- "Rechazar todas" dentro del panel equivale a rechazar (deja analíticas y marketing desactivadas) y cierra ambas capas.
- El toggle de "Necesarias" nunca es interactivo — siempre encendido, con `disabled` real en el input, no solo estilo visual.

**Restricciones de implementación:**
- Las tres acciones de la franja deben tener el mismo peso visual (ningún botón "Aceptar" grande y gigante junto a un "Rechazar" como enlace discreto) — es un requisito legal habitual en implementaciones GDPR-style, no solo una preferencia estética.
- Guardar la decisión con fecha de consentimiento; volver a mostrar la franja si la política de cookies cambia después de esa fecha.
- `aria-live="polite"` en la franja para que lectores de pantalla anuncien su aparición.

**Casos edge a contemplar:**
- Primera visita: analíticas y marketing deben partir desactivados (opt-in, no opt-out) — el wireframe ya lo refleja en los toggles por defecto.
- Si la persona cierra la pestaña sin decidir, la franja debe reaparecer en la siguiente visita.
