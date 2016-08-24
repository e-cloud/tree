import {extend} from './util'
import defaultSetting from './core/setting'
import {registry as TreeRegistry} from './core/tree'

const treeCache = {};

export default {
    /**
     * factory for creating an Tree instance
     * @param {jQuery} element
     * @param {TreeSetting|Object} userSetting
     * @param {Array<Object>} dataNodes
     * @param {Boolean} [skipDataClone]
     */
    init(element, userSetting, dataNodes, skipDataClone) {
        const TreeClass = TreeRegistry.constructor
        const treeInstance = new TreeClass(element, userSetting, dataNodes, skipDataClone)
        treeCache[treeInstance.id] = treeInstance
        return treeInstance
    },

    destroy(treeId) {
        treeCache[treeId] && treeCache[treeId].destroy()
    },

    getTreeInstance(treeId) {
        return treeCache[treeId]
    }
}


/* ========================================================
 * extend util
 * ======================================================== */

export function addBindOnInit() {

}

export function addUnBindOnInit() {

}

export function addCacheOnInit() {

}

export function extendDefaultSetting(...args) {
    return extend(defaultSetting, ...args)
}

