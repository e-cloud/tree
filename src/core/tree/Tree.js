import * as _ from 'lodash'
import * as util from '../../util'
import defaultSetting from '../setting'

function checkData(data) {
    if (!(
        (_.isObject(data) && data !== null)
        || Array.isArray(data)
      )) {
        throw Error(`Null Data: ${data}`)
    }
}

class Tree {
    /**
     *
     * @param id
     * @param {TreeSetting|Object} userSetting
     * @param {Array<Object>} dataNodes
     * @param {Boolean} [skipDataClone]
     */
    constructor(id, userSetting = {}, dataNodes, skipDataClone = false) {
        checkData(dataNodes)

        this.setting = util.extend(defaultSetting, util.cloneDeep(userSetting))

        this.id = id
    }

    initRoot() {}

    addNodes() {}

    insertNode() {}

    createNodes() {}

    getRoot() {}

    getPathToRoot() {}

    getChild(parent, index) {}

    getChildCount(parent) {}

    getNodes() {}

    getTreeId() {}

    getNodeIndex(parent, child) {}

    removeChild(node) {}

    isLeaf(node) {

    }

    reload() {}

    destroy() {}

    updateNode(node) {}
}

export default Tree

