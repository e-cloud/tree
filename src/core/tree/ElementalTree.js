import Tree from './Tree'
import * as util from '../../util'

function checkElement(element) {
    if (!element) {
        throw Error(`Null Element: ${element}`)
    }
}

class ElementalTree extends Tree {
    /**
     *
     * @param element
     * @param {TreeSetting|Object} userSetting
     * @param {Array<Object>} dataNodes
     * @param {Boolean} [skipDataClone]
     */
    constructor(element, userSetting, dataNodes, skipDataClone) {
        checkElement(element)
        super(element.attr('id'), userSetting, dataNodes, skipDataClone)
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

    initData(dataNode, skipClone) {
        this.data = skipClone ? dataNode : _.cloneDeep(dataNode)
        return this
    }

    transformNodes() {}

    bindEvents() {}

    unbindEvents() {}

    bindTree() {}

    unbindTree() {}

    getSetting() {}

    canAsync() {}

    asyncNode() {}

    reAsyncNode() {}

    apply() {}

    getName() {
        return this.name
    }

    getTitle() {
        return this.title
    }
}

export default ElementalTree

