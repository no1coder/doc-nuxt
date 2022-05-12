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
// import { ref, watch } from 'vue'
import draggable from "vuedraggable";
let props = defineProps({
	tasks:{
		required: true,
		type: Array
	}
})

const stop = () => {}

watch(props.tasks,(newQuestion, oldQuestion) => {
	console.log(newQuestion)
})

const onMoveCallback = (evt, originalEvent) => {
	console.log(evt)
	// return false; — for cancel
};

// const onEnd = () => {
// 	// 可在此函数中直接拿到了改变顺序后的list列表
// 	// console.log(this,11111111)
//
// 	function added(newIndex,element){
// 		console.log(newIndex)
// 	}
// 	// props.map(item => console.log(item.title));
// }
//


</script>

<style>
.n-collapse-item{
	margin-left: 0px !important;
}

.n-collapse-item__content-inner{
	padding-top:0px !important;
}

/*
    虚线
*/
.n-divider {
	padding-left: 1%;
	padding-right: 1%;
}
.n-divider:not(.n-divider--vertical) {
	margin-top: 0px;
	margin-bottom: 0px;
}
.one{
	display: none;
}
/*.one :hover{*/
/*	display:block;*/
/*	background: red;*/
/*}*/

</style>