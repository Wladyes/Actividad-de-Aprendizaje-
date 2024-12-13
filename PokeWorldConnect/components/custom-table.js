// components/custom-table.js

class CustomTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.users = [];
  }

  connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await res.json();
      this.render();
    } catch (error) {
      console.error('Error al obtener los datos de usuarios:', error);
    }
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .table-container {
          max-width: 100%;
          overflow-x: auto;
          border-radius: 10px;
          margin: 20px auto;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8); /* Transparencia */
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Segoe UI', sans-serif;
        }
        th, td {
          padding: 12px 15px;
          text-align: left;
        }
        th {
          background: linear-gradient(45deg, #ff3b3f, #ff575c);
          color: #fff;
          border-bottom: 2px solid #ddd;
        }
        tr:hover {
          background-color: rgba(240, 240, 240, 0.8);
        }
        tr {
          transition: all 0.3s ease;
        }
      </style>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${this.users.map(user => `
              <tr data-id="${user.id}">
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelectorAll('tbody tr').forEach(row => {
      row.addEventListener('click', () => {
        const userId = row.getAttribute('data-id');
        window.dispatchEvent(new CustomEvent('userSelected', { detail: { userId } }));
        document.querySelector('main-content').innerHTML = `
          <social-profile></social-profile>
          <poke-gallery></poke-gallery>
        `;
      });
    });
  }
}

customElements.define('custom-table', CustomTable);
