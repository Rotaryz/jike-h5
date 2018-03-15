import {ERR_OK} from './config'
import axios from 'axios'

/**
 * 获取大转盘详情
 * @returns {Promise.<TResult>}
 */
export function getWheelDetail() {
  const url = `/api/activity/lucky/detail`
  return axios.get(url).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
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
  return axios.get(url).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
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
  return axios.get(url, {params}).then((res) => {
    if (res.data.error === ERR_OK) {
      return Promise.resolve(res.data.data)
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
  return axios.get(url, {params}).then((res) => {
    return Promise.resolve(res.data)
  })
}
