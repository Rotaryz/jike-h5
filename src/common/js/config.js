import axios from 'axios'
import {getSearch} from './util'
import URIS from './base'

export function initAxios() {
  const search = getSearch()
  localStorage.setItem('token', search.token)
  localStorage.setItem('merchantId', search.merchantId)
  localStorage.setItem('isBinding', search.isBinding)
  axios.defaults.baseURL = URIS.api
  axios.defaults.headers.common['Authorization'] = search.token
  axios.defaults.headers.common['Current-merchant'] = search.merchantId
}
