<template>
	<div>
		<div   class="md:max-w-[15%] flex pr-7 h-full items-center">
			<div class="h-[22px] w-6 mx-2" @click.stop="stop">
				<n-dropdown trigger="click" :options="data" @update:show="dropdownShow" placement="bottom-end" class="w-36">
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
</template>

<script setup>
import {h} from 'vue'
let props = defineProps({
	show:Boolean
})
console.log(props.show)
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

<style scoped>

</style>