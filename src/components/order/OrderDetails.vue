<template>
  <div class="order-details">
    <div class="container">
      <template v-if="orderData">
        <OrderHeader :orderData="orderData" />
        <OrderSupplierInfo :orderData="orderData" />
        <OrderAddresses :orderData="orderData" />
      </template>
    </div>
  </div>
</template>

<script setup>
import OrderHeader from './OrderHeader.vue'
import OrderSupplierInfo from './OrderSupplierInfo.vue'
import OrderAddresses from './OrderAddresses.vue'
import { mockOrderData } from '@/data/mockOrder'

const orderData = mockOrderData
</script>

<style lang="scss">
.order-details {
  padding: 24px;
  min-height: 100vh;

  .order__item {
    & + .order__item {
      margin-top: 4px;
    }
  }
}
</style>
