<template>
  <card :class="['skeleton-loading', `skeleton-loading--${type}`]">
    <template #title v-if="showHeader">
      <div class="skeleton-loading__header"></div>
    </template>
    <template #content>
      <div class="row" v-for="i in rows" :key="i">
        <div :class="`col-12 col-md-${12 / columns}`" v-for="j in columns" :key="j">
          <div
            class="skeleton-loading__item"
            :style="{
              animationDelay: `${(i + j) * 0.1}s`,
              width: getItemWidth(i, j)
            }"
          ></div>
        </div>
      </div>
    </template>
  </card>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Number,
    default: 4
  },
  rows: {
    type: Number,
    default: 3
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'text', 'avatar', 'button', 'card'].includes(value)
  },
  showHeader: {
    type: Boolean,
    default: true
  }
})

const getItemWidth = (row, col) => {
  if (props.type === 'avatar') return '40px'
  if (props.type === 'button') return '120px'
  if (props.type === 'card') return '100%'

  const index = row + col
  if (index % 3 === 0) return '90%'
  if (index % 3 === 1) return '75%'
  return '85%'
}
</script>

<style lang="scss">
.skeleton-loading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;

  .card__title {
    margin-bottom: 0;
  }

  &__header {
    height: 24px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    display: block;
    width: 60%;
    border-radius: 4px;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: skeleton-shine 1.5s ease-in-out infinite;
    }
  }

  &__item {
    height: 14px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    margin-top: 12px;
    border-radius: 4px;
    animation: skeleton-shimmer 1.5s ease-in-out infinite;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
      animation: skeleton-shine 1.5s ease-in-out infinite;
    }
  }
}

@keyframes skeleton-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes skeleton-shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton-loading {
  &--text {
    .skeleton-loading__item {
      height: 14px;
      margin-bottom: 8px;

      &:last-child {
        width: 60% !important;
      }
    }
  }

  &--avatar {
    .skeleton-loading__item {
      height: 40px;
      width: 40px !important;
      border-radius: 50%;
      margin: 0 auto;
    }
  }

  &--button {
    .skeleton-loading__item {
      height: 36px;
      width: 120px !important;
      border-radius: 6px;
    }
  }

  &--card {
    .skeleton-loading__item {
      height: 100px;
      border-radius: 8px;
    }
  }
}

@media (max-width: 768px) {
  .skeleton-loading {
    &__header {
      width: 80%;
    }

    &__item {
      width: 100% !important;
    }
  }
}
</style>