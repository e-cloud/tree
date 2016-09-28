class ClassRegistry {
    constructor(originConstructor) {
        let overridableConstructor = originConstructor

        function registerConstructor(newConstructor) {
            overridableConstructor = newConstructor
        }

        this.update = registerConstructor

        Object.defineProperty(this, 'constructor', {
            get() {
                return overridableConstructor
            },
            set() {
                throw Error(`Directly updating ${overridableConstructor.name}'s constructor is not allowed!`)
            }
        })
    }
}

export default ClassRegistry
