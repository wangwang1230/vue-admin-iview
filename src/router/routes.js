import Home from '@/components/layout/Home'
import Index from '@/components/views/Index'

const Chart = () => import('@/components/views/Chart')
const Abnormal = () => import('@/components/pages/Abnormal')
const Register = () => import('@/components/pages/Register')
const E404 = () => import('@/components/pages/E404')
const Login = () => import('@/components/pages/Login')
const Table = () => import('@/components/views/Table')
const UserInfo = () => import('@/components/views/UserInfo')
const UserList = () => import('@/components/views/UserList')
const List = () => import('@/components/views/List')
const Filter = () => import('@/components/pages/Filter')
const SetMenu = () => import('@/components/pages/SetMenu')
const SetMenu2 = () => import('@/components/pages/SetMenu2')
const Map = () => import('@/components/views/Map')
const Transfer = () => import('@/components/views/Transfer')
const ECharts = () => import('@/components/views/EChart')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
        icon: 'icon-wujiaoxing',
        level: 1,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: Chart,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/list',
        name: 'list',
        component: List,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: Transfer,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo,
        icon: 'icon-addpeople_fill',
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/userList',
        name: 'userList',
        component: UserList,
        icon: 'icon-addpeople_fill',
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/table',
        name: '',
        component: Table,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/echarts',
        name: '',
        component: ECharts,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },

      {
        path: '/filter',
        name: 'filter',
        component: Filter,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/abnormal',
        name: '设备异常记录',
        component: Abnormal,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/setMenu2',
        name: 'setMenu2',
        component: SetMenu2
      },
      {
        path: '/setMenu',
        name: 'setMenu',
        component: SetMenu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/error404',
    name: 'error404',
    component: E404
  },
  {
    path: '*',
    redirect: '/notFound'
  }

]

export default routes
