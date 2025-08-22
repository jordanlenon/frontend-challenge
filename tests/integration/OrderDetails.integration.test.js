import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import OrderDetails from '@/components/order/OrderDetails.vue'
import OrderHeader from '@/components/order/OrderHeader.vue'
import OrderSupplierInfo from '@/components/order/OrderSupplierInfo.vue'
import OrderAddresses from '@/components/order/OrderAddresses.vue'
import SkeletonLoading from '@/components/base/SkeletonLoading.vue'
import LoadingBox from '@/components/base/LoadingBox.vue'
import Alert from '@/components/base/Alert.vue'
import Card from '@/components/base/Card.vue'
import Icon from '@/components/base/Icon.vue'
import Chip from '@/components/base/Chip.vue'
import { server } from '../msw-setup'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/order/:id', component: OrderDetails }]
})

describe('OrderDetails Integration', () => {
  const createWrapper = async (route = '/order/123') => {
    await router.push(route)
    await router.isReady()

    return mount(OrderDetails, {
      global: {
        plugins: [router],
        components: {
          OrderHeader,
          OrderSupplierInfo,
          OrderAddresses,
          SkeletonLoading,
          LoadingBox,
          Alert,
          Card,
          Icon,
          Chip
        }
      }
    })
  }

  it('should load and display order data', async () => {
    const wrapper = await createWrapper()

    expect(wrapper.find('.loading').exists()).toBe(true)

    await flushPromises()
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(wrapper.find('.order-header').exists()).toBe(true)
    expect(wrapper.text()).toContain('MTP West Buyer')
  })
})
