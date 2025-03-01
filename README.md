# Property Group - Real Estate Website

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)
![Gulp](https://img.shields.io/badge/Gulp-4.0.2-red.svg)
![SASS](https://img.shields.io/badge/SASS-1.71.1-pink.svg)

Una elegante página web de bienes raíces construida con tecnologías modernas y un diseño responsivo.

## Características

- Diseño moderno y responsivo
- Barra de navegación con efecto de desenfoque (glassmorphism)
- Sistema de fuentes personalizado "Fashion Fetish"
- Optimización de imágenes automática a formato WebP
- Compilación y minificación automática de assets
- Soporte completo para SASS/SCSS
- Sistema de grid flexible

## Tecnologías Utilizadas

- HTML5
- SASS/SCSS
- JavaScript
- Bootstrap 5.3.3
- Gulp 4.0.2
- BrowserSync
- PostCSS (Autoprefixer + CSSnano)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/property-group-2.git
cd property-group-2
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

## Scripts Disponibles

```json
{
  "scripts": {
    "start": "gulp",
    "build": "gulp build",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

- `npm start`: Inicia el servidor de desarrollo con BrowserSync
- `npm run build`: Compila y optimiza los assets para producción

## Estructura del Proyecto

```
property-group-2/              
│
├── src/                      
│   ├── assets/              
│   │   ├── images/          
│   │   │   ├── properties/  # Fotos de casas, departamentos, etc.
│   │   │   ├── icons/       # Iconos de redes sociales, menú, etc.
│   │   │   └── logo/        # Logo de la empresa
│   │   │
│   │   └── fonts/          # Archivos de fuentes Fashion Fetish
│   │
│   ├── scss/               
│   │   ├── components/      # Componentes reutilizables
│   │   │   ├── _buttons.scss    # Estilos de botones
│   │   │   ├── _cards.scss      # Tarjetas de propiedades
│   │   │   └── _navbar.scss     # Barra de navegación
│   │   │
│   │   ├── layouts/        # Estructuras de página
│   │   │   ├── _header.scss    # Estructura del encabezado
│   │   │   ├── _footer.scss    # Estilos del footer
│   │   │   └── _main.scss      # Estilos del contenido principal
│   │   │
│   │   ├── utils/          # Utilidades y configuración
│   │   │   ├── _variables.scss # Variables (colores, fuentes, etc.)
│   │   │   ├── _mixins.scss   # Mixins reutilizables
│   │   │   ├── _fonts.scss    # Configuración de fuentes
│   │   │   ├── _globales.scss # Estilos globales y reset
│   │   │   └── _index.scss    # Archivo de exportación de utilidades
│   │   │
│   │   ├── _bootstrap.scss # Importación de Bootstrap
│   │   └── main.scss       # Archivo principal que importa todo
│   │
│   ├── js/                 
│   │   ├── utils/          # Utilidades JavaScript
│   │   │   ├── updateYear.js   # Actualización del año
│   │   │   └── currentPage.js  # Manejo de página actual
│   │   │
│   │   └── main.js         # Archivo principal JS
│   │
│   └── pages/              # Páginas HTML
│       ├── index.html      # Página principal
│       ├── about-me.html   # Página Acerca de
│       ├── properties.html # Página de propiedades
│       ├── contact.html    # Página de contacto
│       └── base.html       # Plantilla base
│
├── dist/                   # Archivos compilados (automático)
├── node_modules/          # Dependencias (automático)
├── package.json           # Configuración npm
├── package-lock.json      # Lock de dependencias
├── gulpfile.js           # Configuración Gulp
├── .gitignore            # Archivos ignorados por git
├── LICENSE               # Licencia ISC
└── README.md             # Documentación del proyecto              
```

## Personalización

### Colores
Los colores principales del tema están definidos en variables SCSS:

```scss
// Colores
$satin_sheen_gold: #c9a227;
$saffron: #edc531;
$jet: #333333;
$timberwolf: #d6d6d6;
```

### Breakpoints
Sistema de breakpoints responsive:

```scss
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
);
```

## Gulp Tasks

El proyecto utiliza Gulp para automatizar tareas:

- Compilación de SCSS a CSS
- Minificación de JavaScript
- Conversión de imágenes a WebP
- Live reload con BrowserSync
- Sourcemaps para desarrollo

## Responsive Design

El sitio es completamente responsive gracias a los mixins personalizados:

```scss
@mixin breakpoint-up($size) {
  @media (min-width: map-get($breakpoints, $size)) {
    @content;
  }
}

@mixin breakpoint-down($size) {
  @media (max-width: map-get($breakpoints, $size)) {
    @content;
  }
}
```

## Seguridad

Se incluye un archivo `.gitignore` para proteger archivos sensibles y dependencias:

```gitignore
# Dependencias
node_modules/

# Archivos compilados
dist/

# Archivos del sistema
.DS_Store
Thumbs.db

# Archivos de entorno
.env
.env.local
.env.*.local
```

## Autor

- **Ángel Matos**

## Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⌨️ con ❤️ por [Ángel Matos](https://github.com/Angelrmatoz)
