// components/menu.js

class AppMenu extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        nav {
          background-color: #343a40; /* Fondo oscuro elegante */
          display: flex;
          justify-content: center;
          padding: 10px 0;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        nav a {
          color: #fff;
          padding: 10px 20px;
          margin: 0 5px;
          text-decoration: none;
          font-family: 'Segoe UI', sans-serif;
          font-size: 16px;
          font-weight: bold;
          border: 1px solid transparent;
          border-radius: 5px;
          background: linear-gradient(45deg, #ff3b3f, #ff575c);
          transition: all 0.3s ease;
        }
        nav a:hover {
          background: linear-gradient(45deg, #ff575c, #ff3b3f);
          color: #fff;
          border-color: #fff;
          transform: scale(1.05);
        }
      </style>
      <nav>
        <a href="#" data-page="inicio">Inicio</a>
        <a href="#" data-page="usuarios">Usuarios</a>
        <a href="#" data-page="map">Mapa</a>
        <a href="#" data-page="gallery">Galería</a>
      </nav>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
      });
    });
  }
}

customElements.define('app-menu', AppMenu);
