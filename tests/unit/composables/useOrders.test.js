import { describe, it, expect, vi } from 'vitest'
import { useOrders } from '@/composables/useOrders'

vi.mock('@/composables/useHttp', () => ({
  useHttp: () => ({
    get: vi.fn()
  })
}))

describe('useOrders', () => {
  it('should have reactive state', () => {
    const orders = useOrders()

    expect(orders.loading.value).toBe(false)
    expect(orders.errorMessage.value).toBe(null)
  })

  it('should have getOrderById method', () => {
    const orders = useOrders()
    expect(typeof orders.getOrderById).toBe('function')
  })
})
