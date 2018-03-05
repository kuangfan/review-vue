import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Communication from '@/views/test/communication'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '回顾复习',
      component: Home
    },
    {
      path: '/communication',
      name: '父子组件通信',
      component: Communication
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.getElementsByTagName('title')[0].innerHTML = to.name
  next()
})

export default router
