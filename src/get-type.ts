const toString = Object.prototype.toString

// [object Object]
const getType = (value: any): string => {
    return toString.call(value).replace(/^\[object /, '').replace(/\]$/, '').toLowerCase()
    // return toString.call(value).replace(/(\[|\])/g, '').split(' ')[1].toLowerCase()
}

export default getType