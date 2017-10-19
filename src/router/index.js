import Vue from 'vue'
// 引入IView加载进度条
import LoadingBar from 'iview/src/components/loading-bar'
import 'iview/dist/styles/iview.css'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(LoadingBar)
Vue.prototype.$LoadingBar = LoadingBar

const router = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/Home'], resolve),
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: resolve => require(['@/pages/Dashboard'], resolve)
        },
        {
          path: '/panels',
          name: 'Panels',
          component: resolve => require(['@/pages/Panels'], resolve)
        },
        {
          path: '/widget',
          name: 'Widget',
          component: resolve => require(['@/pages/Widget'], resolve)
        },
        {
          path: '/imageList',
          name: 'ImageList',
          component: resolve => require(['@/pages/ImageList'], resolve)
        },
        {
          path: '/icons',
          name: 'Icons',
          component: resolve => require(['@/pages/Icons'], resolve)
        },
        {
          path: '/charts',
          name: 'Charts',
          component: resolve => require(['@/pages/Charts'], resolve)
        },
        {
          path: '/basicTable',
          name: 'BasicTable',
          component: resolve => require(['@/pages/BasicTable'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        other: resolve => require(['@/pages/Login'], resolve)
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  LoadingBar.config({
    color: '#2d8cf0',
    failedColor: '#ed3f14',
    height: 2
  })
  LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  LoadingBar.finish()
})

export default router
