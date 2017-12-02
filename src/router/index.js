import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import('components/recommend/recommend')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
