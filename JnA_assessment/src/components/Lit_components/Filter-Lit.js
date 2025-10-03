import { LitElement, html, css } from "lit";

export class FilterLit extends LitElement {
  static properties = {
    title: { type: String },
    value: { type: String },
    modelValue: { type: String },
    id: { type: String },
    isHovered: { type: Boolean, state: true }
  };

  constructor() {
    super();
    this.title = "";
    this.value = "";
    this.modelValue = "";
    this.id = "";
    this.isHovered = false;
  }

  static styles = css`
    .btn {
      padding: 0.5rem 1rem;
      font-weight: 500;
      border-width: 1.5px;
      transition: all 0.2s ease-in-out;
      font-size: 1.3rem;
      border-radius: 50px; /* pill style */
      border: 1.5px solid #ccc;
      cursor: pointer;
      user-select: none;
      display: inline-block;
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + label {
      background-color: #dbeafe;
      color: #1d4ed8;
      border-color: #dbeafe;
    }

    input[type="radio"]:checked + label::before {
      content: "✓ ";
      font-weight: bold;
    }

    /* Hovered state as a class */
    .btn.hovered {
      background-color: #f0f9ff;
      border-color: #93c5fd;
      color: #1e3a8a;
    }
  `;

  onChange() {
    this.dispatchEvent(
      new CustomEvent("filter-toggled", {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  toggleHover(e) {
    const label = this.renderRoot.querySelector("label");
    if (e.type === "mouseover") {
      label.classList.add("hovered");
    } else {
      label.classList.remove("hovered");
    }
  }

  render() {
    return html`
      <div class="btn-group" role="group">
        <input
          type="radio"
          id=${this.id}
          name="filter"
          value=${this.value}
          ?checked=${this.modelValue === this.value}
          @change=${this.onChange}
        />
        <label
          class="btn"
          for=${this.id}
          @mouseover=${this.toggleHover}
          @mouseout=${this.toggleHover}
        >
          ${this.title}
        </label>
      </div>
    `;
  }
}

customElements.define("filter-lit", FilterLit);
