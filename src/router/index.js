import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 工作台
      path: 'work',
      name: 'Work',
      component: resolve => {
        require.ensure(['../components/Work/work.vue'], () => {
          resolve(require('../components/Work/work.vue'))
        })
      }
    }
  ]
})
