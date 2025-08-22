<template>
  <div class="alert" v-if="show">
    <button class="alert__close" @click="close">
      <icon name="fa-light fa-times" />
    </button>
    <slot>
      <p>Ocorreu um erro ao carregar os dados do pedido.</p>
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'error'
  }
})

const show = ref(true)

const close = () => {
  show.value = false
}
</script>

<style lang="scss">
.alert {
  background-color: #f8d7da;
  color: #721c24;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  position: relative;

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 16px;
    right: 16px;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }

  &.success {
    background-color: #d4edda;
    color: #155724;
  }
}
</style>