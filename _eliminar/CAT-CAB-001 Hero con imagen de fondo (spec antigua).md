# CAT-CAB-001 | Hero con imagen de fondo

**Visualización HTML:** `output/modules/CAT-CAB/CAT-CAB-001 Hero con imagen de fondo.html`

**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CAB |
| **Cuándo usar** | Página de sección o landing que necesita impacto visual de entrada: una imagen grande, un mensaje corto y opcionalmente una acción. No usar en páginas funcionales (buscadores, formularios, utilidades) — para eso está CAT-CAB-003. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Condición / Notas |
| --- | --- | --- | --- |
| Imagen de fondo | Obligatorio | Sí | Ocupa todo el ancho del hero |
| Overtitle | Opcional | Sí | Etiqueta corta encima del título (kicker) |
| Título | Obligatorio | Sí | Mensaje principal, 1 línea idealmente, máx. 2 |
| Texto de apoyo | Opcional | Sí | 1-2 líneas, breve |
| CTA | Opcional | Sí | Botón o link — ver variantes |
| Overlay de contraste | Condicional | No | Solo si la imagen no da suficiente contraste con el texto |

**Sistema de presencia:**
- **Obligatorio** — siempre aparece
- **Opcional** — puede estar o no; si no está, el layout se adapta
- **Condicional** — aparece solo si se cumple una condición (especificar cuál)

---

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CAB-001-A | Con CTA | Incluye botón de acción bajo el texto |
| CAT-CAB-001-B | Sin CTA | Solo overtitle + título + texto de apoyo, sin botón |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout general | Altura reducida (~60vh), texto alineado abajo | Altura media (~70vh) | Altura completa (~85vh) |
| Texto | Ancho completo con padding lateral | Máx. 60% del ancho | Máx. 50% del ancho |
| CTA | Ancho completo (full-width) | Ancho de contenido | Ancho de contenido |

---

## Limitaciones y notas técnicas

- El título no debe superar 2 líneas en desktop — si el copy es más largo, valorar CAT-CAB-002 (hero split) en su lugar
- La imagen de fondo es siempre `.img-placeholder` en wireframe — no representa contraste ni composición final

---

## Historial

- [Librería base] · v1.0 · Creación como módulo base agnóstico

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno por defecto — es un bloque estático de entrada

**Restricciones de implementación:**
- Overtitle: máx. 40 caracteres
- Título: máx. 60 caracteres en 1 línea, hasta 90 en 2 líneas
- Verificar contraste de texto sobre la imagen real (WCAG AA mínimo)

**Casos edge a contemplar:**
- Si la imagen tiene poco contraste, aplicar el overlay de oscurecimiento
- Si no hay overtitle, el título sube y ocupa su espacio sin dejar hueco
