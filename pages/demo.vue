<template>
  <n-tree
    block-line
    checkable
    draggable
    :data="data"
    :checked-keys="checkedKeys"
    :expanded-keys="expandedKeys"
    @drop="handleDrop"
    @update:checked-keys="handleCheckedKeysChange"
    @update:expanded-keys="handleExpandedKeysChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { repeat } from 'seemly'
import { TreeOption, TreeDropInfo } from 'naive-ui'

const datas: TreeOption[] = [
  {
    label: '0',
    key: '0',
    children: [
      {
        label: '0-0',
        key: '0-0',
        children: [
          { label: '0-0-0', key: '0-0-0' },
          { label: '0-0-1', key: '0-0-1' }
        ]
      },
      {
        label: '0-1',
        key: '0-1',
        children: [
          { label: '0-0-0', key: '0-0-0' },
          { label: '0-0-1', key: '0-0-1' }
        ]
      }
    ]
  },
  {
    label: '1',
    key: '1',
    children: [
      {
        label: '1-0',
        key: '1-0',
        children: [
          { label: '1-0-0', key: '1-0-0' },
          { label: '1-0-1', key: '1-0-1' }
        ]
      },
      {
        label: '1-1',
        key: '1-1',
        children: [
          { label: '1-1-0', key: '1-1-0' },
          { label: '1-1-1', key: '1-1-1' }
        ]
      }
    ]
  }
]
function findSiblingsAndIndex (node: TreeOption,nodes?: TreeOption[]): [TreeOption[], number] | [null, null] {
  if (!nodes) return [null, null]
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]
    if (siblingNode.key === node.key) return [nodes, i]
    const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
    if (siblings && index !== null) return [siblings, index]
  }
  return [null, null]
}

export default defineComponent({
  setup () {
    const expandedKeysRef = ref<string[]>([])
    const checkedKeysRef = ref<string[]>([])
    const dataRef = ref(datas || [])

    return {
      data: dataRef,
      expandedKeys: expandedKeysRef,
      checkedKeys: checkedKeysRef,
      handleExpandedKeysChange (expandedKeys: string[]) {
        expandedKeysRef.value = expandedKeys
      },
      handleCheckedKeysChange (checkedKeys: string[]) {
        checkedKeysRef.value = checkedKeys
      },
      handleDrop ({ node, dragNode, dropPosition }: TreeDropInfo) {
          //拖拽到谁下面
          console.log('我是拖拽到谁下面',node)
          //拖拽的数据
          console.log('我是被拖拽的数据',dragNode)
          //拖拽方式
          console.log('我是拖拽的方式',dropPosition)
        const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(dragNode,dataRef.value)
        if (dragNodeSiblings === null || dragNodeIndex === null) return
        dragNodeSiblings.splice(dragNodeIndex, 1)
        if (dropPosition === 'inside') {
          if (node.children) {
            node.children.unshift(dragNode)
          } else {
            node.children = [dragNode]
          }
        } else if (dropPosition === 'before') {
          const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node,dataRef.value)
          console.log(nodeIndex,11111111)
          if (nodeSiblings === null || nodeIndex === null) return
          nodeSiblings.splice(nodeIndex, 0, dragNode)
        } else if (dropPosition === 'after') {
          const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
            node,
            dataRef.value
          )
          if (nodeSiblings === null || nodeIndex === null) return
          nodeSiblings.splice(nodeIndex + 1, 0, dragNode)
        }
        dataRef.value = Array.from(dataRef.value)
      }
    }
  }
})
</script>