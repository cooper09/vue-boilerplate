import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StartPage from '@/components/StartPage'
import Multiline from '@/components/Multiline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/multiline',
      name: 'Multiline',
      component: Multiline
    },
  ]//end routes array
})//end Router
