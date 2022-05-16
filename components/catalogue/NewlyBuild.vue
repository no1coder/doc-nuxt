<template>
	<n-modal >
		<n-card
			style="width: 600px"
			:bordered="false"
			:title="props.keys"
			size="huge"
			role="dialog"
			aria-modal="true"
		>
			<n-input v-model:value="value" type="text" :placeholder="props.keys" @blur="add" />
		</n-card>
	</n-modal>
</template>

<script lang="ts" setup>
const props = defineProps({
	keys:{
		required:true,
		type:String
	},
	addValue:{
		type: Function,
		required: true,
	}
})
let value = ref(null);
const add = () => {
	props.addValue(value.value)
}
</script>