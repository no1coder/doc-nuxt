<template>
	<n-modal >
		<n-card
			style="width: 600px"
			:bordered="false"
			:title="keys"
			size="huge"
			role="dialog"
			aria-modal="true"
		>
			<n-input v-model:value="value" type="text" :placeholder="keys" @blur="add" />
		</n-card>
	</n-modal>
</template>

<script lang="ts" setup>
interface Props {
  keys: String,
  addValue:Function
}
const {keys,addValue} = defineProps<Props>()

let value = ref(null);
//添加数据
const add = () => {
	addValue(value.value)
}
</script>