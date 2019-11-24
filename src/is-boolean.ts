import isType from './is-type'

const isBoolean = (value: any): boolean => {
    return isType(value, 'Boolean')
}

export default isBoolean