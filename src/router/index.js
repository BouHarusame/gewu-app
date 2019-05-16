import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Task from '@/views/task/task'
import TruckTask from '@/views/task/TruckTask'
import truckProgress from '@/views/task/truckProgress'
import TaskDetail from '@/views/task/taskDetail'
import truckTaskDetail from '@/views/task/truckTaskDetail'
import truckProgressDetail from '@/views/task/truckProgressDetail'
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
      path: '/truckTask',
      name: 'truckTask',
      component: TruckTask
    },
    {
      path: '/truckProgress',
      name: 'truckProgress',
      component: truckProgress
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
      path: '/truckTaskDetail/:id',
      name: 'truckTaskDetail',
      component: truckTaskDetail
    },
    {
      path: '/truckProgressDetail/:id',
      name: 'truckProgressDetail',
      component: truckProgressDetail
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
  // mode: 'history'
})
router.beforeEach((to, from, next) => {
  const login = sessionStorage.getItem('login')
  if (to.name === 'login') {
    next()
  } else {
    if (login === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
