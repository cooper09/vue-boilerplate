import Vue from 'vue'
import Router from 'vue-router'
import MenuScreen from '@/components/MenuScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuScreen',
      component: MenuScreen
    }
  ]
})
