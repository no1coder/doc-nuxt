<template>
	<div class="h-full auto-h">
		<n-tree
			class="one"
			block-line
			checkable
			cascade
			draggable
			:data="data"
			:default-expand-all="true"
			:render-label="renderLabel"
			:render-suffix="renderSuffix"
			:checked-keys="checkedKeys"
			:expanded-keys="expandedKeys"

			@drop="handleDrop"
			@update:checked-keys="handleCheckedKeysChange"
			@update:expanded-keys="handleExpandedKeysChange"
		/>
	</div>
	
</template>

<script lang="ts" setup>
import { TreeOption, TreeDropInfo } from 'naive-ui'
import Cinput from './CInput'

const items= [
	{
		label: '0',
		key: '0',
		input:false,
		children: [
			{
				label: '0-0',
				key: '0-0',
				input:false,
				children: [
					{ label: '0-0-0', key: '0-0-0',		input:false,
					},
					{ label: '0-0-1', key: '0-0-1',		input:false,
					}
				]
			},
			{
				label: '0-1',
				key: '0-1',
				input:false,
				children: [
					{ label: '0-1-0', key: '0-1-0',		input:false,
					},
					{ label: '0-1-1', key: '0-1-1',		input:false,
					}
				]
			}
		]
	},
	{
		label: '1',
		key: '1',
		input:false,
		children: [
			{
				label: '1-0',
				key: '1-0',
				input:false,
				children: [
					{ label: '1-0-0', key: '1-0-0',		input:false,
					},
					{ label: '1-0-1', key: '1-0-1',		input:false,
					}
				]
			},
			{
				label: '1-1',
				key: '1-1',
				input:false,
				children: [
					{ label: '1-1-0', key: '1-1-0',		input:false,
					},
					{ label: '1-1-1', key: '1-1-1',		input:false,
					}
				]
			}
		]
	}
]

//拖拽事件
const findSiblingsAndIndex  = (
	node: TreeOption,
	nodes?: TreeOption[]
): [TreeOption[], number] | [null, null] => {
	if (!nodes) return [null, null]
	for (let i = 0; i < nodes.length; ++i) {
		const siblingNode = nodes[i]
		if (siblingNode.key === node.key) return [nodes, i]
		const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
		if (siblings && index !== null) return [siblings, index]
	}
	return [null, null]
};

function renderLabel ({ option }: { option: TreeOption }) {
	return h(
		'div',
		{
			onClick(event){
				option.input = true;
			},
		},
		[
			option.input ? h(
				Cinput,{
					option,
					CloseInput (item) {
						Clone(data,item);
					}
				}
			): h(
				'button',{'innerHTML':option.label}
			)
		]
	)
}
const Clone = (dataTree,item) => {
	console.log(dataTree)
	for (let i = 0; i  < dataTree.length; i++){
		if(dataTree[i].key == item.key){
			console.log(dataTree[i])
			console.log(111111111111111111)
			dataTree[i].input = false
			console.log(dataTree)
		}else{
			if (dataTree[i].children.length >o){
				Clone(dataTree[i].children,item)
			}
		}
	}
}

const getDataIndex = (key) => {

}

function renderSuffix ({ option }: { option: TreeOption }) {
	return h(
		'span',
		{ innerHTML:'05-7 : 20:20' }
	)
}

const expandedKeysRef = ref<string[]>([])
const checkedKeysRef = ref<string[]>([])
const dataRef = ref(items || [])

const expandedKeys = expandedKeysRef;
const checkedKeys = checkedKeysRef;
const data = dataRef;

const handleExpandedKeysChange =   (expandedKeys: string[]) => {
	expandedKeysRef.value = expandedKeys
};
const handleCheckedKeysChange =  (checkedKeys: string[]) => {
	checkedKeysRef.value = checkedKeys
};

const handleDrop = ({ node, dragNode, dropPosition }: TreeDropInfo)  => {
		const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
			dragNode,
			dataRef.value
		)
		if (dragNodeSiblings === null || dragNodeIndex === null) return
		dragNodeSiblings.splice(dragNodeIndex, 1)
		if (dropPosition === 'inside') {
			if (node.children) {
				node.children.unshift(dragNode)
			} else {
				node.children = [dragNode]
			}
		} else if (dropPosition === 'before') {
			const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
				node,
				dataRef.value
			)
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


</script>
<style  lang="less">
.auto-h {
	min-height: calc(100vh - 234px);
}
.n-tree-node-wrapper{
	height: 40px;
}
.n-tree-node {
	height: 100%;
	padding-top: 7px;
	font-size: 14px;
}
</style>