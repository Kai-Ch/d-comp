import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/sbd',
  routes: [{
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/Hello'], resolve)
    },
    {
      path: '/comp-test',
      name: 'CompTest',
      component: resolve => require(['@/components/component-test'], resolve)
    }
  ]
})
