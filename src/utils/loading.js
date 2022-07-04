// 引入loading
import { ElLoading } from 'element-plus'

// loading加载处理
const loading = {
  loadingInstance: null,
  // 开始的加载
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: '.app-main',
        fullscreen: false,
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  // 关闭的时候
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
// 显示出去
export default loading
