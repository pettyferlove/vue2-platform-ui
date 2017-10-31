import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import home from './modules/home'

Vue.use(Vuex)

const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  getters,
  modules: {
    home
  },
  mutations,
  actions
})

export default store
