import axios from 'axios'

export function initAxios() {
  axios.defaults.baseURL = 'http://dev.jike-wap-api.jerryf.cn'
  axios.defaults.headers.get['Authorization'] = '748403ea9832b1c173fbc248f07fc73dd88598065b4b1a9495f7bda0b6f182e0cabd83ea9832b1c173fbc248f07fc73dd8859'
  axios.defaults.headers.get['Current-merchant'] = '100000'
}
