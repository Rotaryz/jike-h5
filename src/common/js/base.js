/**
 * Created by user on 2018/1/18.
 */
// 研发站：
// 图片地址     https://img.jerryf.cn
//   单点登录地址  https://dev.jike-jwt.jerryf.cn
//   B端api地址   https://dev.jike-backend-api.jerryf.cn
//   C端api地址   https://dev.jike-wap-api.jerryf.cn
//
//   测试站
// 图片地址     https://img.jkweixin.net
//   单点登录地址  https://jwt.jkweixin.net
//   B端api地址   https://backend-api.jkweixin.net
//   C端api地址   https://wap-api.jkweixin.net
//
//   正式站
// 图片地址     https://img.jkweixin.com
//   单点登录地址  https://jwt.jkweixin.com
//   B端api地址   https://backend-api.jkweixin.com
//   C端api地址   https://wap-api.jkweixin.com

const version = '/v1'

const env = process.env

const PROD_URL = {
  image: 'https://img.live.gytcrm.com',
  login: 'https://jwt.live.gytcrm.com',
  api: 'https://wap-api.live.gytcrm.com' + version
}

/**
 * 研发环境
 * @type {{image: string, login: string, api: string}}
 */
const DEV_URL = {
  image: 'https://img.jerryf.cn',
  login: 'https://dev.jike-jwt.jerryf.cn',
  api: 'https://dev.jike-wap-api.jerryf.cn' + version
}

/**
 * 测试环境
 * @type {{image: string, login: string, api: string}}
 */
const TEST_URL = {
  image: 'https://img.jkweixin.net',
  login: 'https://jwt.jkweixin.net',
  api: 'https://wap-api.jkweixin.net'
}

/**
 * 生产环境
 * @type {{image: string, login: string, api: string}}
 */
// const URLS = {
//   image: 'https://img.jkweixin.com',
//   login: 'https://jwt.jkweixin.com',
//   api: 'https://wap-api.jkweixin.com'
// }
const URLS = env.NODE_ENV === 'production' ? PROD_URL : env.NODE_ENV === 'test' ? TEST_URL : DEV_URL

const URIS = {
  image: DEV_URL.image,
  login: DEV_URL.login,
  api: DEV_URL.api
}
export default URIS

