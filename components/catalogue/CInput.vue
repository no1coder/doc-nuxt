<template> 
	<input  type="text" v-model="title"  @blur="blurInput" class="w-1/3 h-7" ref="inputVal" >
</template>

<script lang="ts" setup >
interface Props {
	option:Object
	CloseInput:Function
}
const {option,CloseInput}  = defineProps<Props>()


const inputVal = ref()
onMounted(()=>{
	inputVal.value.focus()
})
let title = ref(option.title)

//失去焦点，调用父组件中的函数，使其关闭input表单
const blurInput = ()=>{
	f.put(`/api/book/200/catalogue/${option.id}`,{title:`${title.value}`})
	CloseInput(option)
}
</script>

<style scoped>

</style>