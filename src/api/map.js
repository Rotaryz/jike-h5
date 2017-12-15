/**
 * Created by user on 2017/12/11.
 */
import {ERR_OK, commonParams} from './config'
import axios from 'axios'

/**
 * 签到红包--状态
 * @returns {Promise.<TResult>}
 */
export function getRegistration() {
  const url = `/api/activity/sign/info`
  return axios.get(url).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    }
  })
}
/**
 * 签到提交
 * @returns {Promise.<TResult>}
 */
export function setSingIn(data) {
  const url = `/api/activity/sign`
  const parmas = Object.assign({}, commonParams, data)
  return axios.post(url, parmas
  ).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    }
  })
}
