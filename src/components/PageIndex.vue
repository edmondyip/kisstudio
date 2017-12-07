<template>
  <section>
    <img class="image" :style="mouseEffect(40)" src="../assets/img/floating-image.png" alt="namecard">
    <h2 class="text" :style="mouseEffect(50)">・IDENTITY DESIGN</h2>
    <img class="chinese" :style="mouseEffect(60)" src="../assets/img/name.svg" alt="二人工房">
  </section>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss" scoped>
  section {
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    position: relative;
    .image {
      position: absolute;
      width: 300px;
      right: 14vw;
      top: 12vw;
    }
    .text {
      position: absolute;
      width: 200px;
      right: 14vw;
      top: 30vw;
    }
    .chinese {
      position: absolute;
      width: 120px;
      left: 14vw;
      top: 16vw;
    }
  }
</style>
