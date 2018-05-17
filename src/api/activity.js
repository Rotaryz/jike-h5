import {ERR_OK} from './config'
import http from '../common/js/http'

/**
 * 获取大转盘详情
 * @returns {Promise.<TResult>}
 */
export function getActivity() {
  let params = {
    employee_id: localStorage.getItem('employeeId'),
    useType: localStorage.getItem('useType')
  }
  const url = `/api/merchants/activity-alliance/${localStorage.getItem('id')}`
  return http.get(url, params).then((res) => {
    if (res.error === ERR_OK) {
      return Promise.resolve(res.data)
    }
  })
}
