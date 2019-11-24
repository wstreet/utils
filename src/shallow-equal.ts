// https://www.imweb.io/topic/598973c2c72aa8db35d2e291

const hasOwn = Object.prototype.hasOwnProperty

const shallowEqual = (value1: any, value2): boolean => {
  // 判断基本类型， 如果不相等，有可能是object
  if (Object.is(value1, value2)) return true

  // 逃脱掉基本类型判断，如果还不是object，那就不相等
  if (typeof value1 !== 'object' || typeof value2 !== 'object') {
    return false
  }


  // 判断object类型
  const keysA = Object.keys(value1)
  const keysB = Object.keys(value2)

  // 如果key值数量不相等，直接false
  if (keysA.length !== keysB.length) {
    return false
  }

  for (let i = 0, lenA = keysA.length; i < lenA; i++) {

    if (
      !hasOwn.call(value2, keysA[i])
      || !Object.is(value1[i], value2[i])
    ) {
      return false
    }
  }

  return true


}

export default shallowEqual