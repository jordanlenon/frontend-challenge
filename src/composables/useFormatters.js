import { computed } from 'vue'

/**
 * Composable for data formatting utilities
 * @returns {Object} - Formatting functions
 */
export default function useFormatters() {
  /**
   * Format date to readable string
   * @param {string} dateString - ISO date string
   * @returns {string} - Formatted date
   */
  const formatDate = (dateString) => {
    if (!dateString) return ''

    const date = new Date(dateString)
    return date.toLocaleDateString('en-US') + ' at ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  /**
   * Format currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code
   * @returns {string} - Formatted currency
   */
  const formatCurrency = (amount, currency = 'USD') => {
    if (amount === null || amount === undefined) return ''

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  /**
   * Format phone number
   * @param {string} phone - Phone number string
   * @returns {string} - Formatted phone number
   */
  const formatPhone = (phone) => {
    if (!phone) return ''

    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '')

    // Format based on length
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
    } else if (cleaned.length === 11) {
      return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
    }

    return phone // Return original if can't format
  }

  return {
    formatDate,
    formatCurrency,
    formatPhone
  }
}
