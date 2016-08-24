import * as util from '../../util'
import defaultSetting from '../setting'
import _ from 'lodash'

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

        this.setting = util.extend(defaultSetting, util.cloneDeep(userSetting));

        this.id = id
    }


    transformData(dataNodes, skipClone) {
        dataNodes = dataNodes ? (skipClone ? util.cloneDeep(dataNodes) : dataNodes) : []

        // ensure the data is tree-like structure
        const treeData = this.setting.data.simpleData.enable ?
          util.transformToTreeFormat(dataNodes, this.setting.data.key) : dataNodes

        util.traverseTreePostOrder(treeData, this.transformNode.bind(this))

        return treeData
    }

    transformNode(rawNode) {

    }

    transformNodes() {}

    initRoot() {}

    bindEvents() {}

    unbindEvents() {}

    bindTree() {}

    unbindTree() {}

    addNodes() {}

    createNodes() {}

    getRoot() {}

    getNodes() {}

    getSetting() {}

    getTreeId() {}

    getNodeIndex() {}

    removeNode() {}

    canAsync() {}

    asyncNode() {}

    reAsyncNode() {}

    destroy() {}

    apply() {}

    updateNode() {}
}

export default Tree

