/**
 * README.md content for PokeWorldConnect
 */

const readmeContent = `
# PokeWorldConnect

## Descripción

PokeWorldConnect es una aplicación web que combina datos de usuarios y Pokémon para crear una experiencia interactiva y visualmente atractiva. Utiliza **Componentes Web Personalizados** con **Shadow DOM**, **Templates** y **Slots** para construir una estructura modular y eficiente.

## Estructura de la Aplicación

La aplicación está compuesta por los siguientes componentes:

### 1. Header (\`header.js\`)
- **Descripción**: Muestra el encabezado de la página.
- **Funcionalidad**:
  - Presenta el título de la aplicación de forma destacada.
  - Implementado como \`<app-header>\`.
  - Utiliza Shadow DOM para encapsular su estructura y estilos.

### 2. Footer (\`footer.js\`)
- **Descripción**: Muestra el pie de página.
- **Funcionalidad**:
  - Incluye información de derechos de autor.
  - Implementado como \`<app-footer>\`.
  - Estilos encapsulados con Shadow DOM.

### 3. Main (\`main-content.js\`)
- **Descripción**: Contenedor principal para las diferentes páginas.
- **Funcionalidad**:
  - Utiliza un \`<slot>\` para renderizar contenido dinámico.
  - Implementado como \`<main-content>\`.
  - Facilita la navegación entre componentes.

### 4. Menu (\`menu.js\`)
- **Descripción**: Menú de navegación principal.
- **Funcionalidad**:
  - Contiene enlaces para navegar entre las páginas: **Inicio**, **Usuario**, **Mapa**, **Galería**.
  - Implementado como \`<app-menu>\`.
  - Emite eventos para manejar la navegación.

### 5. CustomTable (\`custom-table.js\`)
- **Descripción**: Tabla personalizada que carga datos desde una API.
- **Funcionalidad**:
  - Muestra una lista de usuarios obtenidos de [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
  - Permite seleccionar un usuario para ver su perfil.
  - Implementado como \`<custom-table>\`.

### 6. SocialProfile (\`social-profile.js\`)
- **Descripción**: Página de perfil de usuario.
- **Funcionalidad**:
  - Muestra los datos personales de un usuario seleccionado.
  - Implementado como \`<social-profile>\`.
  - Carga datos dinámicamente al seleccionar un usuario.

### 7. Gallery (\`gallery.js\`)
- **Descripción**: Galería de imágenes de Pokémon.
- **Funcionalidad**:
  - Muestra imágenes obtenidas desde la PokéAPI [https://pokeapi.co/](https://pokeapi.co/).
  - Implementado como \`<poke-gallery>\`.
  - Estilos atractivos y responsivos.

### 8. Map (\`map.js\`)
- **Descripción**: Mapa interactivo de ubicaciones de usuarios.
- **Funcionalidad**:
  - Muestra marcadores en las ubicaciones de los usuarios.
  - Implementado como \`<user-map>\`.
  - Utiliza Leaflet.js para el mapa.
  - Al hacer clic en un marcador, muestra el perfil del usuario.

### 9. Inicio (\`inicio.js\`)
- **Descripción**: Página de bienvenida que permite a los usuarios registrarse o continuar como visitantes.
- **Funcionalidad**:
  - **Formulario de Registro**: Los usuarios pueden registrarse proporcionando su nombre y correo electrónico (aunque no se implementa un sistema de backend en esta versión).
  - **Opción de Visitante**: Permite a los usuarios navegar como visitantes, accediendo a las secciones de "Usuarios", "Mapa" y "Galería" sin necesidad de registrarse.
  - **Estilo**: Utiliza un fondo con transparencia y botones estilizados. El formulario se presenta de forma centrada, creando una experiencia de bienvenida limpia y atractiva.

---

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

\`\`\`
PokeWorldConnect/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── components/
│   ├── header.js
│   ├── footer.js
│   ├── main-content.js
│   ├── menu.js
│   ├── custom-table.js
│   ├── social-profile.js
│   ├── gallery.js
│   └── map.js
└── assets/
    └── images/
\`\`\`

---

## Instalación y Uso

Sigue estos pasos para ejecutar la aplicación:

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/tuusuario/PokeWorldConnect.git
\`\`\`

### 2. Navegar al directorio del proyecto
\`\`\`bash
cd PokeWorldConnect
\`\`\`

### 3. Abrir la aplicación
Abre el archivo \`index.html\` en tu navegador preferido.

---

## Prueba y Verificación

Sigue estos pasos para verificar el funcionamiento de la aplicación:

### Abrir en el navegador
- Asegúrate de usar un navegador moderno (Chrome, Firefox, Edge) para que los componentes personalizados se rendericen correctamente.

### Verificar componentes
- El **header** y el **footer** deben mostrarse correctamente.
- El **menú** debe permitir navegar entre las páginas: Inicio, Usuario, Mapa y Galería.

### Funcionalidad
- El **Inicio** debe cargar el formulario de registro y la opción de navegar como invitado.
- La **tabla** debe cargar los usuarios desde la API y permitir seleccionar un perfil.
- La **galería** debe mostrar imágenes de Pokémon obtenidas de la PokéAPI.
- El **mapa** debe mostrar marcadores interactivos en las ubicaciones de los usuarios.

---

## Contacto

Para sugerencias o reportar problemas, por favor contacta al desarrollador:

- **Email**: gwescobar@espe.edu.ec
- **Whatsaap**: +95 870 4158


---

**¡Disfruta explorando PokeWorldConnect y sumérgete en esta experiencia interactiva!**
