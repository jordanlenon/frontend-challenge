<template>
  <div class="order-details">
    <div class="container">
      <loadingBox v-if="loading" text="Carregando dados do pedido..." />
      <alert v-else-if="errorMessage" type="error">{{ errorMessage }}</alert>
      <template v-if="orderData">
        <OrderHeader :orderData="orderData" />
        <OrderSupplierInfo :orderData="orderData" />
        <OrderAddresses :orderData="orderData" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useOrders } from '@/composables/useOrders'

import OrderHeader from './OrderHeader.vue'
import OrderSupplierInfo from './OrderSupplierInfo.vue'
import OrderAddresses from './OrderAddresses.vue'

const route = useRoute()
const orderId = route.params.id

const { getOrderById, loading, errorMessage } = useOrders()
const orderData = ref(null)

onMounted(async () => {
  orderData.value = await getOrderById(orderId)
})
</script>

<style lang="scss">
.order-details {
  padding: 24px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
  }

  .order__item {
    & + .order__item {
      margin-top: 4px;
    }
  }
}
</style>
