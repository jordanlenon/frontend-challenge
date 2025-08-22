<template>
  <span class="chip" :class="`chip--${color}`">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'error'].includes(value)
  }
})
</script>

<style scoped lang="scss">
.chip {
  background-color: #f0f0f0;
  padding: 4px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  &--primary {
    color: #1052E0;
    background-color: #EDF3FF;
  }

  &--success {
    color: #1E976C;
    background-color: #E6F7ED;
  }
}
</style>