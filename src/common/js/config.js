import axios from 'axios'
import {getSearch} from './util'
import URIS from './base'

export function initAxios() {
  const search = getSearch()
  localStorage.setItem('token', search.token)
  localStorage.setItem('merchantId', search.merchantId)
  localStorage.setItem('isBinding', search.isBinding)
  localStorage.setItem('id', search.id)
  localStorage.setItem('useType', search.useType)
  // localStorage.setItem('type', search.type)
  axios.defaults.baseURL = search.type === 'ws' ? URIS.wsApi : URIS.api
  axios.defaults.headers.common['Authorization'] = search.token
  axios.defaults.headers.common['Current-merchant'] = search.merchantId
}
