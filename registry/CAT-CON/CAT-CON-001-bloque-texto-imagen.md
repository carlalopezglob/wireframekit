# CAT-CON-001 | Bloque texto + imagen

**Visualización HTML:** `modules/CAT-CON/CAT-CON-001-bloque-texto-imagen.html`

**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CON |
| **Cuándo usar** | Sección editorial que combina texto argumental con apoyo visual. Usar cuando hay un punto de valor que se refuerza con una imagen o ilustración. No usar para contenido puramente funcional (formularios, listas de datos, resultados). |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Overtitle | Opcional | Sí | Etiqueta corta encima del título (kicker / categoría) |
| Título | Obligatorio | Sí | H2 semántico. Mensaje principal de la sección |
| Párrafo | Opcional | Sí | Desarrollo breve del título. Si se omite, el CTA sube junto al título |
| CTA | Opcional | Sí | Botón o link. Puede ser .btn, .btn--outline o .btn--link |
| Imagen / media | Opcional | Sí | Placeholder 4:3. Puede sustituirse por vídeo embed o ilustración |

---

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| Base | Imagen derecha | Texto izquierda, imagen derecha (por defecto) |
| con001--inverted | Imagen izquierda | Clase en .con001__grid — invierte el orden en desktop y tablet |
| Sin imagen | Solo texto | Quitar .con001__media. El texto expande a ancho completo del contenedor |

---

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Overtitle | Texto plano | — | 40 caracteres | El título sube; sin hueco vacío |
| Título | Texto plano | 20 car. | 80 car. (~2 líneas desktop) | Obligatorio — no se omite |
| Párrafo | Texto plano | — | 200 car. (~3 líneas desktop) | El CTA sube directamente al título |
| CTA | Texto plano + URL | — | 30 car. | El texto ocupa el espacio disponible |
| Imagen | Imagen / ilustración / vídeo embed | — | — | El texto puede expandirse a ancho completo |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout | 1 columna — texto arriba, imagen abajo | 2 columnas 50/50 | 2 columnas 55/45 |
| Imagen | Proporción 16:9 (más ancha, menos alta) | Proporción 4:3 | Proporción 4:3 |
| Variante invertida | Igual que la base en mobile (imagen siempre abajo) | Imagen a la izquierda | Imagen a la izquierda |
| CTA | Ancho auto (no full-width) | Ancho auto | Ancho auto |

---

## Historial

- v1.0 · Creación como módulo base agnóstico

---

## Notas para UI

> Esta sección es para el equipo de UI. Claude para de leer al llegar aquí.

**Alineación de texto:**
- Todo el texto SIEMPRE alineado a la izquierda — nunca centrado, ni en desktop
- La clase global `p { text-align: left }` de styles.css ya lo garantiza

**Accesibilidad:**
- `<section>` con `aria-labelledby` apuntando al `id` del h2 de la sección
- La imagen placeholder lleva `aria-hidden="true"` (es decorativa en wireframe; en UI real, si la imagen aporta información, necesita `alt` descriptivo)
- El CTA debe tener texto descriptivo en UI real — nunca solo "Ver más" sin contexto

**Comportamiento interactivo:**
- Ninguno por defecto — bloque estático
- Si la imagen es un vídeo, añadir botón de reproducción superpuesto (ver CAT-MDL-003 para modal de vídeo)

**Casos edge:**
- Sin párrafo: verificar que el espacio entre título y CTA queda bien (gap del flex, no margin)
- Sin imagen: en desktop el texto puede ir a ancho completo o limitarse a ~60ch para legibilidad
- Copy muy corto en el título: la imagen puede quedar visualmente "más alta" que el texto — en UI real ajustar el alineamiento vertical del texto a `center` si el texto es muy breve
