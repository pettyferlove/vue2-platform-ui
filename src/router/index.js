import Vue from 'vue'
import LoadingBar from '../components/progress/vp-loading-bar'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import { routers } from './router'

Vue.use(Router)
Vue.use(LoadingBar)
Vue.prototype.$LoadingBar = LoadingBar

const VueRouter = new Router({
  routes: routers
})

VueRouter.beforeEach((to, from, next) => {
  LoadingBar.config({
    color: '#1d8ce0',
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

VueRouter.afterEach((to, from, next) => {
  LoadingBar.finish()
  /* var content = document.getElementById('main-content')
  if (content != null) {
    content.scrollTop = 0
  } */
})

export default VueRouter
