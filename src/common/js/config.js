import axios from 'axios'

export function initAxios() {
  axios.defaults.baseURL = 'http://jike-wap-api.majy999.com'
  axios.defaults.headers.get['Authorization'] = '34930099f14c8c85c1ccdfba3c1ff10698b297db837d64fddd1c86f19aecce1cc6504099f14c8c85c1ccdfba3c1ff10698b29'
  axios.defaults.headers.get['Current-merchant'] = '100000'
}
