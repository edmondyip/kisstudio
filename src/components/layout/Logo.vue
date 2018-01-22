<template>
  <router-link to="/">
    <img src="../../assets/img/logo.svg" alt="KisStudio Logo" id="logo" :class="currentPosition" :style="mouseEffect(80)">
  </router-link>
</template>

<script>
  export default {
    name: 'Logo'
  }
</script>


<style lang="scss" scoped>
  #logo {
    position: fixed;
    width: 250px;
    height: 100px;
    top: 50%;
    left: 50%;
    margin: -50px auto auto -125px;
    opacity: 1;
    transition: .5s;
    &.contact {
      opacity: 0;
    }
  }
</style>
