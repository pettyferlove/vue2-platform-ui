import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Panels from '@/pages/Panels'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Panels',
          component: Panels
        }
      ]
    }
  ]
})
