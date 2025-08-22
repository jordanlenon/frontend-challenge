import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/base/Card.vue'

describe('Card', () => {
  it('should render with slots', () => {
    const wrapper = mount(Card, {
      slots: {
        subtitle: 'Subtitle',
        title: 'Title',
        content: 'Content'
      }
    })

    expect(wrapper.find('.card__sub-title').text()).toBe('Subtitle')
    expect(wrapper.find('.card__title').text()).toBe('Title')
    expect(wrapper.find('.card__body').text()).toBe('Content')
  })

  it('should render with only content', () => {
    const wrapper = mount(Card, {
      slots: {
        content: 'Content'
      }
    })

    expect(wrapper.find('.card__body').text()).toBe('Content')
    expect(wrapper.find('.card').exists()).toBe(true)
  })

  it('should have correct structure', () => {
    const wrapper = mount(Card)

    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('.card__header').exists()).toBe(true)
    expect(wrapper.find('.card__body').exists()).toBe(true)
  })
})
