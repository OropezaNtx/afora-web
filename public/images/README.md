# Recursos visuales de ALURA

La web usa rutas públicas simples para que las imágenes puedan sustituirse sin tocar la estructura de los componentes.

## Estructura recomendada

```text
public/
└─ images/
   ├─ hero/
   │  └─ hero-field.jpg
   ├─ product/
   │  ├─ alura-field-app.png
   │  └─ alura-operations-dashboard.png
   ├─ evidence/
   │  └─ evidence-field.jpg
   └─ maps/
      └─ map-texture-dark.jpg
```

Las rutas están centralizadas en `src/config/assets.js`.

Para reemplazar una imagen, puedes hacer una de estas dos cosas:

1. Mantener el mismo nombre y reemplazar directamente el archivo dentro de `public/images/...`.
2. Guardar el nuevo archivo con otro nombre y cambiar solamente su ruta en `src/config/assets.js`.

La segunda opción es la recomendada porque mantiene todos los recursos visuales controlados desde un único archivo.

## Formatos

- Fotografías: WebP o AVIF cuando sea posible; JPG como alternativa.
- Capturas de interfaz: WebP o PNG.
- Logos e iconos vectoriales: SVG.
- Hero: intenta mantener una imagen de al menos 1920 px de ancho.

Antes de producción conviene optimizar todas las imágenes para web y evitar archivos innecesariamente pesados.
