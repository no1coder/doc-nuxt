<template>
<!--	<n-input v-model:value="option.label" type="text" autofocus  @blur="blur2"  size="small"/>-->
	<input  type="text" :value="option.label"  @blur="blur2" class="w-1/3 h-7 -mt-3" ref="inputVal">
</template>

<script lang="ts" setup >
const props = defineProps({
	option:Object,
	CloseInput:Function
});

const inputVal = ref(null)
onMounted(()=>{
	inputVal.value.focus()
})


//失去焦点，调用父组件中的函数，使其关闭input表单
const blur2 = ()=>{
	props.CloseInput(props.option)
}
</script>

<style scoped>

</style>