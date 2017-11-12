export const homeRouter = [
  {
    path: '/dashboard',
    redirect: '/dashboard/index',
    name: 'home',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [
      {
        path: 'index',
        name: 'dashboard_index',
        component: resolve => require(['@/pages/Dashboard'], resolve)
      }
    ]
  },
  {
    path: '/widget',
    redirect: '/widget/index',
    name: 'widget',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [
      {
        path: 'index',
        name: 'widget_index',
        component: resolve => require(['@/pages/Widget'], resolve)
      }
    ]
  },
  {
    path: '/panels',
    redirect: '/panels/index',
    name: 'panels',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [
      {
        path: 'index',
        name: 'panels_index',
        component: resolve => require(['@/pages/Panels'], resolve)
      }
    ]
  },
  {
    path: '/editor',
    redirect: '/editor/quill',
    name: 'editor',
    component: resolve => require(['@/pages/Home'], resolve),
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
    path: '/imageList',
    redirect: '/imageList/index',
    name: 'imageList',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [
      {
        path: 'index',
        name: 'imageList_index',
        component: resolve => require(['@/pages/ImageList'], resolve)
      }
    ]
  },
  {
    path: '/chart',
    redirect: '/chart/echarts',
    name: 'chart',
    component: resolve => require(['@/pages/Home'], resolve),
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
    path: '/ui',
    redirect: '/ui/icons',
    name: 'ui',
    component: resolve => require(['@/pages/Home'], resolve),
    children: [
      {
        path: 'icons',
        name: 'icons_index',
        component: resolve => require(['@/pages/Icons'], resolve)
      }
    ]
  },
  {
    path: '/table',
    redirect: '/table/basicTable',
    name: 'table',
    component: resolve => require(['@/pages/Home'], resolve),
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

export const otherRouter = {
  path: '/',
  redirect: '/dashboard',
  name: 'otherRouter',
  component: resolve => require(['@/pages/Home'], resolve)
}

export const routers = [
  ...homeRouter,
  lockRouter,
  loginRouter,
  otherRouter
]
