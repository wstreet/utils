
/**
 *  判断类型
 */

/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */

function isString(value) {
  return typeof value === 'string'
}


/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
function isNumber(value) {
  return typeof value === 'number'
}


/**
 * 
 * @param {*} value
 * @returns {boolean} 
 */
function isBoolean(value) {
  return typeof value === 'boolean'
}

/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
function isNull(value) {
  return value === null

}

/**
 * 
 * @param {*} value
 * @returns {boolean} 
 */
function isUndefined(value) {
  return value === undefined
}


/**
 * 
 * @param {*} value
 * @returns {boolean} 
 */
function isSymbol(value) {
  return typeof value === 'symbol'
}


/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
function isObject(value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}


/**
 * 
 * @param {*} value 
 * @returns {boolean}
 */
function isFunction(value) {
  return typeof value === 'function'
}


// TODO
function isPlainObject() {

}