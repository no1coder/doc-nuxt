<template>
    <div  class="w-full box-border py-2 "  @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="flex items-center w-full">
			<input type="checkbox" v-model="element" :id="element.name" />
			<label :for="name" class="md:max-w-[15%]  h-full pl-[0.5%] truncate" :title="element.name">{{element.name}}</label>
			
            <span class="md:max-w-[15%] ml-[0.5%]">
                <button class="h-full w-full px-1 box-border border">未发布</button>
            </span>
			
            <n-divider dashed class="inline-block md:flex-1" />

			
            <div v-if="show" class="md:max-w-[15%] h-full mr-[2%] text-right" >
                {{element.time}}
            </div>
            <div v-else  class="md:max-w-[15%] flex pr-10 h-full items-center">
				<div @click.stop="stop">
					<n-space>
						<n-dropdown trigger="click"  :options="options" @update:show="dropdownShow" placement="right-start">
							<n-button class="h-[22px] w-[22px] mx-1.5 p-1 ">
								<img  src="../../assets/images/Add.svg" alt="">
							</n-button>
						</n-dropdown>
					</n-space>
				</div>
               <div @click="add" class="h-[22px] w-[22px] mx-1.5 hover:border" >
				   <img class="h-full w-full p-1" src="../../assets/images/24gf-ellipsisVertical.svg" alt="" >
			   </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    let item =  defineProps({
        element:{
            type:Object
        }
    })
    const show = ref(true)
	const clickAction = ref(false)
    const  mouseOver = () => {
        show.value = false;
    }
    // 移出
    const mouseLeave = () => {
		if(!clickAction.value) {
			show.value = true;
		}
    }
	const dropdownShow = (status)=>{
		if(status){
			clickAction.value = true
		}else{
			clickAction.value = false
			show.value = true;
		}
	}

	const stop = () => {}

	const options = [
		{
			label: '全部层级',
			key: 'All levels',
		},
		{
			label: '第一级',
			key: "first stage"
		},
		{
			label: '第二级',
			key: 'Second stage'
		},
		{
			label: '第三级',
			key: 'Third level'
		}
	];
	
</script>
