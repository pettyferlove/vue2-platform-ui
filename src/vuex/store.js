import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  count: 0,
  menuCollapsed: false
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
