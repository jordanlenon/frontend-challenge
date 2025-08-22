import { ref } from 'vue'
import { useHttp } from './useHttp'

const { get } = useHttp()

export const useOrders = () => {
  const loading = ref(false)
  const errorMessage = ref(null)

  const getOrderById = async (id) => {
    loading.value = true
    errorMessage.value = null

    try {
      const response = await get(`/orders/${id}`)
      return response.data
    } catch (err) {
      errorMessage.value = err.message || 'Erro ao carregar dados do pedido'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    getOrderById,
    loading,
    errorMessage
  }
}
