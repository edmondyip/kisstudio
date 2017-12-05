<template>
  <div class="size">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Size'
  }
</script>

<style lang="scss" scoped>
  .size {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 1rem;
    color: #333;
    font-family: $titleFont;
    font-weight: 300;
  }
</style>
