import http from 'common/js/http'

/**
 * 智店越权
 * @returns {Promise.<TResult>}
 */
export function zdAiUltra(data) {
  const url = `/get_token_test`
  return http.post(url, data)
}
