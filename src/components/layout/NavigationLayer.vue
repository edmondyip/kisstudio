<template>
  <nav>
    <router-link to="about">about</router-link>
    <router-link to="portfolio">portfolio</router-link>
    <router-link to="service">service</router-link>
    <router-link to="contact">contact</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss" scoped>
    nav {
        position: fixed;
    }
</style>
