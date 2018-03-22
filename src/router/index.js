import LoadingBar from '../components/progress/vp-loading-bar'
import Cookies from 'js-cookie'
import { routers } from './router'

Vue.use(LoadingBar)
Vue.prototype.$LoadingBar = LoadingBar

const Router = new VueRouter({
  routes: routers
})

Router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '主页'
  LoadingBar.config({
    color: '#409EFF',
    failedColor: '#ed3f14',
    height: 2
  })
  LoadingBar.start()
  if (!Cookies.get('user_token') && to.name !== 'login') {
    next({
      name: 'login'
    })
    LoadingBar.finish()
  } else if (Cookies.get('user_token') && to.name === 'login') {
    next({
      name: 'home'
    })
    LoadingBar.finish()
  } else {
    next()
    LoadingBar.finish()
  }
})

Router.afterEach((to, from, next) => {
  LoadingBar.finish()
  /* var content = document.getElementById('main-content')
  if (content != null) {
    content.scrollTop = 0
  } */
})

export default Router
