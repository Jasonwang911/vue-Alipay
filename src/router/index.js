import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Friend from '@/components/mainhtml/Friend'
// import Chat from '@/components/mainhtml/Chat'
// import Mine from '@/components/mainhtml/Mine'
// import Spend from '@/components/mainhtml/Spend'
// import Index from '@/components/mainhtml/Index'
// import Koubei from '@/components/mainhtml/Koubei'
// import IndexBottom from '@/components/mainhtml/IndexBottom'

let Act = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/common/Article'))
  })
}
// import Act from '@/components/common/Article'

// webpack 的懒加载
let IndexBottom = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/IndexBottom'))
  })
}
let Koubei = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Koubei'))
  })
}
let Index = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Index'))
  })
}
let Spend = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Spend'))
  })
}
let Friend = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Friend'))
  })
}
let Chat = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Chat'))
  })
}
let Mine = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/mainhtml/Mine'))
  })
}

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'isActive',
  routes: [
    {
      path: '/',
      component: IndexBottom,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/Friend',
          name: 'Friend',
          component: Friend
        },
        {
          path: '/Chat',
          name: 'Chat',
          component: Chat
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: '/Spend',
          name: 'Spend',
          component: Spend
        }
      ]
    },
    {
      path: '/Koubei',
      name: 'Koubei',
      component: Koubei
    },
    {
      path: '/Act',
      name: 'Act',
      component: Act
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log('beforEach')
//   next()
// }) 进入路由前要做的事情

export default router
