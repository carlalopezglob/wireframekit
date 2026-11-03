# CAT-CAB-003 | Header ligero sin imagen

**Visualización HTML:** `modules/CAT-CAB/CAT-CAB-003-header-ligero-sin-imagen.html`

**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CAB |
| **Cuándo usar** | Páginas funcionales o utilitarias donde el hero visual no aporta (buscadores, formularios, páginas internas de proceso). Prioriza orientación rápida sobre impacto visual. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Condición / Notas |
| --- | --- | --- | --- |
| Breadcrumb | Opcional | No | Ruta de navegación, si la sección lo requiere |
| Título | Obligatorio | Sí | Directo, sin overtitle |
| Texto de apoyo | Opcional | Sí | 1 línea máx. |

**Sistema de presencia:**
- **Obligatorio** — siempre aparece
- **Opcional** — puede estar o no; si no está, el layout se adapta
- **Condicional** — aparece solo si se cumple una condición (especificar cuál)

---

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CAB-003-A | Con breadcrumb | Incluye ruta de navegación superior |
| CAT-CAB-003-B | Sin breadcrumb | Solo título + texto de apoyo |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout general | Padding vertical reducido | Padding medio | Padding completo |
| Breadcrumb | Puede colapsar a solo "Atrás" | Ruta completa | Ruta completa |

---

## Limitaciones y notas técnicas

- Este módulo es deliberadamente ligero — no añadir imagen ni CTA; si la página necesita eso, usar CAT-CAB-001 o CAT-CAB-002 en su lugar

---

## Historial

- [Librería base] · v1.0 · Creación como módulo base agnóstico

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno

**Restricciones de implementación:**
- Título: máx. 50 caracteres

**Casos edge a contemplar:**
- Si el breadcrumb tiene más de 3 niveles, colapsar los intermedios con "..."
