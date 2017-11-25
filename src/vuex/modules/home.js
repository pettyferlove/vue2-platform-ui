import router from '@/router/index'
import { homeRouter } from '@/router/router'
import util from '@/libs/utils'

// state
const state = {
  // 菜单折叠
  menuCollapsed: false,
  autoCollapsed: true,
  menuList: [],
  // Router
  routerList: [
    ...homeRouter
  ],
  // 面包屑
  breadcrumbList: [{
    title: '首页',
    name: 'home_index',
    path: '/home'
  }],
  openPageList: [{
    title: '首页',
    name: 'home_index',
    path: '/home'
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
  getOpenPageList: function () {
    if (localStorage.openPageList) {
      let _tempList = JSON.parse(localStorage.openPageList)
      if (_tempList.length > state.openPageList.length) {
        state.openPageList = JSON.parse(localStorage.openPageList)
      }
    }
    return state.openPageList
  }
}

// actions
const actions = {
  toggleMenu (context) {
    context.commit('toggleMenu')
  }
}

// mutations
const mutations = {
  setToggleMenu (state, isCollapsed) {
    if (state.autoCollapsed) {
      localStorage.setItem('menuCollapsed', isCollapsed)
      state.menuCollapsed = isCollapsed
    }
  },
  toggleMenu (state) {
    let isCollapsed = !state.menuCollapsed
    localStorage.setItem('menuCollapsed', isCollapsed)
    // 如果用户手动切换折叠状态关闭自动折叠将操作权交给用户
    state.autoCollapsed = false
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
          util.updateOpenTags(state.openPageList, _temp)
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
            util.updateOpenTags(state.openPageList, _tempChild)
            state.breadcrumbList.push(_tempParent)
            state.breadcrumbList.push(_tempChild)
          }
        })
      }
    })
  },
  closeAllTags (state) {
    router.push({
      name: 'home_index'
    })
    state.openPageList.splice(1)
    localStorage.openPageList = JSON.stringify(state.openPageList)
  },
  closeOtherTags (state, vp) {
    let currentTagIndex = 0
    let currentTagName = vp.$route.name
    state.openPageList.forEach((item, index) => {
      if (item.name === currentTagName) {
        currentTagIndex = index
      }
    })
    if (currentTagIndex === 0) {
      state.openPageList.splice(1)
    } else {
      state.openPageList.splice(currentTagIndex + 1)
      state.openPageList.splice(1, currentTagIndex - 1)
    }
    localStorage.openPageList = JSON.stringify(state.openPageList)
  },
  closeTag (state, name) {
    state.openPageList.forEach((item, index) => {
      if (item.name === name) {
        state.openPageList.splice(index, 1)
      }
    })
    localStorage.openPageList = JSON.stringify(state.openPageList)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
