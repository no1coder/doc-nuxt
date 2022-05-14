<template>
	<n-modal v-model:show="showModal1">
		<n-card
			style="width: 600px"
			:bordered="false"
			size="huge"
			role="dialog"
			aria-modal="true"
		>
			<n-input />
		</n-card>
	</n-modal>
	
	
</template>

<script lang="ts" setup>
let props = defineProps({
	showModal:Boolean
})
import {ref} from "vue";
let showModal1 = ref()
// showModal.value = true
showModal1.value = props.showModal
</script>