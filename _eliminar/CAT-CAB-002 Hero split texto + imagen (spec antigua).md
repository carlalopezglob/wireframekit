# CAT-CAB-002 | Hero split texto + imagen

**Visualización HTML:** `output/modules/CAT-CAB/CAT-CAB-002 Hero split texto + imagen.html`

**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CAB |
| **Cuándo usar** | Cuando el mensaje de entrada necesita más texto del que cabe cómodamente sobre una imagen de fondo (CAT-CAB-001), o cuando se quiere dar más protagonismo al copy que a la imagen. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Condición / Notas |
| --- | --- | --- | --- |
| Overtitle | Opcional | Sí | Kicker sobre el título |
| Título | Obligatorio | Sí | Puede ocupar 2-3 líneas |
| Texto de apoyo | Opcional | Sí | Párrafo corto, hasta 3-4 líneas |
| CTA | Opcional | Sí | Uno o dos botones (primario + secundario) |
| Imagen | Obligatorio | Sí | Columna lateral, no de fondo |

**Sistema de presencia:**
- **Obligatorio** — siempre aparece
- **Opcional** — puede estar o no; si no está, el layout se adapta
- **Condicional** — aparece solo si se cumple una condición (especificar cuál)

---

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CAB-002-A | Imagen a la derecha | Texto a la izquierda, imagen a la derecha (variante base) |
| CAT-CAB-002-B | Imagen a la izquierda | Orden invertido — útil para alternar en páginas con varios split |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout general | Apilado: texto arriba, imagen abajo | Apilado o 2 columnas 50/50 según espacio | 2 columnas, ~55% texto / 45% imagen |
| CTA | Ancho completo, apilados si hay 2 | Ancho de contenido, en fila | Ancho de contenido, en fila |

---

## Limitaciones y notas técnicas

- No combinar con CAT-CAB-001 en la misma página — son alternativas, no complementarias
- Si hay 2 CTAs, el primario siempre va primero en el DOM (orden de tabulación)

---

## Historial

- [Librería base] · v1.0 · Creación como módulo base agnóstico

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- Ninguno por defecto

**Restricciones de implementación:**
- Título: hasta 3 líneas en desktop antes de romper el layout
- Texto de apoyo: máx. 4 líneas, truncar o revisar copy si excede

**Casos edge a contemplar:**
- Si solo hay 1 CTA, el layout de botones no deja hueco vacío
- Si el texto de apoyo es muy corto (1 línea), el bloque no queda descompensado verticalmente respecto a la imagen
