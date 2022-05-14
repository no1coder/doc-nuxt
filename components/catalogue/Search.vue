<template>
<div class="container m-auto">
    <div class="h-16 flex justify-between items-center ">
        <div class="h-8 w-1/3 flex items-center">
            <div class="mr-4 cursor-pointer">目录</div>
            <div class="mr-1 cursor-pointer">暂存箱</div>
            <div class="ml-1">  
                <n-popover trigger="hover" class="bg-black " :style="{ backgroundColor:'black' }">
                    <template #trigger class="bg-black">
                        <img class="h-4 w-4 cursor-pointer" src="../../assets/images/问号.svg" alt="">
                    </template>
                    <span class="text-white">仅成员所见,存放不在目录上的文档</span>
                </n-popover> 
            </div>
        </div>
        <div class="w-1/3 h-9 flex justify-end">
			<n-dropdown trigger="click" :options="data"  placement="bottom-end" class="w-36">
				<button class="text-white bg-green-500 w-20 h-full rounded" @click="SubclassCreation('212121')">新建</button>
			</n-dropdown>
        </div>
    </div>
</div>
    
</template>

<script setup lang="ts">
import {h, onMounted} from 'vue'
let props = defineProps({
	ParentClassNew:Function
})
//点击新建按钮
const SubclassCreation = (obj) => {
	props.ParentClassNew(obj)
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