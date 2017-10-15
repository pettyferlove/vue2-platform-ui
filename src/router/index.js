import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Panels from '@/pages/Panels'
import Dashboard from '@/pages/Dashboard'
import Widget from '@/pages/Widget'

Vue.use(Router)

export default new Router({
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
        }
      ]
    }
  ]
})
