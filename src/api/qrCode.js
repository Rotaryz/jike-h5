import {ERR_OK} from './config'
import axios from 'axios'

/**
 * 获取商家二维码
 * @returns {Promise.<TResult>}
 */
export function getShopCode() {
  const url = `/api/customer-service/wechat`
  return axios.get(url).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    }
  })
}
