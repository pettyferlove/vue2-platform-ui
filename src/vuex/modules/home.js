// state
const state = {
  menuCollapsed: false
}

// getters
const getters = {
  toggleMenu: state => state.menuCollapsed
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
