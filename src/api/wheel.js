import {ERR_OK} from './config'
import http from '../common/js/http'

/**
 * 获取大转盘详情
 * @returns {Promise.<TResult>}
 */
export function getWheelDetail() {
  const url = `/api/activity/lucky/detail`
  return http.get(url).then((res) => {
    console.log(res)
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}

/**
 * 获取中奖用户列表
 * @param id 活动id
 * @returns {Promise.<TResult>}
 */
export function getLuckyUsers(id) {
  const url = `/api/activity/lucky/lucky-users/${id}`
  return http.get(url).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}

/**
 * 获取用户的抽奖次数
 * @param params {activity_id: id}
 * @returns {Promise.<TResult>}
 */
export function getLuckyNum(params) {
  const url = '/api/activity/lucky/num'
  return http.get(url, {params}).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}

/**
 * 抽奖
 * @param params
 * @returns {Promise.<TResult>}
 */
export function doLucky(params) {
  const url = '/api/activity/lucky/do-lucky'
  return http.get(url, {params}).then((res) => {
    return Promise.resolve(res)
  })
}
