import axios from 'axios'
import {getSearch} from './util'

export function initAxios() {
  const search = getSearch()
  localStorage.setItem('token', search.token)
  localStorage.setItem('merchantId', search.merchantId)
  localStorage.setItem('isBinding', search.isBinding)
  axios.defaults.baseURL = 'https://dev.jike-wap-api.jerryf.cn'
  axios.defaults.headers.common['Authorization'] = search.token
  axios.defaults.headers.common['Current-merchant'] = search.merchantId
}
