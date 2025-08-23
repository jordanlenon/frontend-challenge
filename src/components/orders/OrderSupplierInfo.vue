<template>
  <card class="order__supplier-info" subtitle="Supplier">
    <template #subtitle>
      Supplier
    </template>
    <template #title>
      {{ supplier?.name }}
      <chip color="primary" class="label" v-if="supplier?.code">
        #{{ supplier?.code }}
      </chip>
    </template>
    <template #content>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="order__item" v-if="supplier?.document?.type && supplier?.document?.value">
            <icon name="fa-light fa-id-card" />
            {{ supplier.document.type }}: {{ supplier.document.value }}
          </div>
          <div class="order__item" v-if="supplier?.address">
            <icon name="fa-light fa-location-check" />
            {{ supplier.address }}
          </div>
          <div class="order__item" v-if="supplier?.contact?.name">
            <icon name="fa-light fa-user" />
            {{ supplier.contact.name }}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="order__item" v-if="supplier?.contact?.email">
            <icon name="fa-light fa-envelope" />
            {{ supplier.contact.email }}
          </div>
          <div class="order__item" v-if="supplier?.contact?.phone">
            <icon name="fa-light fa-phone" />
            {{ formatPhone(supplier.contact.phone) }}
          </div>
          <div class="order__item" v-if="supplier?.contact?.fax">
            <icon name="fa-light fa-fax" />
            {{ supplier.contact.fax }}
          </div>
          <div class="order__item" v-if="supplier?.readAt"
            v-tooltip="{ content: `Read at full date: ${supplier.readAt}`, placement: 'left' }">
            <icon name="fa-light fa-eye" />
            {{ formatDate(supplier.readAt) }}
          </div>
        </div>
      </div>
    </template>
  </card>
</template>

<script setup>
import useFormatters from '@/composables/useFormatters'

const props = defineProps({
  supplier: {
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
