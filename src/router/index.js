import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Work from '@/view/Work/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
