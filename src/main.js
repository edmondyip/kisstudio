// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/normalize.css'
import '@/assets/css/_main.css'

Vue.config.productionTip = false

// Gobal Data
Vue.mixin({
  data: function () {
    return {
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      mousePositionX: 0,
      mousePositionY: 0,
      currentPosition: this.$route.name
    }
  },
  computed: {
    imageOffsideX: function () {
      return (this.windowWidth - this.mousePositionX)
    },
    imageOffsideY: function () {
      return (this.windowHeight - this.mousePositionY)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowSize)
    })
  },
  methods: {
    updatePosition: function (event) {
      this.mousePositionX = event.clientX
      this.mousePositionY = event.clientY
    },
    getWindowSize: function (event) {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
    },
    mouseEffect: function (val) {
      return {
        transform: 'translateY(' + (this.imageOffsideY / val) + 'px) translateX(' + (this.imageOffsideX / val) + 'px)'
      }
    }
  },
  created: function () {
    window.addEventListener('mousemove', this.updatePosition)
    this.currentPosition = this.$route.name
  },
  beforeDestroy: function () {
    window.removeEventListener('mousemove', this.updatePosition)
    window.removeEventListener('resize', this.getWindowSize)
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
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
