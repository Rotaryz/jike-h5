import {ERR_OK} from './config'
import http from '../common/js/http'

export function getMerchantData(id) {
  const url = `/api/merchants/merchants-data/${id}`
  return http.get(url).then(res => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
