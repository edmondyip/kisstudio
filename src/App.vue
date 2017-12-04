<template>
  <div id="app">
    <nav-layer/>
    <main>
      <page-index id="index"/>
      <page-about id="about"/>
      <page-service id="service"/>
      <page-portfolio id="portfolio"/>
      <page-contact id="contact"/>
    </main>
  </div>
</template>

<script>
  import NavLayer from '@/components/layout/NavigationLayer'
  import PageIndex from '@/components/index'
  import PageAbout from '@/components/about'
  import PageService from '@/components/service'
  import PagePortfolio from '@/components/portfolio'
  import PageContact from '@/components/contact'
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
    date: function () {
      return {}
    },
    components: {
      NavLayer,
      PageIndex,
      PageAbout,
      PageService,
      PagePortfolio,
      PageContact
    }
  }
</script>

<style lang="scss" scoped>
  main {
    width: 900px;
    height: 300px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: [column1] 300px [column2] 300px [column3] 300px [column4];
    grid-template-rows: [row1] 200px [row2] 200px [row3] 200px [row4];
    justify-content: cent{
      width: 280px;
      height: 120px;
      border: 1px solid #999999;
      text-align: center;
    }
  }

  #index {
    grid-column-start: column2;
    grid-column-end: column3;
    grid-row-start: row2;
    grid-row-end: row3;
  }

  #about {
    grid-column-start: column2;
    grid-column-end: column3;
    grid-row-start: row1;
    grid-row-end: row2;
  }

  #service {
    grid-column-start: column1;
    grid-column-end: column2;
    grid-row-start: row2;
    grid-row-end: row3;
  }

  #portfolio {
    grid-column-start: column3;
    grid-column-end: column4;
    grid-row-start: row2;
    grid-row-end: row3;
  }

  #contact {
    grid-column-start: column2;
    grid-column-end: column3;
    grid-row-start: row3;
    grid-row-end: row4;
  }
</style>
