import http from 'common/js/http'

/**
 * 店长注册
 * @returns {Promise.<TResult>}
 */
export function register(data) {
  const url = `/api/jwt/merchant/register`
  return http.post(url, data)
}
/**
 * 员工加入
 * @returns {Promise.<TResult>}
 */
export function staffJoin(data) {
  const url = `/api/jwt/employee/login`
  return http.post(url, data)
}
/**
 * 获取验证码
 * @returns {Promise.<TResult>}
 */
export function getSms(data) {
  const url = `/api/sms`
  return http.post(url, data)
}
/**
 * 商家信息
 * @returns {Promise.<TResult>}
 */
export function getMerchantInfo(data) {
  const url = `/api/inviter`
  return http.get(url, data)
}
