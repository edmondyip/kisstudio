<template>
  <div id="app">
    <background :window-width="windowWidth" :window-height="windowHeight"/>
    <main>
      <div :style="{gridTemplateColumns: gridColumn, gridTemplateRows: gridRow, width: gridWidth, height: gridHeight, marginTop: gridY, marginLeft: gridX }">
        <component v-for="(section, index) in gridXY" :is="section.name" :id="section.name" :style="{width: windowWidth + 'px', height: windowHeight + 'px', gridArea: gridPosition(index)}" :key="section.id" />
      </div>
    </main>
    <nav-layer/>
    <bottom-info>[Index={{currentIndex}}] [X={{positionX}}] [Y={{positionY}}] [W={{windowWidth}}] [H={{windowHeight}}]</bottom-info>
  </div>
</template>

<script>
  import NavLayer from '@/components/layout/NavigationLayer'
  import home from '@/components/PageIndex'
  import about from '@/components/PageAbout'
  import service from '@/components/PageService'
  import portfolio from '@/components/PagePortfolio'
  import contact from '@/components/PageContact'
  import BottomInfo from '@/components/layout/BottomInfo'
  import Background from '@/components/layout/Background'
  export default {
    name: 'app',
    metaInfo: {
      title: 'Keep it Simple Studio',
      titleTemplate: '%s | Kisstudio'
      // link: [{
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
      // }]
    },
    data: function () {
      return {
        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight,
        gridColumnSetting: 3,
        gridRowSetting: 3,
        currentPosition: 'home',
        gridXY: [{
            name: 'home',
            column: 2,
            row: 2
          },
          {
            name: 'about',
            column: 2,
            row: 1
          },
          {
            name: 'service',
            column: 1,
            row: 2
          },
          {
            name: 'portfolio',
            column: 3,
            row: 2
          },
          {
            name: 'contact',
            column: 2,
            row: 3
          }
        ]
      }
    },
    computed: {
      gridColumn: function () {
        return 'repeat(' + this.gridColumnSetting + ',' + this.windowWidth + 'px)'
      },
      gridRow: function () {
        return 'repeat(' + this.gridRowSetting + ',' + this.windowHeight + 'px)'
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
        return (this.gridXY[this.currentIndex].column - 1) * this.windowWidth
      },
      positionY: function () {
        return (this.gridXY[this.currentIndex].row - 1) * this.windowHeight
      },
      currentIndex: function () {
        return (this.gridXY).findIndex((item) => item.name === this.currentPosition)
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
      },
      getIndexByName: function (val) {
        const myArray = this.gridXY
        let index = myArray.findIndex((item) => item.name === val)
        return index
      },
      gridPosition: function (index) {
        return this.gridXY[index].row + ' / ' + this.gridXY[index].column + ' / ' + (this.gridXY[index].row + 1) +
          ' / ' + (this.gridXY[index].column + 1)
      },
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.getWindowSize)
    },
    components: {
      NavLayer,
      home,
      about,
      service,
      portfolio,
      contact,
      BottomInfo,
      Background
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
          }, 600)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    main {
      min-height: 100%;
      width: 100%;
      overflow: hidden;
      div {
        height: 100%;
        position: fixed;
        display: grid;
        transition: .3s ease-in-out;
      }
    }
  }
</style>
