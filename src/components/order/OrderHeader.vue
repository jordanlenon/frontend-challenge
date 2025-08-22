<template>
  <div class="order-header">
    <div class="row align-items-start">
      <!-- Blue Badge -->
      <div class="col-6 col-md-3 col-lg-2">
        <div class="order-header__badge">
          <div class="order-header__badge-type">Pre-Order</div>
          <div class="order-header__badge-number">{{ orderData.header.number }}</div>
          <div class="order-header__badge-serial">#ME{{ orderData.header.serial }}</div>
        </div>
      </div>

      <!-- Mobile Summary -->
      <div class="desktop-hidden col-6 col-md-4 col-lg-3">
        <div class="order-header__summary">
          <div class="order-header__price">
            {{ formatCurrency(orderData.header.price, orderData.header.currency) }}
          </div>
          <div class="order-header__status order-header__status--success">
            {{ orderData.header.status }}
          </div>
          <div class="order-header__meta">
            Created at {{ formatDate(orderData.header.createdAt) }}
            <icon name="fa-solid fa-info-circle" />
          </div>
        </div>
      </div>

      <!-- Main Info -->
      <div class="col-12 col-md-5 col-lg-7">
        <div class="order-header__main-info">
          <h1 class="order-header__title text-secondary">
            {{ orderData.header.buyer }}
          </h1>
          <div class="order-header__contact-info">
            <div class="order-header__contact-item">
              <icon name="fa-light fa-user" />
              {{ orderData.header.contact.name }}
            </div>
            <div class="order-header__contact-row">
              <div class="order-header__contact-item">
                <icon name="fa-light fa-envelope" />
                {{ orderData.header.contact.email }}
              </div>
              <div class="order-header__contact-item">
                <icon name="fa-light fa-phone" />
                {{ formatPhone(orderData.header.contact.phone) }}
              </div>
              <div class="order-header__contact-item">
                <icon name="fa-light fa-fax" />
                {{ formatPhone(orderData.header.contact.fax) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="mobile-hidden col-12 col-md-4 col-lg-3">
        <div class="order-header__summary">
          <div class="order-header__price">
            {{ formatCurrency(orderData.header.price, orderData.header.currency) }}
          </div>
          <div class="order-header__status order-header__status--success">
            {{ orderData.header.status }}
          </div>
          <div class="order-header__meta">
            Created at {{ formatDate(orderData.header.createdAt) }}
            <icon name="fa-solid fa-info-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useFormatters from '@/composables/useFormatters'

const props = defineProps({
  orderData: {
    type: Object,
    required: true
  }
})

const { formatDate, formatCurrency, formatPhone } = useFormatters()
</script>

<style lang="scss">
.order-header {
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }

  // Badge
  .order-header__badge {
    width: 100%;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    border-radius: 0 8px 8px 0;
    padding: 16px;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }

    &-type {
      font-size: 18px;
      line-height: 24px;
      font-weight: normal;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      }
    }

    &-number {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    &-serial {
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.4;
      }
    }
  }

  // Main Info
  .order-header__main-info {
    @media (max-width: 768px) {
      background-color: #FFF;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    }

    .order-header__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 8px;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 6px;
      }
    }

    .order-header__contact-row {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      gap: 16px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 8px;
      }
    }
  }

  // Summary
  .order-header__summary {
    text-align: right;

    .order-header__price {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    .order-header__status {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;

      &--success {
        color: var(--color-success);
      }

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
</style>
