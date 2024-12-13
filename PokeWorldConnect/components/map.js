// components/map.js

class UserMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.users = [];
  }

  connectedCallback() {
    this.loadMap();
    this.fetchUsers();
  }

  loadMap() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        #map {
          width: 90%; /* Ajusta el ancho para que no ocupe todo el espacio */
          height: 300px; /* Reduce la altura del mapa */
          border-radius: 10px;
          margin: 20px auto; /* Centra el mapa */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      </style>
      <div id="map"></div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    script.onload = () => this.initializeMap();
    this.shadowRoot.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    this.shadowRoot.appendChild(link);
  }

  initializeMap() {
    this.map = L.map(this.shadowRoot.getElementById('map')).setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  async fetchUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await res.json();
      this.addMarkers();
    } catch (error) {
      console.error('Error al obtener los datos de usuarios:', error);
    }
  }

  addMarkers() {
    this.users.forEach(user => {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);

      const marker = L.marker([lat, lng]).addTo(this.map);
      marker.bindPopup(`<strong>${user.name}</strong><br>${user.email}`);

      marker.on('click', () => {
        window.dispatchEvent(new CustomEvent('userSelected', { detail: { userId: user.id } }));
        document.querySelector('main-content').innerHTML = `
          <social-profile></social-profile>
          <poke-gallery></poke-gallery>
        `;
      });
    });
  }
}

customElements.define('user-map', UserMap);
