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

const version = '/v2' //
const versionZD = '' // 智店版本号

const env = process.env

/**
 * 研发环境
 * @type {{image: string, login: string, api: string}}
 */
const DEV_URL = {
  h5: 'https://h5.jkweixin.net',
  image: 'http://img.jerryf.cn',
  login: 'http://dev.jike-jwt.jerryf.cn',
  api: 'http://dev.jike-wap-api.jerryf.cn' + version,
  ws: 'https://ws-api.jkweixin.net', // 微商
  zd: 'https://zhidian-api.jkweixin.net' + versionZD, // 智店铺
  zdOauth: 'https://zhidian-api.jkweixin.net', // 智店铺授权
  sass: 'https://ws-service-api.jkweixin.net' // sass平台
}

/**
 * 测试环境
 * @type {{image: string, login: string, api: string}}
 */
const TEST_URL = {
  h5: 'https://h5.jkweixin.net',
  image: 'https://img.jkweixin.net',
  login: 'https://jwt.jkweixin.net',
  api: 'https://wap-api.jkweixin.net' + version,
  ws: 'https://ws-api.jkweixin.net', // 微商
  zd: 'https://zhidian-api.jkweixin.net' + versionZD, // 智店铺
  zdOauth: 'https://zhidian-api.jkweixin.net', // 智店铺授权
  sass: 'https://ws-service-api.jkweixin.net' // sass平台
}

/**
 * 生产环境
 * @type {{image: string, login: string, api: string}}
 */
const PROD_URL = {
  h5: 'https://h5.jkweixin.com',
  image: 'https://img.jkweixin.com',
  login: 'https://jwt.jkweixin.com',
  api: 'https://wap-api.jkweixin.com' + version,
  ws: 'https://ws-api.jkweixin.com', // 微商
  zd: 'https://zhidian-api.jkweixin.com' + versionZD, // 智店铺
  zdOauth: 'https://zhidian-api.jkweixin.net', // 智店铺授权
  sass: 'https://ws-service-api.jkweixin.com' // sass平台
}

const URLS = env.NODE_ENV === 'production' ? PROD_URL : env.NODE_ENV === 'test'
  ? TEST_URL
  : DEV_URL
// const URLS = TEST_URL

// const URIS = {
//   image: URLS.image,
//   login: URLS.login,
//   api: URLS.api,
//   wsApi: URLS.wsApi,
//   zdApi: URLS.zdApi,
//   sassApi: URLS.sassApi
// }
export default URLS
