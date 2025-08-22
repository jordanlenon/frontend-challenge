<template>
  <div class="card">
    <header class="card__header">
      <h5 class="card__sub-title">
        <slot name="subtitle" />
      </h5>
      <div class="card__title">
        <slot name="title" />
      </div>
    </header>
    <div class="card__body">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.card {
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);

  .card__sub-title {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  .card__title {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    color: var(--color-text-secondary);

    .chip {
      margin-left: 8px;
    }
  }
}
</style>