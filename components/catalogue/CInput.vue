<template> 
	<input  type="text" :value="option.label"  @blur="blur2" class="w-1/3 h-8 mt-1" ref="inputVal" >
</template>

<script lang="ts" setup >
interface Props {
	option:Object
	CloseInput:Function
}
const {option,CloseInput}  = defineProps<Props>()


const inputVal = ref(null)
onMounted(()=>{
	inputVal.value.focus()
})

//失去焦点，调用父组件中的函数，使其关闭input表单
const blur2 = ()=>{
	CloseInput(option)
}
</script>

<style scoped>

</style>