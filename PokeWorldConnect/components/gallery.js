// components/gallery.js

class PokeGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.pokemonList = [];
  }

  connectedCallback() {
    window.addEventListener('regionSelected', this.handleRegionSelected.bind(this));
    this.loadPokemon('kanto'); // Región predeterminada
  }

  disconnectedCallback() {
    window.removeEventListener('regionSelected', this.handleRegionSelected.bind(this));
  }

  async handleRegionSelected(event) {
    const geo = event.detail.geo;
    const region = this.getRegionFromCoordinates(geo);
    await this.loadPokemon(region);
  }

  async loadPokemon(region) {
    const regions = {
      kanto: [25, 39, 52],
      johto: [175, 183, 187]
    };

    this.pokemonList = await Promise.all(regions[region].map(async id => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      return await res.json();
    }));
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .card {
          background: rgba(255, 255, 255, 0.8); /* Transparencia */
          border-radius: 10px;
          padding: 15px;
          width: 150px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .card img {
          width: 100px;
          height: 100px;
        }
        .card h3 {
          margin: 10px 0 5px 0;
          color: #ff3b3f;
        }
        .card p {
          margin: 0;
          font-size: 14px;
        }
      </style>
      <div class="gallery">
        ${this.pokemonList.map(pokemon => `
          <div class="card">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
          </div>
        `).join('')}
      </div>
    `;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('poke-gallery', PokeGallery);
