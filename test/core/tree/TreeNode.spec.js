/* eslint no-unused-expressions:0 */
import { expect } from 'chai'
import * as _ from 'lodash'
import TreeNode from '../../../src/core/treeNode/TreeNode'

describe('Tests for core TreeNode', function () {
    const testParentId = 'tree_test_id_0'
    const testChildId = 'tree_test_id_1'
    const fakeRootNode = initATestNode('tree_test_id_-1')
    fakeRootNode.level = -1

    const frozenFakeRootNode = Object.freeze(_.cloneDeep(fakeRootNode))

    function initATestNode(id = testChildId) {
        return new TreeNode(id)
    }

    function initATestParentNode(id = testParentId) {
        const parent = new TreeNode(id)
        parent.setParent(frozenFakeRootNode)
        parent.setAsParent()
        return parent
    }

    describe('instance initiating', function () {
        it('should create a correct instance of TreeNode', function () {
            const node = new TreeNode(testChildId)

            expect(node).to.eql({
                tId: testChildId,
                children: null,
                parent: null,
                isFirst: false,
                isLast: false
            })
        })
    })

    describe('simple node manipulation', function () {
        it('should set tId correctly', function () {
            const node = initATestNode()

            node.setTId('hello_world')

            expect(node.tId).to.equal('hello_world')
        })

        it('should clone itself', function () {
            const node = initATestNode()
            expect(node.clone()).to.eql(node)
        })
    })

    describe('node relationship', function () {
        it('should set/get the parent correctly', function () {
            const node1 = initATestParentNode()
            const node2 = initATestNode(testChildId + 1)
            node2.setParent(node1)

            expect(node2.getParent()).to.equal(node1)

            function setNullParent(data) {
                node2.setParent(data)
            }

            expect(setNullParent.bind(null, null)).to.throw(Error)
            expect(setNullParent.bind(null, undefined)).to.throw(Error)
            expect(setNullParent.bind(null, '')).to.throw(Error)
            expect(setNullParent.bind(null, 0)).to.throw(Error)
            expect(setNullParent.bind(null, {})).to.throw(Error)
            expect(setNullParent.bind(null, new Date())).to.throw(Error)
        })

        it('should get node\'s level', function () {
            const node = initATestNode()
            node.setParent(frozenFakeRootNode)
            expect(node.getLevel()).to.equal(0)
        })

        it('should be turned into a parent node', function () {
            const node = initATestNode()

            node.setAsParent()

            expect(node.isLeaf()).to.be.false
        })

        it('should be turned into a leaf node', function () {
            const node = initATestNode()

            node.setAsParent()

            node.setAsLeaf()

            expect(node.isLeaf()).to.be.true
        })

        it('should add the child and get the children correctly', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            expect(parent.getChildren()).to.eql([child])

            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child2, child3)

            expect(parent.getChildren()).to.eql([child, child2, child3])
        })

        it('should set the child first/last state when adding children', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            expect(child.isFirstChild()).to.be.true
            expect(child.isLastChild()).to.be.true

            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child2, child3)

            expect(child.isFirstChild()).to.be.true
            expect(child.isLastChild()).to.be.false
            expect(child2.isFirstChild()).to.be.false
            expect(child2.isLastChild()).to.be.false
            expect(child3.isFirstChild()).to.be.false
            expect(child3.isLastChild()).to.be.true
        })

        it('should find the child with target index', function () {
            const parent = initATestParentNode()

            const child1 = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child1, child2, child3)

            expect(parent.getChildAt(0)).to.equal(child1)
            expect(parent.getChildAt(2)).to.equal(child3)
            expect(parent.getChildAt(4)).to.be.undefined
        })

        it('should get the child index', function () {
            const parent = initATestParentNode()

            const child1 = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child1, child2, child3)

            expect(parent.getChildIndex(child1)).to.equal(0)
            expect(parent.getChildIndex(child3)).to.equal(2)
            expect(parent.getChildIndex(parent)).to.equal(-1)
        })

        it('should has proper sibling node', function () {
            const parent = initATestParentNode()

            const child1 = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            parent.addChild(child1, child2)

            expect(child2.getPrevSibling()).to.equal(child1)
            expect(child1.getNextSibling()).to.equal(child2)

            expect(child1.getPrevSibling()).to.be.null
            expect(child2.getNextSibling()).to.be.null
        })

        it('should calculate the path to the root', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            expect(child.getPath()).to.eql([frozenFakeRootNode, parent, child])
        })

        it('should get the correct first/last child', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            expect(parent.getFirstChild()).to.eql(child)
            expect(parent.getLastChild()).to.eql(child)

            const child2 = initATestNode(testChildId + 2)
            parent.addChild(child2)

            expect(parent.getFirstChild()).to.eql(child)
            expect(parent.getLastChild()).to.eql(child2)
        })

        it('should insert child nodes correctly', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            const child2 = initATestNode(testChildId + 2)
            parent.insertChild(0, child2)

            expect(parent.getFirstChild()).to.eql(child2)
            expect(parent.getLastChild()).to.eql(child)

            expect(child2.isFirstChild()).to.be.true
            expect(child2.isLastChild()).to.be.false
            expect(child.isFirstChild()).to.be.false
            expect(child.isLastChild()).to.be.true

            const child3 = initATestNode(testChildId + 3)

            parent.insertChild(2, child3)

            expect(child2.isFirstChild()).to.be.true
            expect(child2.isLastChild()).to.be.false
            expect(child.isFirstChild()).to.be.false
            expect(child.isLastChild()).to.be.false
            expect(child3.isFirstChild()).to.be.false
            expect(child3.isLastChild()).to.be.true

            const child4 = initATestNode(testChildId + 4)
            const child5 = initATestNode(testChildId + 5)
            parent.insertChild(2, child4, child5)

            expect(child2.isFirstChild()).to.be.true
            expect(child2.isLastChild()).to.be.false
            expect(child3.isFirstChild()).to.be.false
            expect(child3.isLastChild()).to.be.true
        })

        it('should remove target child nodes', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child, child2, child3)

            parent.removeChild(child)

            expect(parent.getChildren()).to.eql([child2, child3])

            expect(child2.isFirstChild()).to.be.true
            expect(child2.isLastChild()).to.be.false
            expect(child3.isFirstChild()).to.be.false
            expect(child3.isLastChild()).to.be.true

            parent.removeChild(child2)

            expect(child3.isFirstChild()).to.be.true
            expect(child3.isLastChild()).to.be.true

            const child4 = initATestNode(testChildId + 4)
            parent.addChild(child4)

            parent.removeChild(child4)
            expect(child3.isFirstChild()).to.be.true
            expect(child3.isLastChild()).to.be.true
        })

        it('should remove the child nodes with target index', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child, child2, child3)

            parent.removeChildAt(0)

            expect(parent.getChildren()).to.eql([child2, child3])

            expect(child2.isFirstChild()).to.be.true
            expect(child2.isLastChild()).to.be.false
            expect(child3.isFirstChild()).to.be.false
            expect(child3.isLastChild()).to.be.true

            parent.removeChildAt(0)

            expect(child3.isFirstChild()).to.be.true
            expect(child3.isLastChild()).to.be.true
        })

        it('should remove all the children', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            const child2 = initATestNode(testChildId + 2)
            const child3 = initATestNode(testChildId + 3)
            parent.addChild(child, child2, child3)

            parent.removeAllChildren()

            expect(parent.getChildren()).to.eql([])
        })

        it('should self-remove successfully', function () {
            const parent = initATestParentNode()

            const child = initATestNode(testChildId + 1)
            parent.addChild(child)

            child.remove()

            expect(parent.getChildren()).to.eql([])
        })

        it('should destroy the node', function () {
            const grandpa = initATestParentNode('grandpa')
            const parent = initATestParentNode('father')
            const node = initATestNode('son')

            grandpa.addChild(parent)
            parent.addChild(node)

            parent.destroy()

            expect(parent.getChildren()).to.eql([])
            expect(parent.getParent()).to.be.null
        })
    })
})
