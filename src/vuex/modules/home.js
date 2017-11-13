import { homeRouter } from '@/router/router'

// state
const state = {
  menuCollapsed: false,
  menuList: []
}

// getters
const getters = {
  getToggleMenu: function () {
    let collapsed = localStorage.getItem('menuCollapsed')
    if (collapsed === 'true') {
      state.menuCollapsed = true
    } else {
      state.menuCollapsed = false
    }
    return state.menuCollapsed
  },
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
    let isCollapsed = !state.menuCollapsed
    localStorage.setItem('menuCollapsed', isCollapsed)
    state.menuCollapsed = isCollapsed
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
