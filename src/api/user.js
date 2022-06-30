import request from '../utils/request'

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'post', data })
}
/**
 * 用户的接口
 */
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'get' })
}
export default {
  login,
  getUserInfo
}
