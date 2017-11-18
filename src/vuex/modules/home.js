import { homeRouter } from '@/router/router'
import util from '@/libs/utils'

// state
const state = {
  // 菜单折叠
  menuCollapsed: false,
  menuList: [],
  // Router
  routerList: [
    ...homeRouter
  ],
  // 面包屑
  breadcrumbList: [{
    title: '首页',
    name: 'home',
    path: '/'
  }],
  openTagsList: [{
    title: '首页',
    name: 'home_index',
    path: '/'
  }],
  tagList: []
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
  getMenuList: state => state.menuList,
  getBreadcrumbList: state => state.breadcrumbList,
  getOpenTagsList: state => state.openTagsList
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
  },
  updateOpenPageList (state, routerPath) {
    state.breadcrumbList.splice(0, state.breadcrumbList.length)
    let routerList = state.routerList
    // 初始压入首页
    let home = {
      title: '首页',
      name: 'home',
      path: '/'
    }
    state.breadcrumbList.push(home)
    routerList.forEach(item => {
      let _tempPath = item.path
      if (item.children.length <= 1) {
        _tempPath += item.children[0].path
        if (routerPath === _tempPath) {
          let _temp = {
            title: item.title,
            name: item.children[0].name,
            path: item.children[0].path
          }
          // 更新面包屑的同时更新OpenTags数组
          util.updateOpenTags(state.openTagsList, _temp)
          state.breadcrumbList.push(_temp)
        }
      } else {
        item.children.filter(child => {
          let _tempPathChild = _tempPath
          _tempPathChild += child.path
          if (routerPath === _tempPathChild) {
            let _tempParent = {
              title: item.title,
              name: item.name
            }
            let _tempChild = {
              title: child.title,
              name: child.name,
              path: child.path
            }
            // 更新面包屑的同时更新OpenTags数组
            util.updateOpenTags(state.openTagsList, _tempChild)
            state.breadcrumbList.push(_tempParent)
            state.breadcrumbList.push(_tempChild)
          }
        })
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
