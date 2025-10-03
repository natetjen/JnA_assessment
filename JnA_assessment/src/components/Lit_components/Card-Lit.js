import { LitElement, html, css } from 'lit';
import 'bootstrap-icons/font/bootstrap-icons.css';


export class CardLit extends LitElement {
  static properties = {
    title: { type: String },
    category: { type: String },
    image: { type: String },
    isBookmarked: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.title = 'Title';
    this.category = 'Category';
    this.image = '';
    this.isBookmarked = false;
  }

  createRenderRoot() {
    const root = super.createRenderRoot();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
    root.appendChild(link);
    return root;
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
    // Emit event so Vue (or parent) can listen
    this.dispatchEvent(new CustomEvent('bookmark-toggled', {
      detail: { title: this.title, isBookmarked: this.isBookmarked },
      bubbles: true,
      composed: true
    }));
  }

  toggleHover(e) {
    if (e.type === 'mouseover') {
      e.target.classList.add('hovered');
    } else {
      e.target.classList.remove('hovered');
    }
  }

  static styles = css`
    .overlay-card {
      height: 280px;
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      color: white;
      font-family: 'Roboto', sans-serif;
    }

    .card-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
      z-index: 1;
    }

    .card-content {
      position: relative;
      z-index: 2;
      height: 100%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
    }

    .actions {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem;
      display: flex;
      gap: 0.5rem;
    }

    .icon-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0, 40, 60, 0.9);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .icon-btn.hovered {
      background: rgba(0, 100, 160, 0.9);
      transform: scale(1.1);
    }

    .icon-btn i.bookmarked {
      color: #28a745; /* green */
    }

    .icon-btn i {
      font-size: 1.2rem;
      color: white;
    }

    .card-title {
      font-size: 22px;
      font-weight: bold;
      margin: 0 0 4rem 0.5rem;
      font-family: 'Roboto', sans-serif;
    }

    .category {
      font-size: 18px;
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="overlay-card">
        <!-- Background image -->
        <img src=${this.image} alt="Card background" class="card-bg" />

        <!-- Overlay content -->
        <div class="card-content">
          <!-- Category -->
          <div class="category">
            <i class="bi bi-lightbulb fs-3"></i>
            ${this.category} • Resources
          </div>

          <!-- Title -->
          <h5 class="card-title">${this.title}</h5>

          <!-- Actions -->
          <div class="actions">
            <button class="icon-btn"
              @mouseover=${this.toggleHover}
              @mouseout=${this.toggleHover}
              @click=${this.toggleBookmark}>
              <i class=${this.isBookmarked ? 'bi bi-bookmark-fill bookmarked' : 'bi bi-bookmark'}></i>
            </button>
            <button class="icon-btn"
            @mouseover=${this.toggleHover}
            @mouseout=${this.toggleHover}
            >
              <i class="bi bi-three-dots-vertical"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-lit', CardLit);
