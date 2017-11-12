import Home from '@/pages/Home'

export const homeRouter = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        component: resolve => require(['@/pages/Dashboard'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'widget',
    component: Home,
    children: [
      {
        path: 'widget',
        name: 'widget_index',
        component: resolve => require(['@/pages/Widget'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'panels',
    component: Home,
    children: [
      {
        path: 'panels',
        name: 'panels_index',
        component: resolve => require(['@/pages/Panels'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'editor',
    component: Home,
    children: [
      {
        path: 'quill',
        name: 'quill_index',
        component: resolve => require(['@/pages/QuillEditor'], resolve)
      },
      {
        path: 'simplemde',
        name: 'simplemde_index',
        component: resolve => require(['@/pages/SimplemdeEditor'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'imageList',
    component: Home,
    children: [
      {
        path: 'imageList',
        name: 'imageList_index',
        component: resolve => require(['@/pages/ImageList'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'chart',
    component: Home,
    children: [
      {
        path: 'echarts',
        name: 'echarts_index',
        component: resolve => require(['@/pages/Echarts'], resolve)
      },
      {
        path: 'chartjs',
        name: 'chartjs_index',
        component: resolve => require(['@/pages/ChartJS'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'ui',
    component: Home,
    children: [
      {
        path: 'icons',
        name: 'icons_index',
        component: resolve => require(['@/pages/Icons'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'table',
    component: Home,
    children: [
      {
        path: 'basicTable',
        name: 'basicTable_index',
        component: resolve => require(['@/pages/BasicTable'], resolve)
      },
      {
        path: 'editableTable',
        name: 'editableTable_index',
        component: resolve => require(['@/pages/EditableTable'], resolve)
      }
    ]
  }
]

export const loginRouter = {
  path: '/login',
  name: 'login',
  component: resolve => require(['@/pages/Login'], resolve)
}

export const lockRouter = {
  path: '/lockScreen',
  name: 'lockScreen',
  component: resolve => require(['@/pages/LockScreen'], resolve)
}

export const routers = [
  ...homeRouter,
  lockRouter,
  loginRouter
]
