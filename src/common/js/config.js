import axios from 'axios'
import {getSearch} from './util'

export function initAxios() {
  const search = getSearch()
  localStorage.setItem('token', search.token)
  localStorage.setItem('merchantId', search.merchantId)
  axios.defaults.baseURL = 'http://dev.jike-wap-api.jerryf.cn'
  axios.defaults.headers.get['Authorization'] = search.token
  axios.defaults.headers.get['Current-merchant'] = search.merchantId
}
