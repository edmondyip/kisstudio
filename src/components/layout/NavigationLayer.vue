<template>
  <nav>
    <router-link v-for="link in items" :id="link.name" :to="link.path" :key="link.id">
      {{link.name}}
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        items: []
      }
    },
    created: function () {
      this.$router.options.routes.forEach(route => {
          if(route.name != 'error'){
          this.items.push({
            name: route.name,
            path: route.path
          })
          }
      })
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    left: 0;
    right: 0;
    margin: 20px auto;
    display: flex;
    a {
        display: block;
        margin: 0 10px;
    }
  }
</style>
