import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Wheel = () => import('pages/wheel/wheel')
const QrCode = () => import('pages/qrCode/qrCode')
const Registration = () => import('pages/registration/registration')
const Activity = () => import('pages/activity/activity')
const WsQrCode = () => import('pages/ws-qr-code/ws-qr-code')
const ZdQrCode = () => import('pages/zd-qr-code/zd-qr-code')
const WsWxCode = () => import('pages/ws-wx-code/ws-wx-code')
const WsPaySever = () => import('pages/ws-pay-server/ws-pay-server')
const WsPaySuccess = () => import('pages/ws-pay-server/ws-pay-success')
const ZdOpenAccount = () => import('pages/zd-open-account/zd-open-account')
const ZdCaptain = () => import('pages/zd-open-account/zd-captain')
const ZdOPenStaff = () => import('pages/zd-open-account/zd-open-staff')
const ZdStaff = () => import('pages/zd-open-account/zd-staff')
const LegalRights = () => import('pages/legal-rights/legal-rights')
const LegalRight = () => import('pages/legal-right/legal-right')

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
      path: '/ws-qr-code',
      name: 'WsQrCode',
      meta: {title: '赞播微商'},
      component: WsQrCode
    },
    {
      path: '/ws-wx-code',
      name: 'WsWxCode',
      meta: {title: ''},
      component: WsWxCode
    },
    {
      path: '/activity',
      name: 'Activity',
      meta: {title: '异业联盟活动'},
      component: Activity
    },
    {
      path: '/zd-qr-code',
      name: 'ZdQrCode',
      meta: {title: '关注公众号'},
      component: ZdQrCode
    },
    {
      path: '/ws-pay-success',
      name: 'WsPaySuccess',
      meta: {title: '支付成功'},
      component: WsPaySuccess
    },
    {
      path: '/ws-pay-server',
      name: 'WsPaySever',
      meta: {title: '购买微店'},
      component: WsPaySever
    },
    {
      path: '/zd-open-account',
      name: 'ZdOpenAccount',
      meta: {title: '赞播智店'},
      component: ZdOpenAccount
    },
    {
      path: '/zd-captain',
      name: 'ZdCaptain',
      meta: {title: '赞播智店'},
      component: ZdCaptain
    },
    // {
    //   path: '/zd-captain',
    //   name: 'ZdCaptain',
    //   meta: {title: '赞播智店'},
    //   component: ZdCaptain
    // },
    {
      path: '/zd-open-staff',
      name: 'ZdOPenStaff',
      meta: {title: '赞播智店'},
      component: ZdOPenStaff
    },
    {
      path: '/zd-staff',
      name: 'ZdStaff',
      meta: {title: '赞播智店'},
      component: ZdStaff
    },
    {
      path: '/legal-rights',
      name: 'LegalRights',
      meta: {title: '售后维权'},
      component: LegalRights
    },
    {
      path: '/legal-right/:id',
      name: 'LegalRight',
      meta: {title: '售后维权'},
      component: LegalRight
    }
  ]
})
