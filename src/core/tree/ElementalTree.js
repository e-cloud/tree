import Tree from './Tree'

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

}

export default ElementalTree

