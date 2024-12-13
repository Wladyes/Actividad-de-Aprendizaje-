// components/main-content.js

class MainContent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          main {
            padding: 20px;
          }
        </style>
        <main>
          <slot></slot>
        </main>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      window.addEventListener('navigate', (e) => this.navigate(e.detail.page));
      this.navigate('inicio'); // Página inicial predeterminada
    }
  
    navigate(page) {
      document.body.setAttribute('data-page', page); // Cambiar fondo dinámico
      switch (page) {
        case 'inicio':
          this.innerHTML = '<app-inicio></app-inicio>';
          break;
        case 'usuarios':
          this.innerHTML = '<custom-table></custom-table>';
          break;
        case 'map':
          this.innerHTML = '<user-map></user-map>';
          break;
        case 'gallery':
          this.innerHTML = '<poke-gallery></poke-gallery>';
          break;
        default:
          this.innerHTML = '<app-inicio></app-inicio>';
      }
    }
  }
  
  customElements.define('main-content', MainContent);
  