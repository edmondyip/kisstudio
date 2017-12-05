<template>
  <div id="app">
    <main>
      <div :style="{gridTemplateColumns: gridColumn, gridTemplateRows: gridRow, width: gridWidth, height: gridHeight, marginTop: gridY, marginLeft: gridX }">
        <page-index id="index" :style="sectionClass" />
        <page-about id="about" :style="sectionClass" />
        <page-service id="service" :style="sectionClass" />
        <page-portfolio id="portfolio" :style="sectionClass" />
        <page-contact id="contact" :style="sectionClass" />
      </div>
    </main>
    <nav-layer></nav-layer>
    <check-size>[Column={{this.routeXY[currentPosition].x}}] [Row={{this.routeXY[currentPosition].y}}] [X={{positionX}}] [Y={{positionY}}] [W={{windowWidth}}] [H={{windowHeight}}]</check-size>
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
        sectionClass: {
          width: 100,
          height: 100,
          gridArea: 2/3/2/3
        },
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
      },
      gridArea: function () {
        return this.routeXY[this.currentPosition].x + '/' + this.routeXY[this.currentPosition].y + '/' + (this.routeXY[this.currentPosition].x + 1) + '/' + (this.routeXY[this.currentPosition].y + 1)
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
          text-align: center;
          justify-content: center;
        }
      }
      #index {
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
