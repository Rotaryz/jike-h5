import axios from 'axios'

export function initAxios() {
  axios.defaults.baseURL = 'http://jike-wap-api.majy999.com'
  axios.defaults.headers.get['Authorization'] = '74200f9b218f9643df59e43e91ff4e039b7fde247afe5d2c485aaf9bf4f3b9182256ef9b218f9643df59e43e91ff4e039b7fd'
  axios.defaults.headers.get['Current-merchant'] = '100000'
}
