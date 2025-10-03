import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import { vi } from 'vitest'

// Mock data so we know exactly what to expect
vi.mock('../src/mocks/mockData', () => ({
  cards: [
    { id: 1, title: 'Card A', category: 'Engineering', image: 'a.jpg' },
    { id: 2, title: 'Card B', category: 'Design', image: 'b.jpg' },
    { id: 3, title: 'Card C', category: 'Engineering', image: 'c.jpg' },
    { id: 4, title: 'Card D', category: 'QA', image: 'd.jpg' },
    { id: 5, title: 'Card E', category: 'QA', image: 'e.jpg' },
    { id: 6, title: 'Card F', category: 'Engineering', image: 'f.jpg' },
    { id: 7, title: 'Card G', category: 'Design', image: 'g.jpg' }
  ],
  filterOptions: [
    { id: 'f1', title: 'All', value: 'ALL' },
    { id: 'f2', title: 'Engineering', value: 'Engineering' },
    { id: 'f3', title: 'Design', value: 'Design' },
    { id: 'f4', title: 'QA', value: 'QA' }
  ]
}))

describe('App.vue integration', () => {
  it('renders header, filters, and initial 6 cards', async () => {
    const wrapper = mount(App)

    // Header
    expect(wrapper.find('header-lit').exists()).toBe(true)

    // Filters
    const filters = wrapper.findAll('filter-lit')
    expect(filters.length).toBe(4)

    // Cards (should show max 6 by default)
    const cards = wrapper.findAll('card-lit')
    expect(cards.length).toBe(6)
  })

  it('filters cards when a filter-lit emits "filter-toggled"', async () => {
    const wrapper = mount(App)

    const filters = wrapper.findAll('filter-lit')
    expect(filters.length).toBe(4)

    // Dispatch event on "QA" filter
    filters[3].element.dispatchEvent(
      new CustomEvent('filter-toggled', { detail: 'QA', bubbles: true })
    )
    await wrapper.vm.$nextTick()

    // Now grab the cards
    const cards = wrapper.findAll('card-lit')
    expect(cards.length).toBe(2)

    // Check category via property or getAttribute
    expect(
      cards.every(c => c.element.category === 'QA')
    ).toBe(true)
  })


  it('expands and collapses card list when clicking Show More / Show Less', async () => {
    const wrapper = mount(App)

    // Default = 6 cards
    expect(wrapper.findAll('card-lit').length).toBe(6)

    // Click Show More
    await wrapper.find('.show-more-btn').trigger('click')
    expect(wrapper.findAll('card-lit').length).toBe(7) // all cards

    // Click Show Less
    await wrapper.find('.show-more-btn').trigger('click')
    expect(wrapper.findAll('card-lit').length).toBe(6)
  })

  it('listens for bookmark-toggled events from card-lit', async () => {
    const wrapper = mount(App)

    const card = wrapper.find('card-lit')
    // Simulate event emission
    await card.trigger('bookmark-toggled', {
      detail: { title: 'Card A', isBookmarked: true }
    })

    // Since App logs it, we can spy on console.log
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    await card.trigger('bookmark-toggled', {
      detail: { title: 'Card A', isBookmarked: true }
    })

    expect(spy).toHaveBeenCalledWith('Bookmark toggled:', {
      title: 'Card A',
      isBookmarked: true
    })
    spy.mockRestore()
  })
})
