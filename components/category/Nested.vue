<template>
	<draggable
		class="dragArea"
		tag="ul"
		:list="tasks"
		:group="{ name: 'g1' }"
		item-key="name"
	>
		<template #item="{ element }" >
			<li >
                <CategoryItem :element="element" ></CategoryItem>
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

let itemsActive = ref(true);


const name = "nested-draggable"
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