import {ERR_OK} from './config'
import http from 'common/js/http'
// import {getSearch} from 'common/js/util'
/**
 * 获取商家二维码
 * @returns {Promise.<TResult>}
 */

export function getShopCode() {
  const url = `/api/customer-service/wechat?merchant_id=${localStorage.getItem('merchantId')}`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
