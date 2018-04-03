import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Wheel = () => import('pages/wheel/wheel')
const QrCode = () => import('pages/qrCode/qrCode')
const Registration = () => import('pages/registration/registration')

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
      meta: {title: '加赞播客服好友'},
      component: QrCode
    }
  ]
})
