// 封装本地的一些操作
// 本地存储
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof (value) === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
// 获取本地存储
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 单个删除本地
export const removeItem = (key) => {
  localStorage.removeItem(key)
}
// 删除所有本地
export const removeAlltem = () => {
  localStorage.clear()
}
