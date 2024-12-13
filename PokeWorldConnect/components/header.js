// components/header.js

class AppHeader extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          header {
            background-color: #ff3b3f;
            padding: 20px;
            text-align: center;
            color: #fff;
            font-size: 2em;
          }
        </style>
        <header>
          PokeWorldConnect
        </header>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('app-header', AppHeader);