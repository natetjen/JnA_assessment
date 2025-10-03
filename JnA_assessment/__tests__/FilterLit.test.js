import { html, fixture } from '@open-wc/testing';
import '../src/components/Lit_components/Filter-Lit.js';

describe('FilterLit', () => {
  it('renders with title and value', async () => {
    const el = await fixture(html`
      <filter-lit id="f1" title="Engineering" value="ENG" modelValue="ALL"></filter-lit>
    `);

    const label = el.shadowRoot.querySelector('label');
    const input = el.shadowRoot.querySelector('input[type="radio"]');

    expect(label.textContent.trim()).toBe('Engineering');
    expect(input.value).toBe('ENG');
    expect(input.checked).toBe(false);
  });

  it('toggles hovered class on mouseover/mouseout', async () => {
    const el = await fixture(html`
      <filter-lit id="f2" title="Design" value="DES" modelValue="ALL"></filter-lit>
    `);

    const label = el.shadowRoot.querySelector('label');

    // Before hover
    expect(label.classList.contains('hovered')).toBe(false);

    // Hover in
    label.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    await el.updateComplete;
    expect(label.classList.contains('hovered')).toBe(true);

    // Hover out
    label.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    await el.updateComplete;
    expect(label.classList.contains('hovered')).toBe(false);
  });

  it('fires "filter-toggled" event with correct detail when checked', async () => {
    const el = await fixture(html`
      <filter-lit id="f3" title="QA" value="QA" modelValue="ALL"></filter-lit>
    `);

    const input = el.shadowRoot.querySelector('input[type="radio"]');

    let detail = null;
    el.addEventListener('filter-toggled', (e) => {
      detail = e.detail;
    });

    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    await el.updateComplete;

    expect(detail).toBe('QA');
  });

  it('applies active styling and prefix when modelValue matches value', async () => {
    const el = await fixture(html`
      <filter-lit id="f4" title="Testing" value="TEST" modelValue="TEST"></filter-lit>
    `);

    const input = el.shadowRoot.querySelector('input[type="radio"]');
    const label = el.shadowRoot.querySelector('label');

    expect(input.checked).toBe(true);

    expect(input.checked).toBe(true);
    expect(label.textContent.trim()).toBe('Testing');
  });

  it('does not apply active styling when modelValue does not match value', async () => {
    const el = await fixture(html`
      <filter-lit id="f5" title="Testing" value="TEST" modelValue="ALL"></filter-lit>
    `);

    const input = el.shadowRoot.querySelector('input[type="radio"]');
    const label = el.shadowRoot.querySelector('label');

    expect(input.checked).toBe(false);

    expect(label.textContent.trim()).toBe('Testing');
  });

});
