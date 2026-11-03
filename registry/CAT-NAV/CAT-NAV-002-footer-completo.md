# CAT-NAV-002 | Footer completo
**Visualización HTML:** `modules/CAT-NAV/CAT-NAV-002-footer-completo.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-NAV |
| **Cuándo usar** | Pie de página completo para sitios con múltiples secciones que requieren navegación secundaria, datos de contacto y vínculos legales. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Logo / nombre | Obligatorio | Sí | Mismo asset que NAV-001 |
| Descripción corta | Opcional | Sí | 2–3 líneas, color muted |
| Redes sociales | Opcional | Sí | Máximo 5 redes; texto o iconos |
| Columna "Empresa" | Obligatorio | Sí | 4–5 enlaces internos |
| Columna "Servicios" | Obligatorio | Sí | 4–5 enlaces internos |
| Columna "Contacto" | Opcional (4 col) | Sí | Email, teléfono, dirección |
| Barra inferior — copyright | Obligatorio | Sí | Año + razón social |
| Barra inferior — links legales | Opcional | Sí | Privacidad, Cookies, etc. |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| NAV-002-A | 4 columnas | Layout por defecto con columna de contacto |
| NAV-002-B | 3 columnas | Sin columna de contacto |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Descripción | Texto plano | — | 3 líneas (≈180 chars) | Se colapsa el espacio |
| Redes sociales | Texto o icono + URL | 0 | 5 | Se oculta la fila |
| Links por columna | Texto plano + URL | 2 | 7 | — |
| Links legales | Texto plano + URL | 0 | 4 | Se oculta la barra |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid de columnas | 1 col apilada | 2 col | 3 o 4 col |
| Barra inferior | Apilada (copyright arriba) | Horizontal | Horizontal |

## Historial
- v1.0 · Creación

---

## Notas para UI
> Esta sección es para el equipo de UI.

- En la variante de 3 columnas, los datos de contacto pueden moverse a la columna de empresa.
- El copyright debe actualizarse dinámicamente con el año (JS o CMS).
- Las redes sociales deben usar iconos SVG en el proyecto real; los placeholders de texto son solo para el wireframe.
