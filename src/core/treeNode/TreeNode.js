class TreeNode {
    constructor(tree, dataNode, parentNode) {
        this.level = parentNode.level + 1

        // tId is a string made of treeId and incremental zId()
        this.tId = `${tree.id}_${tree.getRoot().generateNodeId()}`
        this.parentTId = parentNode.tId

        this.parentNode = parentNode
        this.data = dataNode
    }

    getParentNode() {
        return this.parentNode
    }

    getPrevNode() {}

    getNextNode() {}

    getIndex() {}

    getPath() {}

    getName() {}

    getTitle() {}

    isFirstChild() {}

    isLastChild() {}

    setFirstChild() {}

    setLastChild() {}

    getFirstChild() {}

    getLastChild() {}

    removeChildNode() {}

    removeChildrenNodes() {}

    destroy() {}
}

export default TreeNode


