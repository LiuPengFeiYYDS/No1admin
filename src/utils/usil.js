// 创建深拷贝封装
const checkDatatype = (data) => {
  // 检测数据类型
  const dataType = Object.prototype.toString.call(data)
  const DetectionOftype = {
    '[object Object]': 'object',
    '[object String]': 'string',
    '[object Null]': 'null',
    '[object Function]': 'function',
    '[object Boolean]': 'boolean',
    '[object Array]': 'array',
    '[object Data]': 'data',
    '[object RegExp]': 'RegExp',
    '[object Number]': 'number',
    '[object Undefined]': 'undefined'
  }
  return DetectionOftype[dataType]
}
// 深拷贝
const deepCopy = (data) => {
  const type = checkDatatype(data)
  let params = null
  if (type === 'array') {
    params = []
    for (let i = 0; i < data.length; i++) {
      params.push(deepCopy(data[i]))
    }
  } else if (type === 'object') {
    params = {}
    for (const i in data) {
      params[i] = deepCopy(data[i])
    }
  } else {
    return data
  }
  return params
}

export default {
  deepCopy
}
