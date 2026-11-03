# CAT-CON-012 | Sección de equipo

**Visualización HTML:** `modules/CAT-CON/CAT-CON-012-seccion-de-equipo.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Presentar a las personas de un equipo, con foto, nombre, cargo y opcionalmente bio y enlaces sociales. Páginas "Sobre nosotros" o "Equipo". |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Encabezado de sección | Opcional | Sí | Overtitle + H2 + subtítulo, centrado, máx. 600px |
| Foto | Obligatorio | Sí | Aspect ratio 1:1 siempre |
| Nombre | Obligatorio | Sí | |
| Cargo | Obligatorio | Sí | |
| Bio | Opcional | Sí | Máx. 120 car. (~2 líneas) |
| Enlaces sociales | Opcional | Sí | 2-3 iconos |
| Botón "Ver más" | Opcional | No | Alterna entre 4 y 8 miembros visibles |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CON-012-A | Foto cuadrada | `border-radius: var(--radius-md)`. Variante por defecto. |
| CAT-CON-012-B | Foto circular | `border-radius: 50%`. |
| CAT-CON-012-C | Sin bio ni links | Solo foto, nombre y cargo — versión compacta para equipos grandes. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Miembros visibles inicialmente | Ítems | 4 | 4 | Resto tras "Ver más" |
| Miembros totales | Ítems | 4 | 8 | Con más de 8, valorar página de equipo dedicada o filtro |
| Bio | Texto plano | — | 120 car. | Se oculta, el cargo queda como último elemento |
| Enlaces sociales | 2-3 iconos | — | 3 | Se ocultan si la página real no los usa |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid | 2 columnas | 3 columnas | 4 columnas |
| Foto | 1:1, ancho de columna | Igual | Igual |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El botón "Ver más" revela los 4 miembros adicionales (5-8) y cambia su texto a "Ver menos"; en UI real puede sustituirse por un enlace a una página de equipo completa si hay más de 8 personas.

**Restricciones de implementación:**
- Nombre y cargo van siempre juntos como bloque; no separar en columnas distintas.

**Casos edge a contemplar:**
- Cargos muy largos en 4 columnas (desktop): revisar que no fuercen el nombre a una tercera línea.
