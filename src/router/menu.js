const menu = [

  {
    path: '/',
    name: '列表页',
    icon: 'icon-createtask_fill',
    level: 0,
    fixed: false,
    children: [
      {
        path: '/chart',
        name: 'chart',
        icon: 'icon-dynamic_fill',
        level: 1,
        children: [],
        fixed: false
      },
      {
        path: '/list',
        name: 'list',
        level: 1,
        children: [],
        fixed: false
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        icon: 'icon-addpeople_fill',
        children: [],
        fixed: false,
        level: 1
      },
      {
        level: 1,
        path: '/userList',
        children: [],
        fixed: false,
        name: 'userList'
      },
      {
        level: 1,
        path: '/filter',
        name: 'filter',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      },
      {
        level: 1,
        path: '/transfer',
        name: 'transfer',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      },
      {
        level: 1,
        path: '/table',
        name: 'table',
        children: [],
        fixed: false,
        icon: 'icon-emoji_fill'
      }
    ]
  },
  {
    path: '/',
    name: '页面',
    level: 0,
    icon: 'icon-document_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/error404',
        children: [],
        fixed: false,
        name: '404'
      },
      {
        level: 1,
        path: '/login',
        children: [],
        fixed: false,
        name: '登录'
      },
      {
        level: 1,
        path: '/register',
        children: [],
        fixed: false,
        name: '注册'
      }
    ]
  },
  {
    path: '/user',
    name: '用户管理',
    level: 0,
    icon: 'icon-addressbook',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/setMenu2',
        children: [],
        fixed: false,
        name: 'setMenu2'
      },
      {
        level: 1,
        path: '/setMenu',
        children: [],
        fixed: false,
        name: 'setMenu'
      }
    ]
  },
  {
    path: '/backstage',
    name: '后台管理',
    level: 0,
    icon: 'icon-computer',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/setMenu2',
        children: [],
        fixed: false,
        name: 'setMenu2'
      }
    ]
  },
  {
    path: '/equipment',
    name: '设备管理',
    level: 0,
    icon: 'icon-decoration_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/table',
        name:'设备运维',
        children: [],
        fixed: false,
      },
      {
        level: 1,
        path: '/abnormal',
        name: '异常记录',
        children: [],
        fixed: false,
      }
    ]
  },
  {
    path: '/alarm',
    name: '报警管理',
    level: 0,
    icon: 'icon-remind_fill',
    fixed: false,
    children: [
      {
        path: '/index',
        name: '实时报警',
        icon: 'icon-wujiaoxing',
        // hidden: true,
        level: 0,
        sort: 1,
        children: [],
        fixed: false
      },
      {
        level: 1,
        path: '/setMenu2',
        children: [],
        fixed: false,
        name: 'setMenu2'
      },
      {
        level: 1,
        path: '/table',
        name:'报警设备',
        children: [],
        fixed: false,
      },
      {
        level: 1,
        path: '/echarts',
        name:'图表',
        children: [],
        fixed: false,
      }
    ]
  },
  {
    path: '/message',
    name: '消息通知管理',
    level: 0,
    icon: 'icon-interactive_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/setMenu2',
        children: [],
        fixed: false,
        name: 'setMenu2'
      }
    ]
  },



]

export default menu
