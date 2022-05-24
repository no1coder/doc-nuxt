<template>
	<n-modal >
		<n-card
			style="width: 500px"
			:bordered="false"
			:title="JudgmentData(keys)"
			size="huge"
			role="dialog"
			aria-modal="true"
		>
			<input v-model="title" type="text" :placeholder="JudgmentData(keys)" class="border w-full h-9 pl-3" />
			<div class="mt-10 flex">
				<button class="w-1/2 mx-auto  h-10 text-white text-base bg-red-500 hover:bg-red-600 rounded-full" @click="add(keys)">添加</button>
			</div>
		</n-card>
	</n-modal>
</template>

<script lang="ts" setup>
interface Props {
	keys: Number,
	addValue:Function
}
let {keys,addValue} = defineProps<Props>()
let title = ref()

//添加数据,清空数据框
const add = (id) => {
	addValue(title.value, id)
	title.value = ''
}

//显示添加的内容
const JudgmentData = (keys) => {
	if(keys === 1){
		return '添加文档';
	}else if(keys === 0){
		return '新建分组'
	}else{
		return '添加链接'
	}
}
</script>