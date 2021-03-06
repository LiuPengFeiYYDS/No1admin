// 导入axios
import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
import { ElMessage } from 'element-plus'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 打开loading加载
    loading.open()

    // 调用接口要传的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    // TODO 将token 通过请求头发送给后台
    return config
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 关闭loading加载
    loading.close()
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      _showError(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    _showError(error.message)
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)
// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}
// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 导出axios实例对象
export default request
