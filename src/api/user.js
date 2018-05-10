/**
 * Created by user on 2018/1/8.
 */
import http from '../common/js/http'
/**
 * 发送验证码
 * @returns {Promise.<*>}
 */
export function getPhoneCode(data) {
  const url = `/api/info/send-message`
  // const parmas = Object.assign({}, commonParams, data)
  return http.post(url, data
  ).then((res) => {
    return Promise.resolve(res)
  })
}
/**
 * 修改手机号码
 * @returns {Promise.<*>}
 */
export function bindPhone(data) {
  const url = `/api/info/valida-message`
  return http.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}
