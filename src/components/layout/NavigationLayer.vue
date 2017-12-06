<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="about">about</router-link>
    <router-link to="service">service</router-link>
    <router-link to="portfolio">portfolio</router-link>
    <router-link to="contact">contact</router-link>
    <br/>
    <slot></slot>
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
    left: 0;
    right: 0;
    width: 500px;
    margin: 20px auto;
  }
</style>
