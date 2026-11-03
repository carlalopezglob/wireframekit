# CAT-CRD-005 | Tarjetas de testimonio

**Visualización HTML:** `modules/CAT-CRD/CAT-CRD-005-tarjetas-de-testimonio.html`
**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CAT-CRD |
| **Cuándo usar** | Mostrar prueba social mediante citas de clientes o usuarios reales. Usar en páginas de inicio, de producto o de precios para reforzar la confianza. Con una o dos citas muy destacadas, valorar un componente de cita heroica en lugar de un grid. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Cabecera de sección | Opcional | Sí | Proporciona contexto ("Lo que dicen nuestros clientes"). Omitir si el contexto ya es claro. |
| Grid de cards | Obligatorio | — | `.grid--3` por defecto, `.grid--2` para variante de 2 citas. |
| Estrellas de valoración | Opcional | Sí | Entre 1 y 5. Mostrar solo si se dispone de datos reales; nunca fabricar 5 estrellas universales. |
| Comilla decorativa (") | Incluida | No | Elemento visual, siempre presente cuando la card está visible. `aria-hidden="true"`. |
| Texto de la cita | Obligatorio | Sí | Voz del cliente, entre comillas en el copy original. El módulo no añade comillas tipográficas al texto. |
| Avatar | Opcional | Sí | 40×40px, `border-radius:50%`. Puede ser imagen real o placeholder con iniciales. |
| Nombre del autor | Obligatorio | Sí | Nombre completo o nombre + inicial de apellido. |
| Rol / empresa del autor | Opcional | Sí | Se muestra en una sola línea; si es largo, considerar abreviar. |
| Nombre de empresa (pie) | Opcional | Sí | Aparece bajo el separador horizontal. Puede sustituirse por un logotipo. |

## Variantes

| Código | Nombre | Diferencia |
| --- | --- | --- |
| CRD-005-A | 3 cards, con todos los elementos | Por defecto. |
| CRD-005-B | 2 cards (`.grid--2`) | La tercera card se oculta; el grid cambia de clase. |
| CRD-005-C | Sin avatar ni empresa | Versión minimal: solo estrellas, cita y nombre. |
| CRD-005-D | Sin estrellas | Para contextos donde la valoración numérica no es relevante o no está disponible. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Texto de la cita | Texto plano | 40 car. | ~280 car. | Obligatorio; sin cita no hay card |
| Nombre del autor | Texto plano | 2 car. | 40 car. | Obligatorio |
| Rol / empresa | Texto plano | — | 60 car. | Ocultar la línea si está vacío |
| Estrellas | Entero 1–5 | 1 | 5 | Ocultar bloque `.crd005__stars` si no hay dato |
| Avatar | URL de imagen / iniciales | — | — | Ocultar `.crd005__avatar` si no hay foto ni iniciales |
| Empresa (pie) | Texto plano | — | 60 car. | Ocultar `.crd005__company` y el separador |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768–1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Grid 3 cards | 1 columna | 2 columnas (última card sola) | 3 columnas |
| Grid 2 cards | 1 columna | 2 columnas | 2 columnas |
| Altura de cards | Auto | Auto (puede variar) | Igualada por el grid |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI.

- La comilla decorativa (`"`) usa `font-family:Georgia` para obtener la tipografía de la comilla tipográfica curva sin depender de una fuente de display. Si el proyecto usa otra serif para el display, actualizar aquí.
- Las estrellas vacías (`.crd005__star--empty`) usan `--color-placeholder` para distinguirse de las rellenas sin introducir un color semántico nuevo. No usar rojo ni verde para estrellas.
- Si el avatar es una imagen real, reemplazar el `<div class="crd005__avatar">` por `<img class="crd005__avatar" src="..." alt="Foto de [Nombre]">` y ajustar el `object-fit:cover` en el CSS.
- En grid de 3 columnas en tablet (768–1199px), la tercera card queda sola en la segunda fila. Si esto es un problema visual, usar la variante de 2 cards o añadir una cuarta para completar el grid de 2+2.
- Los testimonios deben ser reales y verificables. No generar citas ficticias para producción; el kit usa contenido de muestra solo para wireframing.
