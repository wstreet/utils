const toString = Object.prototype.toString

const isType = (value: any, type: string): boolean => {
    return toString.call(value) === `[object ${type}]`
}

export default isType