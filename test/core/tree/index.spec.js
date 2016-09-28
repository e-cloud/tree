import $ from 'jquery'
import { expect } from 'chai'
import treeModule from '../../../src/TreeModule'
import Tree, { registry as treeRegistry } from '../../../src/core/tree'

describe('Tests for core Tree', function () {
    before('', function () {

    })

    after('', function () {

    })

    beforeEach('', function () {

    })

    afterEach('', function () {

    })

    describe('test registry', function () {
        afterEach(function () {
            treeRegistry.update(Tree)
            $('#tree-test-1').remove()
        })

        it('should export the Tree class', function () {
            const elem = $('<ul id="tree-test-1"></ul>').appendTo('body')

            const treeInstance = treeModule.init(elem, {}, [])

            expect(treeInstance).to.be.an.instanceOf(Tree)
        })

        it('should be able to override the exported constructor', function () {
            const testId = 'abcdefg'

            class TestTree extends treeRegistry.constructor {
                constructor(...args) {
                    super(...args)
                    this.testId = testId
                }
            }

            treeRegistry.update(TestTree)

            const elem = $('<ul id="tree-test-1"></ul>').appendTo('body')

            const treeInstance = treeModule.init(elem, {}, [])

            expect(treeInstance).to.be.an.instanceOf(TestTree)
            expect(treeInstance.testId).to.be.equal(testId)
        })

        it('should throw error when updating constructor via direct assignment', function () {
            function test() {
                treeRegistry.constructor = Tree
            }

            expect(test).to.throw(Error)
        })
    })
})
