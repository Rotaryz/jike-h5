import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Wheel = () => import('pages/wheel/wheel')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/wheel'
    },
    {
      path: '/wheel',
      name: 'Wheel',
      meta: {title: '大转盘'},
      component: Wheel
    }
  ]
})
