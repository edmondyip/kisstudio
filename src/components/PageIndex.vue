<template>
  <section>
    <!-- <figure class="float">
      <img src="../assets/img/floating-image.png" alt="namecard">
      <figcaption>・IDENTITY DESIGN</figcaption>
    </figure> -->
    <img src="../assets/img/logo.svg" alt="logo" id="logo">
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
    #logo {
      position: fixed;
      width: 250px;
      height: 100px;
      top: 50%;
      left: 50%;
      margin: -50px auto auto -125px
    }
  }
</style>
