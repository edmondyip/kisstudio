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
    bottom: -15px;
    font-size: 3rem;
    color: #ddd;
    font-family: $titleFont;
    font-weight: 300;
  }
</style>
