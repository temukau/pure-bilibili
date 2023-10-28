export const Object = {

    resetObject<T>(obj: T) {
        Object.keys(obj).forEach(key => {
            switch (typeof obj[key]) {
                case 'string':
                    obj[key] = ''
                    break
                case 'number':
                    obj[key] = 0
                    break
                case 'boolean':
                    obj[key] = false
                    break
                case 'object':
                    obj[key] = null
                    break
                case 'function':
                    obj[key] = null
                    break
                default:
                    obj[key] = undefined
                    break
            }
        })
    }

}