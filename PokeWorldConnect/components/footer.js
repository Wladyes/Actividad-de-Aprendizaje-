// components/footer.js

class AppFooter extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          footer {
            background-color: #282c34;
            padding: 10px;
            text-align: center;
            color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
          }
        </style>
        <footer>
          &copy; 2024 PokeWorldConnect. Todos los derechos reservados.
        </footer>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('app-footer', AppFooter);