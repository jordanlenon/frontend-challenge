import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '@/components/base/Icon.vue'

describe('Icon', () => {
  it('should render icon with classes', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'fa-solid fa-user'
      }
    })

    expect(wrapper.find('i').exists()).toBe(true)
    expect(wrapper.find('i').classes()).toContain('fa-solid')
    expect(wrapper.find('i').classes()).toContain('fa-user')
  })

  it('should render with different icon types', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'fa-light fa-envelope'
      }
    })

    expect(wrapper.find('i').classes()).toContain('fa-light')
    expect(wrapper.find('i').classes()).toContain('fa-envelope')
  })

  it('should handle missing name prop', () => {
    const wrapper = mount(Icon)

    expect(wrapper.find('i').exists()).toBe(true)
    expect(wrapper.find('i').classes()).toEqual([])
  })
})
