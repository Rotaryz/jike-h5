import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Wheel = () => import('pages/wheel/wheel')
const QrCode = () => import('pages/qrCode/qrCode')
const Registration = () => import('pages/registration/registration')
const Activity = () => import('pages/activity/activity')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/wheel'
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/wheel',
      name: 'Wheel',
      meta: {title: '大转盘'},
      component: Wheel
    },
    {
      path: '/qrCode',
      name: 'QrCode',
      meta: {title: '加好友，聊天购物'},
      component: QrCode
    },
    {
      path: '/activity',
      name: 'Activity',
      meta: {title: '异业联盟活动'},
      component: Activity
    }
  ]
})
