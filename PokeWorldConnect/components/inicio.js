// components/inicio.js

class AppInicio extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .inicio-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-image: url('../assets/images/inicio-wallpaper.png');
            background-size: cover;
            background-position: center;
            text-align: center;
          }
          .form-container {
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          button {
            margin-top: 10px;
            padding: 10px 20px;
            border: none;
            background-color: #ff3b3f;
            color: white;
            cursor: pointer;
            border-radius: 5px;
          }
          button:hover {
            background-color: #ff575c;
          }
        </style>
        <div class="inicio-container">
          <div class="form-container">
            <h2>¡Bienvenido a PokeWorldConnect!</h2>
            <p>Regístrate para una experiencia personalizada o continúa como visitante.</p>
            <input type="text" placeholder="Nombre" /><br>
            <input type="email" placeholder="Email" /><br>
            <button>Registrarse</button>
            <button id="visitor">Continuar como visitante</button>
          </div>
        </div>
      `;
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      this.shadowRoot.getElementById('visitor').addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'usuarios' } }));
      });
    }
  }
  
  customElements.define('app-inicio', AppInicio);
  