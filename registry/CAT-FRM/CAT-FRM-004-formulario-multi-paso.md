# CAT-FRM-004 | Formulario multi-paso

**Visualización HTML:** `modules/CAT-FRM/CAT-FRM-004-formulario-multi-paso.html`
**Estado:** ✅ Listo (librería base)

| | |
| --- | --- |
| **Categoría** | CAT-FRM |
| **Cuándo usar** | Formularios largos que se benefician de dividirse en pasos (checkout, onboarding, solicitudes complejas) para reducir la carga percibida y mostrar progreso claro. |

---

## Anatomía

| Elemento | Presencia | Editable CMS | Notas |
| --- | --- | --- | --- |
| Indicador de pasos (stepper) | Obligatorio | No | Burbujas numeradas + conector + etiqueta por paso |
| Panel de paso activo | Obligatorio | No | Solo uno visible a la vez |
| Título y descripción del paso | Obligatorio | Sí | Por panel |
| Campos del formulario | Obligatorio | Sí | Varían por paso |
| Barra de navegación (Atrás / Siguiente) | Obligatorio | No | Texto de progreso centrado ("Paso X de Y") |
| Resumen final | Obligatorio (último paso) | No | Lista de datos introducidos antes de confirmar |

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| CAT-FRM-004-A | 4 pasos (ejemplo: checkout) | Datos → Dirección → Pago → Confirmación. Usar como plantilla; el número y contenido de los pasos se adapta a cada caso de uso. |
| CAT-FRM-004-B | Fondo gris | Alternativa de fondo de página para la sección completa. |

## Restricciones de contenido

| Elemento | Tipo de contenido | Mín. | Máx. | Comportamiento si ausente |
| --- | --- | --- | --- | --- |
| Número de pasos | Entero | 2 | 6 | Con más de 6, valorar agrupar o rediseñar el flujo |
| Etiqueta de paso | Texto plano | — | ~15 car. | — |
| Campos por panel | Según tipo | — | — | Definidos por caso de uso real |

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Stepper | Scroll horizontal si no cabe | Ancho completo | Ancho completo, máx. 640px (card centrada) |
| Campos en fila (`.frm004__row`) | 1 columna | 2 columnas (desde 480px) | 2 columnas |

## Historial

- v1.0 · Creación

---

## Notas para UI

> Esta sección es para el equipo de UI, no para Claude. Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- El botón "Atrás" se oculta en el primer paso. El botón "Siguiente" cambia su texto a "Confirmar y pagar" (o equivalente) en el último paso.
- Las burbujas de pasos completados muestran un ✓ en lugar del número.
- En el paso de pago (ejemplo del wireframe), los campos de tarjeta solo se muestran si el método seleccionado es "Tarjeta bancaria".

**Restricciones de implementación:**
- No permitir avanzar de paso sin validar los campos obligatorios del paso actual — el wireframe no implementa esta validación, es responsabilidad de UI/dev en el proyecto real.
- Los campos de pago (número de tarjeta, CVV) son solo wireframe — en producción deben pasar por un proveedor de pago certificado (PCI-DSS), nunca procesarse directamente en el frontend propio.

**Casos edge a contemplar:**
- Usuario que retrocede y cambia un dato de un paso anterior: el resumen final debe reflejar siempre el valor actualizado, no el original.
