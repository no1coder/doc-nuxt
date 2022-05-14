<template>
    <div  class="w-full box-border py-2 "  @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="flex items-center w-full">
			<input type="checkbox" v-model="element" :id="element.name" />c v
			<label :for="name" class="md:max-w-[15%]  h-full pl-[0.5%] truncate" :title="element.name">{{element.name}}</label>
            <span class="md:max-w-[15%] ml-[0.5%]">
                <button class="h-full w-full px-1 box-border border">未发布</button>
            </span>
            <n-divider dashed class="inline-block md:flex-1" />
			
            <div v-if="show" class="md:max-w-[15%] h-full mr-[2%] text-right" >
                {{element.time}}
            </div>
            <div v-else  class="md:max-w-[15%] flex pr-7 h-full items-center">
				<div class="h-[22px] w-6 mx-2" @click.stop="stop">
					<n-dropdown trigger="click"  :options="data" @update:show="dropdownShow" placement="bottom-end" class="w-36">
						<n-button class="hover:border hover:bg-[#e8e9e8] w-full h-full" secondary strong>
							<template #icon>
								<n-icon>
									<img class="h-full w-full" src="~/assets/images/Add.svg" alt="" >
								</n-icon>
							</template>
						</n-button>
					</n-dropdown>
				</div>
	
				<div class="h-[22px] w-6"  @click.stop="stop">
					<n-dropdown trigger="click"  :options="showMore" @update:show="dropdownShow" placement="bottom-end" lass="w-36">
						<n-button class="hover:border hover:bg-[#e8e9e8] w-full h-full" secondary strong>
							<template #icon>
								<n-icon>
									<img class="h-full w-full" src="../../assets/images/24gf-ellipsisVertical.svg" alt="" >
								</n-icon>
							</template>
						</n-button>
					</n-dropdown>
				</div>
		   </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {h} from 'vue'

const renderImg = (src) => {
	return () => {
		return h('img',{
			src,
			style:'width:15px;height:25px'
		})
	}
}


    let item =  defineProps({
        element:{
            type:Object
        }
    })
    const show = ref(true)
	const clickAction = ref(false)
    const  mouseOver = () => {
        show.value = false;
    }
    // 移出
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

	const stop = () => {}

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

	const showMore = [
		{
			label: '重命名',
			key: '001',
		},
		{
			label: '查看文档',
			key: '002',
		},
		{
			label: '编辑文档',
			key: '003',
		},
		{
			label: '复制...',
			key: '004',
		},
		{
			label: '移动...',
			key: '005',
		},
		{
			label: '导出...',
			key: '006',
		},
		{
			label: '移至暂存箱',
			key: '007',
		},
		{
			label: '删除',
			key: '008',
		},
	]
	
</script>



<style lang="less" scoped>
.n-collapse-item{
	margin-left: 0px !important;
}

.n-collapse-item__content-inner{
	padding-top:0px !important;
}

/*
    虚线
*/
.n-divider {
	padding-left: 1%;
	padding-right: 1%;
}
.n-divider:not(.n-divider--vertical) {
	margin-top: 0px;
	margin-bottom: 0px;
}

</style>
