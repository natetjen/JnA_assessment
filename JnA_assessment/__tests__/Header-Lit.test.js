import { html, fixture } from '@open-wc/testing';
import '../src/components/Lit_components/Header-Lit.js';

describe('HeaderLit', () => {
  it('renders with default placeholder title and subtitle', async () => {
    const el = await fixture(html`<header-lit></header-lit>`);
    const title = el.shadowRoot.querySelector('.header-title');
    const subtitle = el.shadowRoot.querySelector('.header-subtitle');

    expect(title.textContent).toBe('Placeholder Resources');
    expect(subtitle.textContent).toContain('Placeholder - You may add more');
  });

  it('renders with custom title and subtitle', async () => {
    const el = await fixture(html`
      <header-lit title="Custom Header" subtitle="Custom Subtitle"></header-lit>
    `);

    const title = el.shadowRoot.querySelector('.header-title');
    const subtitle = el.shadowRoot.querySelector('.header-subtitle');

    expect(title.textContent).toBe('Custom Header');
    expect(subtitle.textContent).toBe('Custom Subtitle');
  });

  it('renders four action icons', async () => {
    const el = await fixture(html`<header-lit></header-lit>`);
    const icons = el.shadowRoot.querySelectorAll('.header-actions i');

    expect(icons.length).toBe(4);

    expect(icons[0].classList.contains('bi-pencil')).toBe(true);
    expect(icons[1].classList.contains('bi-plus-lg')).toBe(true);
    expect(icons[2].classList.contains('bi-list-ul')).toBe(true);
    expect(icons[3].classList.contains('bi-arrow-down-up')).toBe(true);
  });
});
