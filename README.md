# DEA Padel Landing Page

Una landing page simple para DEA Padel Riposto, creada con HTML, CSS y JavaScript.

## Estructura del Proyecto

```
dea-padel/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── logo.png
    ├── hero-bg.jpg
    └── profesor.jpg
```

## Requisitos

Para completar la landing page, necesitarás:

1. Imágenes:
   - Logo de DEA Padel (logo.png)
   - Imagen de fondo para el hero section (hero-bg.jpg)
   - Foto del profesor (profesor.jpg)

2. Información:
   - Dirección exacta del club
   - Número de teléfono de contacto
   - Email de contacto
   - Detalles específicos de los servicios

3. Para el mapa:
   - Coordenadas exactas de la ubicación
   - API Key de Google Maps (opcional)

## Personalización

1. Colores: Los colores principales están definidos en el archivo `styles.css` usando variables CSS:
   ```css
   :root {
       --primary-color: #1B4965;    /* Azul oscuro del logo */
       --secondary-color: #62B6CB;  /* Azul claro de acento */
       --text-color: #333333;
       --light-bg: #F5F5F5;
       --white: #FFFFFF;
   }
   ```

2. Imágenes: Coloca todas las imágenes en la carpeta `assets/`

3. Contenido: Actualiza el contenido en `index.html` con la información real del club

## Instalación

1. Clona este repositorio
2. Agrega las imágenes necesarias en la carpeta `assets/`
3. Actualiza la información en el archivo `index.html`
4. Abre `index.html` en tu navegador para ver la página

## Desarrollo

Para hacer cambios en el desarrollo:

1. Edita los archivos HTML, CSS o JavaScript según sea necesario
2. Actualiza las imágenes en la carpeta `assets/`
3. Prueba los cambios abriendo `index.html` en tu navegador

## Notas

- La página es completamente responsive y se adapta a dispositivos móviles
- Incluye animaciones suaves de scroll
- El header es fijo y responde al scroll
- Los servicios tienen una animación hover 