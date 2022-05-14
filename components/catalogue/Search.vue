<template>
<div class="container m-auto">
    <div class="h-16 flex justify-end items-center ">
        <div class="w-1/3 h-9 flex justify-end">
			<n-dropdown trigger="click" :options="data"  placement="bottom-end" class="w-36" @select="SubclassCreation" >
				<button class="text-white bg-green-500 w-20 h-full rounded">新建</button>

			</n-dropdown>
			<CatalogueNewlyBuild :showModal="showModal"/>
        </div>
    </div>
</div>
    
</template>

<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
// let props = defineProps({
// 	ParentClassNew:Function
// })


let showModal =  ref(false);

// showModal.value = true
//点击新建按钮
const SubclassCreation = (key: string | number) => {
	// show(key)
	showModal.value = true
	console.log(111111111)
}

const renderImg = (src) => {
	return () => {
		return h('img',{
			src,
			style:'width:15px;height:25px'
		})
	}
}

const data = [
	{
		label: '文档',
		key: 'file',
		icon:renderImg('assets/images/文档.svg')
	},
	{
		label: '新建分组',
		key: 'New group',
		icon:renderImg('assets/images/分组管理.svg')
	},
	{
		label: '添加链接',
		key: 'Add link',
		icon:renderImg('assets/images/链接.svg')
	},
];


</script>

<style lang="less" scoped>
.search{
    background: url('../../assets/images/search.svg') no-repeat 12px 9px;
    background-size: 20px 20px;
}
</style>