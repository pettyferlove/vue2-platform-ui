import Vue from 'vue'
// 引入IView加载进度条
import LoadingBar from 'iview/src/components/loading-bar'
import 'iview/dist/styles/iview.css'

import Router from 'vue-router'
import Home from '@/pages/Home'
import Panels from '@/pages/Panels'
import Dashboard from '@/pages/Dashboard'
import Widget from '@/pages/Widget'
import ImageList from '@/pages/ImageList'

Vue.use(Router)
Vue.use(LoadingBar)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/panels',
          name: 'Panels',
          component: Panels
        },
        {
          path: '/widget',
          name: 'Widget',
          component: Widget
        },
        {
          path: '/imageList',
          name: 'ImageList',
          component: ImageList
        }
      ]
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
