import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import OrderSupplierInfo from '@/components/order/OrderSupplierInfo.vue'
import Card from '@/components/base/Card.vue'
import Icon from '@/components/base/Icon.vue'
import Chip from '@/components/base/Chip.vue'

const mockFormatDate = vi.fn((date) => `formatted-${date}`)
const mockFormatPhone = vi.fn((phone) => `formatted-${phone}`)

vi.mock('@/composables/useFormatters', () => ({
  default: () => ({
    formatDate: mockFormatDate,
    formatPhone: mockFormatPhone
  })
}))

const mockSupplier = {
  code: '101908',
  name: 'Motion Industries INC.',
  readAt: '2020-05-23T12:45:20.399Z',
  document: {
    type: 'CNPJ',
    value: '00.823.053/0001-02'
  },
  address: 'O Box 1477 - Birmingham AL - 35201-4666 - United States of America',
  contact: {
    name: 'Jack Jeff Ripple Applejack',
    email: 'jack_jeff_applejack@motion.com',
    phone: '800-296-5522'
  }
}

describe('OrderSupplierInfo', () => {
  const createWrapper = (supplier = mockSupplier) => {
    return mount(OrderSupplierInfo, {
      props: { supplier },
      global: {
        components: {
          Card,
          Icon,
          Chip
        }
      }
    })
  }

  it('should render supplier information', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('.order__supplier-info').exists()).toBe(true)
    expect(wrapper.text()).toContain('Motion Industries INC.')
    expect(wrapper.text()).toContain('#101908')
  })

  it('should display supplier document', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('CNPJ: 00.823.053/0001-02')
  })

  it('should display supplier contact', () => {
    const wrapper = createWrapper()

    expect(wrapper.text()).toContain('Jack Jeff Ripple Applejack')
    expect(wrapper.text()).toContain('formatted-800-296-5522')
  })

  it('should handle missing supplier data', () => {
    const wrapper = createWrapper(null)

    expect(wrapper.find('.order__supplier-info').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('Motion Industries INC.')
  })
})
