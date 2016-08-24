class ClassRegistry {
    constructor(originConstructor) {
        let overridableConstructor = originConstructor

        function registerConstructor(newConstructor) {
            overridableConstructor = newConstructor
        }

        this.update = registerConstructor

        Object.defineProperty(this, 'constructor', {
            get: function () {
                return overridableConstructor
            },
            set: function (val) {
                throw Error(`Directly updating ${overridableConstructor.name}'s constructor is not allowed!`)
            }
        })
    }
}

export default ClassRegistry
