import Vue from 'vue'
import Vuex from 'vuex'

import router from "@/router"
import * as getters from "./getters"
import * as actions from "./actions"
import * as mutations from "./mutations"

Vue.use(Vuex)
const state = {
  position: home,
  history: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accpet([
    "./getters.js",
    "./actions.js",
    "./mutations.js"
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

const unsync = sync(store, router, {
  moduleName: '$route'
})

export default store
