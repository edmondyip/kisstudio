import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FatFatPinky from '@/components/FatFatPinky'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FatFatPinky',
      component: FatFatPinky
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
