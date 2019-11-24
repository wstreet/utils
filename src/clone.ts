import isArray from './is-array'

const clone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let rst
  if (isArray(obj)) {
    rst = []
    for (let i = 0, len = obj.length; i < len; i++) {
      const iItem = obj[i]
      if (typeof iItem === 'object' && iItem !== null) {
        rst[i] = clone(iItem)
      } else {
        rst[i] = iItem
      }
    }
  } else {
    rst = {}
    for (const key in obj) {
      const iItem = obj[key]
      if (typeof iItem === 'object' && iItem !== null) {
        rst[key] = clone(iItem)
      } else {
        rst[key] = iItem
      }
    }
  }
}