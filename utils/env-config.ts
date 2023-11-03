/**
 * 获取请求baseUrl
 */

export function getBaseUrl() {
  if (process.server) {
    return 'http://localhost:4000/api/'
  }
  return '/api/'
}
