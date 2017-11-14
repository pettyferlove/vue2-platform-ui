import Home from '@/pages/Home'

export const homeRouter = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    title: '仪表盘',
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
    title: '组件',
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
    title: '面板',
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
    title: '富文本编辑器',
    component: Home,
    children: [
      {
        path: 'quill',
        title: 'Quill富文本编辑器',
        name: 'quill_index',
        component: resolve => require(['@/pages/QuillEditor'], resolve)
      },
      {
        path: 'simplemde',
        title: 'Simplemde编辑器',
        name: 'simplemde_index',
        component: resolve => require(['@/pages/SimplemdeEditor'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'imageList',
    title: '图片列表',
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
    title: '图表',
    component: Home,
    children: [
      {
        path: 'echarts',
        title: 'ECharts',
        name: 'echarts_index',
        component: resolve => require(['@/pages/Echarts'], resolve)
      },
      {
        path: 'chartjs',
        title: 'ChartJS',
        name: 'chartjs_index',
        component: resolve => require(['@/pages/ChartJS'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'ui',
    title: 'UI元素',
    component: Home,
    children: [
      {
        path: 'icons',
        title: 'Awesome图标',
        name: 'icons_index',
        component: resolve => require(['@/pages/Icons'], resolve)
      }
    ]
  },
  {
    path: '/',
    name: 'table',
    title: '表格',
    component: Home,
    children: [
      {
        path: 'basicTable',
        title: '基础表格',
        name: 'basicTable_index',
        component: resolve => require(['@/pages/BasicTable'], resolve)
      },
      {
        path: 'editableTable',
        title: '可编辑表格',
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
