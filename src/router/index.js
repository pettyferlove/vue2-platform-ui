import Vue from 'vue'
import LoadingBar from '../components/progress/vp-loading-bar'
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
          name: 'dashboard',
          component: resolve => require(['@/pages/Dashboard'], resolve)
        },
        {
          path: '/panels',
          name: 'panels',
          component: resolve => require(['@/pages/Panels'], resolve)
        },
        {
          path: '/widget',
          name: 'widget',
          component: resolve => require(['@/pages/Widget'], resolve)
        },
        {
          path: '/imageList',
          name: 'imageList',
          component: resolve => require(['@/pages/ImageList'], resolve)
        },
        {
          path: '/icons',
          name: 'icons',
          component: resolve => require(['@/pages/Icons'], resolve)
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: resolve => require(['@/pages/Echarts'], resolve)
        },
        {
          path: '/chartjs',
          name: 'chartjs',
          component: resolve => require(['@/pages/ChartJS'], resolve)
        },
        {
          path: '/quillEditor',
          name: 'quillEditor',
          component: resolve => require(['@/pages/QuillEditor'], resolve)
        },
        {
          path: '/simplemdeEditor',
          name: 'simplemdeEditor',
          component: resolve => require(['@/pages/SimplemdeEditor'], resolve)
        },
        {
          path: '/basicTable',
          name: 'basicTable',
          component: resolve => require(['@/pages/BasicTable'], resolve)
        },
        {
          path: '/editableTable',
          name: 'editableTable',
          component: resolve => require(['@/pages/EditableTable'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      components: {
        other: resolve => require(['@/pages/Login'], resolve)
      }
    },
    {
      path: '/lockScreen',
      name: 'lockScreen',
      components: {
        other: resolve => require(['@/pages/LockScreen'], resolve)
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  LoadingBar.config({
    color: '#1d8ce0',
    failedColor: '#ed3f14',
    height: 2
  })
  LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  LoadingBar.finish()
  /* var content = document.getElementById('main-content')
  if (content != null) {
    content.scrollTop = 0
  } */
})

export default router
