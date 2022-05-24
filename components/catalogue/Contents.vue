<template>
   <div class="mb-3 border rounded-md">
        <div class="h-full bg-white rounded-md" >
			<div class="h-full auto-h">
                <n-tree
					block-line
					cascade
    				checkable
                    draggable
					:data="Obj"
					key-field="id"
					label-field="title"
                    :render-label="renderLabel"
					:render-suffix="renderSuffix"
					:checked-keys="checkedKeys"
					:expanded-keys="expandedKeys"
					@drop="handleDrop"
					@update:checked-keys="handleCheckedKeysChange"
					@update:expanded-keys="handleExpandedKeysChange"
					selectable
				/>
            </div>
        </div>
   </div>
</template>

<script setup lang="ts">
import { TreeOption, TreeDropInfo } from 'naive-ui'
//修改框
import Cinput from './CInput'
//右边按钮内容
import Add from './Add.vue'
interface Props {
	Obj:TreeOption[]
}
let {Obj}  = defineProps<Props>()

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
						Clone(Obj,item);
					}
				}
			): h(
				'button',{'innerHTML':option.title}
			)
		]
	)
}

//清除input表单
const Clone = (dataTree,item) => {
	for (let i = 0; i  < dataTree.length; i++){
		if(dataTree[i].key == item.key){
			dataTree[i].input = false
		}else{
			if (dataTree[i].children.length >0){
				Clone(dataTree[i].children,item)
			}
		}
	}
}

//右边按钮
function renderSuffix ({ option }: { option: TreeOption }) {
	return h(
		Add,{
			option
		}

	)
}

// 节点展开
const expandedKeysRef = ref<string[]>([])
const expandedKeys =  expandedKeysRef;
const  handleExpandedKeysChange =  (expandedKeys: string[]) => {
	expandedKeysRef.value = expandedKeys
};
//节点选中
const checkedKeysRef = ref<string[]>([])
const checkedKeys = checkedKeysRef;
const  handleCheckedKeysChange = (checkedKeys: string[])  =>{
	checkedKeysRef.value = checkedKeys
};

//拖拽事件
const dataRef = ref(Obj)
const data =  dataRef;
const  handleDrop = ({ node, dragNode, dropPosition }: TreeDropInfo) => {
	//拖拽到谁里面
	if(dropPosition === 'inside'){
		//把父类id给到拖拽数据上面
		dragNode.parent_id = node.id
	}else if(dropPosition === 'before'){
		// if()
		if(node.parent_id === dragNode.parent_id){
			console.log('我们父类id一样')
			//拖拽到谁下面
			console.log('我是拖拽到谁下面',node)
			//拖拽的数据
			console.log('我是被拖拽的数据',dragNode)
			//拖拽方式
			console.log('我是拖拽的方式',dropPosition)
		}else{
			console.log('我们父类id不一样')
		}
		//往谁下面第一个拖拽
		
	}else if(dropPosition === 'after'){
		// dragNode.parent_id = node.parent_id
		// //node.seq加一等于拖拽的seq
		// console.log(node.seq + 1);
		// // node.seq.push(dragNode.seq)
		// console.log('拖拽在谁下面')
		// console.log(typeof node,11111111)
		// console.log('拖拽的是谁')
		// console.log(dragNode,2222222222)
		// console.log(dropPosition,3333333)
	}
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