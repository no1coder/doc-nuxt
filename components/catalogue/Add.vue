<template>
	<div class="md:max-w-[15%] flex pr-7 h-full items-center">
		<div class="h-[22px] w-6 mx-2" @click.stop="stop">
			<n-dropdown trigger="click" :options="data" placement="bottom-end" class="w-36" @select="handleAdd">
				<n-button class="hover:border hover:bg-[#e8e9e8] w-full h-full" secondary strong>
					<template #icon>
						<n-icon>
							<img class="h-full w-full" src="~/assets/images/Add.svg" alt="" >
						</n-icon>
					</template>
				</n-button>
			</n-dropdown>
		</div>
		<!-- 添加数据框 -->
		<div>
			<catalogueNewlyBuild :addValue="addValue" :keys="keys"  v-model:show="showModal"></catalogueNewlyBuild>
		</div>
		<div class="h-[22px] w-6"  @click.stop="stop">
			<n-dropdown trigger="click" :options="showMore" @select="handleSelect" placement="bottom-end" lass="w-36">
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
</template>

<script setup lang="ts">
import { inject,h,watch } from 'vue';
interface Props {
	option: Object,
}
const foo = inject('key')
// let {option} = defineProps<Props>()
let props = defineProps<Props>()


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
    key: 1,
    icon:renderImg('assets/images/文档.svg')
  },
  {
    label: '新建分组',
    key: 0,
    icon:renderImg('assets/images/分组管理.svg')
  },
  {
    label: '添加链接',
    key: 2,
    icon:renderImg('assets/images/链接.svg')
  },
];

const showMore = [
	{
		label: '查看文档',
		key: 'ViewDocument',
	},
	{
		label: '编辑文档',
		key: 'EditDocument',
	},
	{
		label: '删除',
		key: 'delete',
	},
]
//阻止冒泡
const stop = () => {}
//显示模态框
let showModal =  ref(false);
//点击添加事件
let keys = ref()
let title = ref()
const handleAdd =  (key: string | number) => {
  showModal.value = true;
  keys.value = key
}

//获取input表单输入的内容
const addValue = (title,id) => {
	let params = {
		title,
		is_group:id,
		parent_id:0,
		seq:0
	}
	params.parent_id = props.option.id;
	if(id === 1){
		console.log(123221321)
	}else if(id ===0 ){
		f.post(`/api/book/200/catalogue`,params).then(res => {
				showModal.value = false;
				//添加完数据重新请求数据
				foo();
		})
	}else{
		/*console.log(12312321312321321321312)*/
	}
}

//点击省略号
const handleSelect =  (key: string | number) => {
	//删除功能
	if(key === 'ViewDocument'){

	}else if(key === 'EditDocument'){

	}else{
		// 判断是否有子类
		let r = props.option.children ? confirm("下面有分组或者文档，你确定要删除吗？") : confirm("你确认要删除该项内容吗？");	
		if (r == true) {
			f.delete(`/api/book/200/catalogue/${props.option.id}`).then(res => {
				foo();
			})
		}
	}
}
</script>

<style scoped>

</style>