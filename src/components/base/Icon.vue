<template>
  <i :class="name"></i>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>