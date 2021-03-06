import {ERR_OK} from './config'
import http from 'common/js/http'
/**
 * 获取商家二维码
 * @returns {Promise.<TResult>}
 */
export function getQrCode(id, corp) {
  const url = `/api/receive/work-qrcode?employee_id=${id}&current_corp=${corp}`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
/**
 * 获取店家群二维码
 * @returns {Promise.<TResult>}
 */
export function getGroupQrCode(id, corp) {
  const url = `/api/receive/wx-group-qrcode?employee_id=${id}&current_corp=${corp}`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  })
}
/**
 * 获取店家个人二维码
 * @returns {Promise.<TResult>}
 */
export function getPersonalQrCode(id, corp) {
  const url = `/api/receive/personal-qrimage?employee_id=${id}&current_corp=${corp}`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
/**
 * 调用微信支付订单
 * @returns {Promise.<TResult>}
 */
export function getWxPayParams(token, shopName, mobile) {
  const url = `/user-open-service?token=${token}&shop_name=${shopName}&mobile=${mobile}`
  return http.post(url).then((res) => {
    return Promise.resolve(res)
  })
}
