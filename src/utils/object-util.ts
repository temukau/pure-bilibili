type ValueTypes = string | number | boolean | object | null | undefined | Function

export const ObjectUtil = {
  resetObject<T extends Record<string, ValueTypes>>(obj: T) {
    for (const key of Object.keys(obj) as (keyof T)[]) {
      obj[key] = getDefaultValue(obj[key]) as T[keyof T]
    }
  }
}

function getDefaultValue(value: ValueTypes): ValueTypes {
  switch (typeof value) {
    case 'string':
      return ''
    case 'number':
      return 0
    case 'boolean':
      return false
    case 'object':
    case 'function':
      return null
    default:
      return undefined
  }
}
