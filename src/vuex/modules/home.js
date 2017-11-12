import { homeRouter } from '@/router/router'

// state
const state = {
  menuCollapsed: false,
  menuList: []
}

// getters
const getters = {
  getToggleMenu: state => state.menuCollapsed,
  getMenuList: state => state.menuList
}

// actions
const actions = {
  toggleMenu (context) {
    context.commit('toggleMenu')
  }
}

// mutations
const mutations = {
  toggleMenu (state) {
    state.menuCollapsed = !state.menuCollapsed
  },
  updateMenuList (state) {
    state.menuList = homeRouter
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
