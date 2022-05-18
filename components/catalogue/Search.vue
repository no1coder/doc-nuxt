<template>
	<div class="h-full flex justify-end items-center">
		<div class="w-1/3 h-9 flex justify-end">
			<n-dropdown trigger="click" :options="data"  placement="bottom-end" class="w-36" @select="handleSelect">
				<button class="text-white bg-green-500 w-20 h-full rounded" >新建</button>
			</n-dropdown>
		</div>
		<catalogueNewlyBuild :addValue="addValue" :keys="keys"  v-model:show="showModal"></catalogueNewlyBuild>
	</div>
</template>

<script setup lang="ts">
import {h, onMounted} from 'vue'
const renderImg = (src) => {
	return () => {
		return h('img',{
			src,
			style:'width:15px;height:25px'
		})
	}
}
//点击新建下面的选项
let showModal =  ref(false);
let keys = ref()
const handleSelect =  (key: string | number) => {
	showModal.value = true;
	keys.value = key
}

//获取input表单输入的内容
const addValue = (e) => {
	console.log(e);
}

const data = [
	{
		label: '文档',
		key: '添加文档',
		icon:renderImg('assets/images/文档.svg')
	},
	{
		label: '新建分组',
		key: '新建分组',
		icon:renderImg('assets/images/分组管理.svg')
	},
	{
		label: '添加链接',
		key: '添加链接',
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