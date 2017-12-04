<template>
  <div id="app">
    <nav-layer/>
    <router-view/>
  </div>
</template>

<script>
  import NavLayer from '@/components/layout/NavigationLayer'
  export default {
    name: 'app',
    metaInfo: {
      title: 'Keep it Simple Studio',
      titleTemplate: '%s | Kisstudio',
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
      }]
    },
    components: {
      NavLayer
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
