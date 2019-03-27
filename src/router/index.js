import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Task from '@/views/task/task'
import TaskDetail from '@/views/task/taskDetail'
import Mine from '@/views/mine/mine'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/taskDetail/:id',
      name: 'taskDetail',
      component: TaskDetail
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('auth-token')
  if (to.name === 'login') {
    next()
  } else {
    if (token === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
