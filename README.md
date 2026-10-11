# Gimnasio Power

Sitio web desarrollado como proyecto final de pre-entrega para el curso de Desarrollo Web.

## Tecnologias utilizadas

- HTML5
- SCSS / Sass
- Bootstrap 5.3.8
- AOS 2.3.4 (Animate On Scroll)
- Git
- GitHub

## Paginas

- Inicio
- Entrenadores (`pages/entrenadores.html`)
- Clases
- Horarios
- Instalaciones

## Caracteristicas de esta entrega

- Arquitectura SCSS organizada en `utilities/`, `base/`, `layout/` y `components/`.
- `scss/main.scss` como unico punto de entrada.
- Mixin con parametros para transiciones y espaciado responsive.
- Uso de `@extend` mediante placeholders reutilizables para botones y tarjetas.
- Nesting, variables y operadores/matematica de Sass.
- Animaciones nativas con `transition` y `@keyframes`.
- Animaciones con la libreria AOS.
- Responsive mobile-first con breakpoints en 768px y 1024px.
- Navbar responsive de Bootstrap.
- Soporte para `prefers-reduced-motion`.
- Cinco paginas HTML revisadas para evitar desbordamiento horizontal de la pagina.

## Compilar SCSS


npm install
npm run sass


El unico punto de entrada es `scss/main.scss` y el resultado se genera en `css/style.css`.

## Sitio publicado

[Ver sitio web](https://nahuel1293.github.io/pre_entrega_6/)

## Autor

Nahuel Martinez


### Compilar estilos


npm ci
npm run sass


