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
  sass: 'https://ws-service-api.jkweixin.net', // sass平台
  zdMeEra: 'https://zhidian-me-api.jerryf.cn', // me时代智店
  zdAiUltra: 'https://zhidian-api.jkweixin.net', // 智店ai越权
  mall: 'https://zhidian-mall-api.jkweixin.net' // 赞播-商城
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
  sass: 'https://ws-service-api.jkweixin.net', // sass平台
  zdMeEra: 'https://zhidian-me-era-api.jkweixin.net', // me时代智店
  zdAiUltra: 'https://zhidian-api.jkweixin.net', // 智店ai越权
  mall: 'https://zhidian-mall-api.jkweixin.net' // 赞播-商城
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
  zdOauth: 'https://zhidian-api.jkweixin.com', // 智店铺授权
  sass: 'https://ws-service-api.jkweixin.com', // sass平台
  zdMeEra: 'https://zhidian-me-era-api.jkweixin.com', // me时代智店
  zdAiUltra: 'https://zhidian-api.jkweixin.com', // 智店ai越权
  mall: 'https://zhidian-mall-api.jkweixin.com' // 赞播-商城
}

const URLS = env.NODE_ENV === 'production' ? PROD_URL : env.NODE_ENV === 'test'
  ? TEST_URL
  : DEV_URL
// 智店rq-code
const IMG_TEST_URL = {
  zd: '/join/zhidian-qrcode-net.png', // 智店铺授权
  zdMeEra: '/join/me-qr-code-net.jpg', // me时代智店
  mall: '/join/mall-qr-code.jpg' // 商城
}
const IMG_PROD_URL = {
  zd: '/join/zhidian-qrcode.jpg', // 智店铺授权
  zdMeEra: '/join/me-qr-code.jpg', // me时代智店
  mall: '/join/mall-qr-code.jpg' // 商城
}
export const ZD_QR_CODE_URL = env.NODE_ENV === 'production' ? IMG_PROD_URL : IMG_TEST_URL
// '/zd-img/join/zhidian-qrcode-net.png', // 智店测试
//   '/zd-img/join/zhidian-qrcode.jpg', // 智慧生产
//   '/zd-img/join/me-qr-code-net.jpg', // ME时代测试
//   '/zd-img/join/me-qr-code.jpg', // ME时代生成
export default URLS
