# Droguería Cuidarte Pharma

Sitio web de Droguería Cuidarte Pharma, creado con React + Vite.

## Incluye
- Página de inicio con la foto de la fachada y el logo.
- Catálogo de productos con categorías y búsqueda (solo exhibición).
- Servicios: orientación farmacéutica, recepción de fórmulas por WhatsApp, recargas y pagos.
- Sección "Nosotros" con la foto del equipo.
- Ubicación y contacto: dirección, mapa, WhatsApp, teléfono, correo, horarios y fotos de cómo llegar.
- Botón flotante de WhatsApp.
- Diseño responsive para computador, tablet y móvil.
- Identidad visual en morado y amarillo, tomada del logo de Cuidarte Pharma.

## Dónde cambiar cosas
- Teléfono, correo, dirección, horarios y medios de pago: objeto `CONTACT`, `HOURS` y `PAYMENTS` al inicio de `src/App.tsx`.
- Productos y precios: lista `products` en `src/App.tsx`.
- Fotos: `src/assets/fotos/` (WebP). Logo, isotipo, banda "DROGUERIA" y marca de agua: `src/assets/brand/` (SVG). Favicon: `public/favicon.svg`.

## Ejecutar

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
```
