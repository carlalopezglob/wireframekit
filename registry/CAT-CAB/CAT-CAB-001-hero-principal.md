# CAT-CAB-001 | Hero principal

**Visualización HTML:** `modules/CAT-CAB/CAT-CAB-001-hero-principal.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-CAB |
| **Cuándo usar** | Hero de apertura de página con impacto visual o de mensaje. Incluye 3 variantes intercambiables (ver abajo) que cubren los casos más comunes de página de sección, landing y producto. |

> Módulo consolidado: sustituye a los antiguos módulos independientes "Hero split texto + imagen" y "Hero centrado" (archivados en `_eliminar/`, ver Historial). Si se necesita un header sin impacto visual, usar CAT-CAB-003.

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Overtitle / eyebrow | Opcional | Sí | Categoría o etiqueta corta sobre el título |
| Título (H1) | Obligatorio | Sí | Único por página |
| Texto de apoyo / subtítulo | Opcional | Sí | Refuerza el mensaje del título |
| CTA principal | Opcional | Sí | Estilo configurable (primario / outline / link) |
| CTA secundario | Opcional | Sí | Estilo configurable (outline / link) |
| Media (imagen o vídeo) | Según variante | Sí (URL) | Solo en variantes "Imagen de fondo" y "Split" |
| Social proof (avatares + estrellas + texto) | Opcional | Sí | Solo en variante "Centrado" |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-CAB-001-A | Imagen de fondo | El hero ocupa el ancho completo con imagen/vídeo de fondo, overlay oscuro y contenido superpuesto. Alineación izquierda o centrada; alto compacto, 80vh o pantalla completa. |
| CAT-CAB-001-B | Split texto + imagen | Grid a dos columnas (55/45 en desktop): texto a un lado, imagen o vídeo al otro. Orden intercambiable (texto-imagen o imagen-texto). |
| CAT-CAB-001-C | Centrado | Todo el contenido centrado en una columna estrecha (máx. 720px), sin media. Pensado para landings de producto; admite social proof (avatares, estrellas, texto de confianza). |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Overtitle | Texto plano | — | ~30 car. | Se oculta, el título sube |
| Título | Texto plano | — | 2 líneas en desktop (variantes bg/split), 3 líneas (centrado) | Obligatorio |
| Texto de apoyo | Texto plano | — | 2 líneas (bg/split), 2-3 líneas (centrado) | Se oculta |
| CTA principal / secundario | Texto plano | — | ~30 car. | Se ocultan de forma independiente |
| Imagen | Imagen / placeholder | — | — | 4:3 en split (16:9 en mobile); fondo completo en variante bg |
| Vídeo | Embed 16:9 | — | — | Alternativa a imagen en bg y split, con botón de play |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Imagen de fondo | min-height 60vh, overlay vertical, contenido abajo | min-height 70vh | min-height 85vh (o 80vh/100vh según modificador), overlay horizontal, contenido centrado verticalmente, max-width 55% |
| Split | 1 columna, imagen primero u orden normal según modificador | 2 columnas 1fr/1fr | 2 columnas 55/45 |
| Centrado | Columna única, texto a la izquierda si se activa esa variante | Igual | Título con `clamp()` hasta 3.5rem |

## Historial

- v1.0 · Creación como "Hero con imagen de fondo" (solo variante bg)
- v2.0 · Consolidación: se incorporan como variantes intercambiables las antiguas "Hero split texto + imagen" (CAT-CAB-002) y "Hero centrado" (CAT-CAB-004), que se retiran como módulos independientes. Mismo número (001), cambia el nombre a "Hero principal" porque ya no es solo la variante de fondo.

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El selector de variante (bg / split / centrado) es una herramienta del kit para previsualizar — en el proyecto de cliente se elige UNA variante y se elimina el resto del HTML.
- En la variante "Imagen de fondo", el overlay tiene 3 intensidades (suave / media / intensa) para adaptarse al contraste de cada imagen real.
- En "Split", el tipo de media (imagen 4:3 o vídeo 16:9 con botón de play) y el orden (texto-imagen / imagen-texto) son configurables por caso de uso.

**Restricciones de implementación:**
- El H1 es único por página — este hero siempre lo lleva.
- CTA principal y secundario son independientes: pueden mostrarse ambos, solo uno, o ninguno.

**Casos edge a contemplar:**
- Título muy largo en la variante centrado: el `clamp()` ya protege el tamaño, pero revisar en 3 líneas que no rompa el ritmo vertical.
- Vídeo de fondo sin audio por defecto y con control de reproducción accesible (no autoplay sin mute en producción).
