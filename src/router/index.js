import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import('pages/recommend/recommend')
const CouponDetail = () => import('pages/coupon-detail/coupon-detail')
const PostOrder = () => import('pages/post-order/post-order')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/coupon/:id',
      component: CouponDetail
    },
    {
      path: '/post-order',
      component: PostOrder
    }
  ]
})
