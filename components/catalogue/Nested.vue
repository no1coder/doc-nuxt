<template>
	<draggable
		class="dragArea"
		tag="ul"
		:list="tasks"
		:group="{ name: 'g1' }"
		item-key="name"
		@end="onEnd"
	>
		<template #item="{ element }" >
			<li >
				<div @click.stop="stop">
					<CategoryItem :element="element" ></CategoryItem>
				</div>
			</li>
		</template>
	</draggable>
</template>
<script setup>
import draggable from "vuedraggable";
let props = defineProps({
	tasks:{
		required: true,
		type: Array
	}
})

const stop = () => {}

</script>
