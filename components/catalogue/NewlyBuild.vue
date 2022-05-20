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
			<input v-model="title" type="text" :placeholder="keys" class="border w-5/6 h-9 pl-3" />
			<div class="w-5/6 h-9 mt-2">
				<select name="`" id="1" class="h-full w-full border pl-3" >
					<option class="h-full w-full" v-for="item in book_categories" @blur="add(item.id)" value="item.id">{{item.name}}</option>
				</select>
			</div>
		</n-card>
	</n-modal>
</template>

<script lang="ts" setup>
interface Props {
  keys: String,
  addValue:Function
}
const {keys,addValue} = defineProps<Props>()
let title = ref()
let params = {
	category_id:'79',
}

//添加数据
const  add = (item) => {
	// console.log(item.id);
	console.log(111111)
	
	// addValue(title.value)
	f.post(`/api/book`,params ).then(
		res => {
			console.log(res)
		}
	)
	console.log(params,11111)
}


let book_categories = ref()
book_categories.value = await f.get(`/api/book_categories`);
</script>