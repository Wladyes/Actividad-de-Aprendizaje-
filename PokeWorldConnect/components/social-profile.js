// components/social-profile.js

class SocialProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.user = null;
    this.render();
  }

  connectedCallback() {
    window.addEventListener('userSelected', this.handleUserSelected.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('userSelected', this.handleUserSelected.bind(this));
  }

  async handleUserSelected(event) {
    const userId = event.detail.userId;
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      this.user = await res.json();
      this.render();

      // Enviar la región al componente de galería
      window.dispatchEvent(new CustomEvent('regionSelected', { detail: { geo: this.user.address.geo } }));
    } catch (error) {
      console.error('Error al cargar el perfil del usuario:', error);
    }
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        h2 {
          color: #ff3b3f;
        }
        .details {
          margin-top: 10px;
        }
        .details p {
          margin: 5px 0;
        }
        .avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #f1f1f1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          color: #ccc;
          margin-bottom: 20px;
        }
      </style>
      <div class="profile">
        ${this.user ? `
          <div class="avatar">${this.user.name.charAt(0)}</div>
          <h2>${this.user.name}</h2>
          <div class="details">
            <p><strong>Usuario:</strong> ${this.user.username}</p>
            <p><strong>Email:</strong> ${this.user.email}</p>
            <p><strong>Teléfono:</strong> ${this.user.phone}</p>
            <p><strong>Compañía:</strong> ${this.user.company.name}</p>
          </div>
        ` : '<p>Selecciona un usuario para ver su perfil.</p>'}
      </div>
    `;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('social-profile', SocialProfile);
