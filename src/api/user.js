/**
 * Created by user on 2018/1/8.
 */
import {ERR_OK} from './config'
import axios from 'axios'
/**
 * 发送验证码
 * @returns {Promise.<*>}
 */
export function getPhoneCode(data) {
  const url = `/api/info/send-message`
  // const parmas = Object.assign({}, commonParams, data)
  return axios.post(url, data
  ).then((res) => {
    return Promise.resolve(res.data)
  })
}
/**
 * 修改手机号码
 * @returns {Promise.<*>}
 */
export function bindPhone(data) {
  const url = `/api/info/valida-message`
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
