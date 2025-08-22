import { describe, it, expect, vi } from 'vitest'
import { useHttp } from '@/composables/useHttp'

vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() }
      },
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      patch: vi.fn(),
      delete: vi.fn()
    }))
  }
}))

describe('useHttp', () => {
  it('should have HTTP methods', () => {
    const http = useHttp()

    expect(typeof http.get).toBe('function')
    expect(typeof http.post).toBe('function')
    expect(typeof http.put).toBe('function')
    expect(typeof http.patch).toBe('function')
    expect(typeof http.remove).toBe('function')
  })
})
