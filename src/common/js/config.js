import axios from 'axios'

export function initAxios() {
  axios.defaults.baseURL = 'http://jike-wap-api.majy999.com'
  axios.defaults.headers.get['Authorization'] = '53816280f492bfae284eacf68b4af154db827e5f4b2b2c41aba5998530a96c547d055280f492bfae284eacf68b4af154db827'
  axios.defaults.headers.get['Current-merchant'] = '100000'
}
