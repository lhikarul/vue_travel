import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Zone from '@/views/zone/Zone'
import Detail from '@/views/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/zone',
      name: 'Zone',
      component: Zone
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from ,savePosition) {
    return {x:0, y:0}
  }
})
