<template>
  <div class="bottom">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BottomInfo'
  }
</script>

<style lang="scss" scoped>
  .bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: .8rem;
    color: #999;
    font-family: $titleFont;
    font-weight: 300;
    background: #ffffff;
    padding: 8px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.5);
  }
</style>
