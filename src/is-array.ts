import isType from './is-type'

const isArray = (value: any): boolean => {
    return Array.isArray ? Array.isArray(value) : isType(value, 'Array')
}


export default isArray