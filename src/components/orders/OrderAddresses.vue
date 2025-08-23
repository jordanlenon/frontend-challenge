<template>
  <section class="order-addresses">
    <header class="order-addresses__header">
      <h2 class="order-addresses__title" @click="toggleAddresses">
        <span class="order-addresses__toggle">
          <icon name="fa-light fa-angle-up" v-if="isOpen" />
          <icon name="fa-light fa-angle-down" v-else />
        </span>
        Addresses
      </h2>
    </header>

    <div class="order-addresses__content" :class="{ 'order-addresses__content--open': isOpen }">
      <div class="row order-addresses__items">
        <template v-for="addressItem in addresses" :key="addressItem.label">
          <div class="col-12 col-md-12 col-lg-4 order-addresses__item">
            <card>
              <template #subtitle>
                {{ addressItem.label }}
              </template>
              <template #title>
                {{ addressItem.name }}
                <chip v-if="addressItem.code" color="primary" class="label">
                  #{{ addressItem.code }}
                </chip>
              </template>
              <template #content>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="order__item" v-if="addressItem?.document?.type && addressItem?.document?.value">
                      <icon name="fa-light fa-location-check" />
                      {{ addressItem.document.type }}: {{ addressItem.document.value }}
                    </div>
                    <div class="order__item" v-if="addressItem.address">
                      <icon name="fa-light fa-location-check" />
                      {{ addressItem.address }}
                    </div>
                    <div class="order__item" v-if="addressItem.contact.name">
                      <icon name="fa-light fa-user" />
                      {{ addressItem.contact.name }}
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="order__item" v-if="addressItem.contact.email">
                      <icon name="fa-light fa-envelope" />
                      {{ addressItem.contact.email }}
                    </div>
                    <div class="order__item" v-if="addressItem.contact.phone">
                      <icon name="fa-light fa-phone" />
                      {{ formatPhone(addressItem.contact.phone) }}
                    </div>
                    <div class="order__item" v-if="addressItem.contact.fax">
                      <icon name="fa-light fa-fax" />
                      {{ addressItem.contact.fax }}
                    </div>
                  </div>
                </div>
              </template>
            </card>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import useFormatters from '@/composables/useFormatters'

const props = defineProps({
  addresses: {
    type: Array,
    required: true
  }
})

const { formatPhone } = useFormatters()

const isOpen = ref(true)

const toggleAddresses = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.order-addresses {
  .order-addresses__content {
    transition: all 0.3s ease;
    opacity: 0;

    &--open {
      opacity: 1;
    }
  }

  .order-addresses__items {
    display: flex;
    flex-wrap: wrap;

    .order-addresses__item {
      min-height: 100%;
      display: flex;
      margin-bottom: 16px;

      .card {
        width: 100%;
        height: 100%;
      }
    }
  }

  .order-addresses__header {
    margin-bottom: 16px;
  }

  .order-addresses__title {
    font-size: 16px;
    line-height: 20px;
    color: var(--color-text-secondary);
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      .order-addresses__toggle {
        background-color: var(--color-primary);
        color: #fff;
      }
    }
  }

  .order-addresses__toggle {
    cursor: pointer;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EDF3FF;
    color: var(--color-primary);
    font-size: 15px;
    margin-right: 8px;
    transition: all 0.3s ease;
  }
}
</style>