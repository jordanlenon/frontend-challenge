import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkeletonLoading from '@/components/base/SkeletonLoading.vue'
import Card from '@/components/base/Card.vue'

describe('SkeletonLoading', () => {
  const createWrapper = (props = {}) => {
    return mount(SkeletonLoading, {
      props,
      global: {
        components: {
          Card
        }
      }
    })
  }

  it('should render with default props', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.skeleton-loading').exists()).toBe(true)
    expect(wrapper.find('.skeleton-loading__header').exists()).toBe(true)
    expect(wrapper.find('.skeleton-loading__item').exists()).toBe(true)
  })

  it('should render correct number of items', () => {
    const wrapper = createWrapper({
      rows: 2,
      columns: 3
    })

    const items = wrapper.findAll('.skeleton-loading__item')
    expect(items).toHaveLength(6)
  })

  it('should apply type class', () => {
    const wrapper = createWrapper({
      type: 'text'
    })

    expect(wrapper.classes()).toContain('skeleton-loading--text')
  })

  it('should hide header when showHeader is false', () => {
    const wrapper = createWrapper({
      showHeader: false
    })

    expect(wrapper.find('.skeleton-loading__header').exists()).toBe(false)
  })
})
