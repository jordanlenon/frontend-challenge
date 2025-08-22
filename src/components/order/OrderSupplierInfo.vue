<template>
  <card class="order__supplier-info" subtitle="Supplier">
    <template #subtitle>
      Supplier
    </template>
    <template #title>
      {{ orderData?.supplier?.name }}
      <chip color="primary" class="label" v-if="orderData?.supplier?.code">
        #{{ orderData?.supplier?.code }}
      </chip>
    </template>
    <template #content>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="order__item" v-if="orderData?.supplier?.document?.type && orderData?.supplier?.document?.value">
            <icon name="fa-light fa-id-card" />
            {{ orderData.supplier.document.type }}: {{ orderData.supplier.document.value }}
          </div>
          <div class="order__item" v-if="orderData?.supplier?.address">
            <icon name="fa-light fa-location-check" />
            {{ orderData.supplier.address }}
          </div>
          <div class="order__item" v-if="orderData?.supplier?.contact?.name">
            <icon name="fa-light fa-user" />
            {{ orderData.supplier.contact.name }}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="order__item" v-if="orderData?.supplier?.contact?.email">
            <icon name="fa-light fa-envelope" />
            {{ orderData.supplier.contact.email }}
          </div>
          <div class="order__item" v-if="orderData?.supplier?.contact?.phone">
            <icon name="fa-light fa-phone" />
            {{ formatPhone(orderData.supplier.contact.phone) }}
          </div>
          <div class="order__item" v-if="orderData?.supplier?.contact?.fax">
            <icon name="fa-light fa-fax" />
            {{ orderData.supplier.contact.fax }}
          </div>
          <div class="order__item" v-if="orderData?.supplier?.readAt">
            <icon name="fa-light fa-eye" />
            {{ formatDate(orderData.supplier.readAt) }}
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script setup>
import useFormatters from '@/composables/useFormatters'

const props = defineProps({
  orderData: {
    type: Object,
    required: true
  }
})

const { formatDate, formatPhone } = useFormatters()
</script>

<style scoped lang="scss">
.order__supplier-info {
  margin-bottom: 32px;
}
</style>
