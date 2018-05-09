/**
 * Created by user on 2017/12/11.
 */
import {ERR_OK} from './config'
import http from '../common/js/http'

/**
 * 签到红包--状态
 * @returns {Promise.<TResult>}
 */
export function getRegistration() {
  const url = `/api/activity/sign/info`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
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
  // const parmas = Object.assign({}, commonParams, data)
  return http.post(url, data
  ).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    } else {
      return Promise.resolve(res.data)
    }
  })
}

/**
 * 签到提醒
 * @returns {Promise.<TResult>}
 */
export function remind(data) {
  const url = `/api/activity/sign/openpush`
  return http.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/**
 * 领取红包
 * @returns {Promise.<TResult>}
 */
export function drawPacket(data) {
  const url = `/api/activity/sign/drawPacket`
  const parmas = Object.assign({}, data)
  return http.post(url, parmas
  ).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    }
  })
}

/**
 * 获取中奖用户列表接口地
 * @param data
 * @returns {Promise.<TResult>}
 */
export function signLists(data) {
  const url = `/api/activity/sign`
  return http.get(url, {
    params: data
  }).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data.data)
    }
  })
}
