import { LitElement, html, css } from "lit";
import 'bootstrap-icons/font/bootstrap-icons.css';

export class HeaderLit extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
  };

  createRenderRoot() {
    const root = super.createRenderRoot();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
    root.appendChild(link);
    return root;
  }

  constructor() {
    super();
    this.title = "Placeholder Resources";
    this.subtitle = "Placeholder - You may add more or edit your existing resources";
  }

  static styles = css`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }

    .header-text {
      display: flex;
      flex-direction: column;
    }

    .header-title {
      font-weight: 600;
      color: #1d4ed8;
      font-size: 2rem;
      margin: 0;
    }

    .header-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      margin: 2rem 0 0 0;
    }


    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .header-actions i {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background 0.2s ease, color 0.2s ease;
      cursor: pointer;
    }

    .header-actions i:hover {
      background-color: #dbeafe;
      color: #1d4ed8;
    }
    @media (max-width: 768px) {
      .header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        margin-top: 2rem;
      }

      .header-text {
        display: flex;
        flex-direction: column;
        text-align:center;
      }

      .header-title {
        font-weight: 600;
        color: #1d4ed8;
        margin: 0;
        font-size: 2rem;
        text-align:center;
      }

      .header-subtitle {
        font-size: 1.25rem;
        color: #6b7280;
        margin: 0;
        text-align:center;
      }

      .header-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }

      .header-actions i {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.2s ease, color 0.2s ease;
        cursor: pointer;
      }

      .header-actions i:hover {
        background-color: #dbeafe;
        color: #1d4ed8;
      }
    }
  `;

  render() {
    return html`
      <div class="header">
        <!-- Left side -->
        <div class="header-text">
          <h3 class="header-title">${this.title}</h3>
          <p class="header-subtitle">${this.subtitle}</p>
        </div>

        <!-- Right side -->
        <div class="header-actions">
          <i class="bi bi-pencil"></i>
          <i class="bi bi-plus-lg"></i>
          <i class="bi bi-list-ul"></i>
          <i class="bi bi-arrow-down-up"></i>
        </div>
      </div>
    `;
  }
}

customElements.define("header-lit", HeaderLit);
