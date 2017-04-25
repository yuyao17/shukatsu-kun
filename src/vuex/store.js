import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import plugins from './plugins'

Vue.use(Vuex)

const state = {
  companies : JSON.parse(window.localStorage.getItem("_companyList")) || [], // firebase使ってみる
  activeCompany: {}
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins
})

if (module.hot) {
  module.hot.accept([
    './mutations',
    './actions'
  ], () => {
    store.hotUpdate({
      mutations: require('./mutations'),
      actions: require('./actions')
    })
  })
}

export default store
