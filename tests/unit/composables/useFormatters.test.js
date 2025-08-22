import { describe, it, expect } from 'vitest'
import useFormatters from '@/composables/useFormatters'

describe('useFormatters', () => {
  const { formatDate, formatCurrency, formatPhone } = useFormatters()

  describe('formatDate', () => {
    it('should format valid date', () => {
      const result = formatDate('2020-04-16T15:32:55.382Z')
      expect(result).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4} at \d{2}:\d{2}:\d{2}$/)
    })

    it('should return empty string for invalid input', () => {
      expect(formatDate(null)).toBe('')
      expect(formatDate('')).toBe('')
    })
  })

  describe('formatCurrency', () => {
    it('should format USD currency', () => {
      expect(formatCurrency(20000, 'USD')).toBe('$20,000.00')
      expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56')
    })

    it('should use USD as default', () => {
      expect(formatCurrency(1000)).toBe('$1,000.00')
    })

    it('should handle null values', () => {
      expect(formatCurrency(null)).toBe('')
    })
  })

  describe('formatPhone', () => {
    it('should format US phone numbers', () => {
      expect(formatPhone('9035753050')).toBe('(903) 575-3050')
      expect(formatPhone('19035753050')).toBe('+1 (903) 575-3050')
    })

    it('should return original for unformattable numbers', () => {
      expect(formatPhone('123')).toBe('123')
    })

    it('should handle empty values', () => {
      expect(formatPhone('')).toBe('')
    })
  })
})
