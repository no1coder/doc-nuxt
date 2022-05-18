<template>
    <div class="mb-3 border rounded-md">
        <div class="h-full bg-white rounded-md" >
<!--			<CatalogueTree :item="item"></CatalogueTree>-->
<!--				<div>{{item}}</div>-->
	
			<div class="h-full auto-h">
				<n-tree
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
					@mouseover="mouseOver"
					@mouseleave="mouseLeave"
					@update:checked-keys="handleCheckedKeysChange"
					@update:expanded-keys="handleExpandedKeysChange"
				/>
			</div>
			
			
			
			
			
			
			
			
			
			
        </div>
		<div>{{Props.Obj}}</div>
    </div>
</template>








<script lang="ts" setup>
import { TreeOption, TreeDropInfo } from 'naive-ui'
import Cinput from './CInput'
import Add from './Add.vue'

let Props = defineProps({
	Obj:Object
})

const show = ref(true)
const clickAction = ref(false)
const  mouseOver = () => {
	show.value = false;
}
const mouseLeave = () => {
	if(!clickAction.value) {
		show.value = true;
	}
}
const dropdownShow = (status)=>{
	if(status){
		clickAction.value = true
	}else{
		clickAction.value = false
		show.value = true;
	}
}

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
const findSiblingsAndIndex  = (node: TreeOption,nodes?: TreeOption[]): [TreeOption[], number] | [null, null] => {
	if (!nodes) return [null, null]
	for (let i = 0; i < nodes.length; ++i) {
		const siblingNode = nodes[i]
		if (siblingNode.key === node.key) return [nodes, i]
		const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
		if (siblings && index !== null) return [siblings, index]
	}
	return [null, null]
};

//点击触发input表单
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
//清除input表单
const Clone = (dataTree,item) => {
	for (let i = 0; i  < dataTree.length; i++){
		if(dataTree[i].key == item.key){
			console.log(dataTree[i])
			dataTree[i].input = false
			console.log(dataTree)
		}else{
			if (dataTree[i].children.length >o){
				Clone(dataTree[i].children,item)
			}
		}
	}
}

//时间

function renderSuffix ({ option }: { option: TreeOption }) {
	return h(
		Add,{
			show
		}
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
<style  lang="less" scoped>
.auto-h {
	min-height: calc(100vh - 160px);
	.n-tree--block-line{
		::v-deep .n-tree-node-wrapper{
			height: 45px;
			.n-tree-node {
				display:flex;
				align-items: center;
				height: 100%;
				.n-tree-node-content{
					height:100%;
					.n-tree-node-content__text{
						height: 100%;
						line-height:37px;
						align-items: center;
					}
				}
			}
		}
	}
}


</style>




<!--<style lang="less" scoped>-->

<!--.open{-->
<!--    background: url('~/assets/images/do.svg') no-repeat 0px -2px;-->
<!--    background-size: 18px 18px;-->
<!--}-->
<!--.fold{-->
<!--    background: url('~/assets/images/向右.svg') no-repeat 0px 2px;-->
<!--    background-size: 18px 18px;-->
<!--}-->
<!--.AllOpen {-->
<!--	background: url('~/assets/images/do.svg') no-repeat 62px -2px;-->
<!--	background-size: 18px 18px;-->
<!--}-->
<!--</style>-->