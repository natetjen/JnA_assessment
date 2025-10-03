// __tests__/CardLit.test.js
import { html, fixture } from '@open-wc/testing';
import '../src/components/Lit_components/Card-Lit.js';

describe('CardLit', () => {
  it('renders with title and category', async () => {
    const el = await fixture(html`
      <card-lit title="Test Title" category="Engineering"></card-lit>
    `);

    const title = el.shadowRoot.querySelector('.card-title');
    expect(title.textContent).toBe('Test Title');

    const category = el.shadowRoot.querySelector('.category');
    expect(category.textContent).toContain('Engineering • Resources');
  });

  it('toggles bookmark icon on click', async () => {
    const el = await fixture(html`<card-lit title="Toggle Test"></card-lit>`);
    const button = el.shadowRoot.querySelector('.icon-btn');

    expect(el.isBookmarked).toBe(false);
    expect(button.querySelector('i').className).toBe('bi bi-bookmark');

    button.click();
    await el.updateComplete;
    expect(el.isBookmarked).toBe(true);
    expect(button.querySelector('i').className).toContain('bi-bookmark-fill');

    button.click();
    await el.updateComplete;
    expect(el.isBookmarked).toBe(false);
    expect(button.querySelector('i').className).toBe('bi bi-bookmark');
  });

  it('fires "bookmark-toggled" event when clicked', async () => {
    const el = await fixture(html`<card-lit title="Event Test"></card-lit>`);
    const button = el.shadowRoot.querySelector('.icon-btn');

    let eventDetail = null;
    el.addEventListener('bookmark-toggled', (e) => {
      eventDetail = e.detail;
    });

    button.click();
    await el.updateComplete;

    expect(eventDetail).toEqual({
      title: 'Event Test',
      isBookmarked: true,
    });
  });

  it('bookmark button toggles "hovered" class on mouseover/mouseout', async () => {
    const el = await fixture(html`<card-lit></card-lit>`);
    const button = el.shadowRoot.querySelector('.icon-btn'); // first = bookmark

    // Initially no hovered class
    expect(button.classList.contains('hovered')).toBe(false);

    // Mouse over → hovered class added
    button.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    await el.updateComplete;
    expect(button.classList.contains('hovered')).toBe(true);

    // Mouse out → hovered class removed
    button.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    await el.updateComplete;
    expect(button.classList.contains('hovered')).toBe(false);
  });

  it('triple-dot button toggles "hovered" class on mouseover/mouseout', async () => {
    const el = await fixture(html`<card-lit></card-lit>`);
    const buttons = el.shadowRoot.querySelectorAll('.icon-btn');
    const tripleDotButton = buttons[1];

    expect(tripleDotButton.classList.contains('hovered')).toBe(false);

    tripleDotButton.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    await el.updateComplete;
    expect(tripleDotButton.classList.contains('hovered')).toBe(true);

    tripleDotButton.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    await el.updateComplete;
    expect(tripleDotButton.classList.contains('hovered')).toBe(false);
  });

  it('can render multiple independent instances', async () => {
    const wrapper = await fixture(html`
      <div>
        <card-lit title="First Card" category="News"></card-lit>
        <card-lit title="Second Card" category="Sports"></card-lit>
      </div>
    `);

    const cards = wrapper.querySelectorAll('card-lit');
    expect(cards.length).toBe(2);

    const firstTitle = cards[0].shadowRoot.querySelector('.card-title').textContent;
    const secondTitle = cards[1].shadowRoot.querySelector('.card-title').textContent;

    expect(firstTitle).toBe('First Card');
    expect(secondTitle).toBe('Second Card');
  });

  it('keeps bookmark state independent per instance', async () => {
    const wrapper = await fixture(html`
      <div>
        <card-lit title="One"></card-lit>
        <card-lit title="Two"></card-lit>
      </div>
    `);

    const [first, second] = wrapper.querySelectorAll('card-lit');

    const btn1 = first.shadowRoot.querySelector('.icon-btn');
    btn1.click();
    await first.updateComplete;

    expect(first.isBookmarked).toBe(true);
    expect(second.isBookmarked).toBe(false); // independent state
  });

  //to make sure that each card displays the ref data
  describe.each([
    { title: 'Card A', category: 'Tech' },
    { title: 'Card B', category: 'Design' },
    { title: 'Card C', category: 'Finance' },
  ])('renders reusable props correctly', ({ title, category }) => {
    it(`renders with title="${title}" and category="${category}"`, async () => {
      const el = await fixture(html`<card-lit title="${title}" category="${category}"></card-lit>`);
      expect(el.shadowRoot.querySelector('.card-title').textContent).toBe(title);
      expect(el.shadowRoot.querySelector('.category').textContent).toContain(category);
    });
  });
});
