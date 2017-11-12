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
    let menuList = []
    /* if (homeRouter.children.length <= 1) {
      menuList.push(homeRouter)
    } else {
      let i = menuList.push(homeRouter)
      let childrenArr = []
      childrenArr = homeRouter.children.filter(child => {
        return child
      })
      menuList[i - 1].children = childrenArr
    } */
    console.table(menuList)
    console.table(homeRouter)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
