<template>
  <div id="app">
    <main>
      <div :style="{gridTemplateColumns: gridColumn, gridTemplateRows: gridRow, width: gridWidth, height: gridHeight, marginTop: gridY, marginLeft: gridX }">
        <page-index id="index" :style="{width: windowWidth, height: windowHeight}" />
        <page-about id="about" :style="{width: windowWidth, height: windowHeight}" />
        <page-service id="service" :style="{width: windowWidth, height: windowHeight}" />
        <page-portfolio id="portfolio" :style="{width: windowWidth, height: windowHeight}" />
        <page-contact id="contact" :style="{width: windowWidth, height: windowHeight}" />
      </div>
    </main>
    <nav-layer></nav-layer>
    <check-size>[GX={{this.routeXY[currentPosition].x}}] [GY={{this.routeXY[currentPosition].y}}] [X={{positionX}}] [Y={{positionY}}] [W={{windowWidth}}] [H={{windowHeight}}]</check-size>
  </div>
</template>

<script>
  import NavLayer from '@/components/layout/NavigationLayer'
  import PageIndex from '@/components/PageIndex'
  import PageAbout from '@/components/PageAbout'
  import PageService from '@/components/PageService'
  import PagePortfolio from '@/components/PagePortfolio'
  import PageContact from '@/components/PageContact'
  import CheckSize from '@/components/layout/CheckSize'
  export default {
    name: 'app',
    // metaInfo: {
    //   title: 'Keep it Simple Studio',
    //   titleTemplate: '%s | Kisstudio',
    //   link: [{
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
    //   }]
    // },
    data: function () {
      return {
        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight,
        gridColumnSetting: 4,
        gridRowSetting: 4,
        currentPosition: 'home',
        routeXY: {
          home: {
            x: 2,
            y: 2
          },
          about: {
            x: 2,
            y: 1
          },
          service: {
            x: 1,
            y: 2
          },
          portfolio: {
            x: 3,
            y: 2
          },
          contact: {
            x: 2,
            y: 3
          }
        }
      }
    },
    computed: {
      gridColumn: function () {
        return 'repeat(' + this.gridColumnSetting + ',' + this.windowWidth + 'px)'
      },
      gridRow: function () {
        return 'repeat(' + this.gridColumnSetting + ',' + this.windowHeight + 'px)'
      },
      gridWidth: function () {
        return this.windowWidth * [this.gridColumnSetting - 1] + 'px'
      },
      gridHeight: function () {
        return this.windowHeight * [this.gridRowSetting - 1] + 'px'
      },
      gridX: function () {
        return '-' + this.positionX + 'px'
      },
      gridY: function () {
        return '-' + this.positionY + 'px'
      },
      positionX: function () {
        return (this.routeXY[this.currentPosition].x - 1) * this.windowWidth
      },
      positionY: function () {
        return (this.routeXY[this.currentPosition].y - 1) * this.windowHeight
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowSize)
      })
    },
    methods: {
      getWindowSize: function (event) {
        this.windowWidth = document.documentElement.clientWidth
        this.windowHeight = document.documentElement.clientHeight
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.getWindowSize)
    },
    components: {
      NavLayer,
      PageIndex,
      PageAbout,
      PageService,
      PagePortfolio,
      PageContact,
      CheckSize
    },
    watch: {
      '$route' (to, from) {
        const self = this
        if (self.currentPosition === 'home') {
          self.currentPosition = self.$route.name
        } else {
          self.currentPosition = 'home'
          setTimeout(function () {
            self.currentPosition = self.$route.name
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    .overlay {
      position: fixed;
      display: grid;
    }
    main {
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      div {
        position: fixed;
        display: grid;
        transition: .5s;
        section {
          background: #dddddd;
          text-align: center;
        }
      }
      #index {
        background: #ffffff;
        grid-column: 2/3;
        grid-row: 2/3;
      }
      #about {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      #service {
        grid-column: 1/2;
        grid-row: 2/3;
      }
      #portfolio {
        grid-column: 3/4;
        grid-row: 2/3;
      }
      #contact {
        grid-column: 2/3;
        grid-row: 3/4;
      }
    }
  }

</style>
