import {ERR_OK} from './config'
import http from 'common/js/http'
// import {getSearch} from 'common/js/util'
/**
 * 获取商家二维码
 * @returns {Promise.<TResult>}
 */

export function getShopCode(data) {
  const url = `/api/customer-service/wechat`
  return http.get(url, data).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
