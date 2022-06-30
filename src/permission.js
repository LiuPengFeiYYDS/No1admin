import router from './router'
import store from './store'

/**
 * 填写白名单
 */
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  const userInfo = store.getters.userInfo
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
      if (userInfo) {
        next()
      } else {
        // 调用获取信息接口
        const response = await store.dispatch('user/getUserInfo')
        if (response) {
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
