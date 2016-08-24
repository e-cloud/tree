import _ from 'lodash'

export function cloneDeep(target) {
    return _.cloneDeep(target)
}

export function extend(source, ...args) {
    return _.assign(source, ...args)
}

export function eql() {

}

export function transformToArrayFormat() {}

export function transformToTreeFormat() {}

export function traverseTreePostOrder(rootNode, visitor) {

}

export function traverseTreePreOrder(rootNode, visitor) {

}
