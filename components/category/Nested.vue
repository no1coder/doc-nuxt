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
					<n-collapse  v-if="element.tasks.length > 0" class="relative group">
						<n-collapse-item  name="1">
							<template #header >
								<div class="w-full box-border py-2 ">
									<div class="flex items-center">
										<input type="checkbox" v-model="element.isSelected" :id="element.name" />
										<label :for="name" class="pl-1 ">{{element.name}}</label>
										<span>
                                    		<button class="px-1 ml-1 h-full">未发布</button>
                                		</span>
										<n-divider dashed class="inline-block w-[83%] h-full" />
										<div class="inline-block absolute right-3 group-hover:hidden">
											{{element.time}}
										</div>
<!--										<div class="inline-block absolute group-hover:right-3 one group-hover:block group-hover:flex group-hover:border group-hover:border-red-400 group-hover:w-12">-->
										<div class="one">
											<div class="border border-red-400 ">
												11
											</div>
											<div>
												22
											</div>
										</div>
									</div>
								</div>
							</template>
							
							<div class="pl-8">
								<CategoryNested :tasks="element.tasks" />
							</div>
						</n-collapse-item>
					</n-collapse>
					
					<div v-else class="pl-[22px] relative">
						<div class="w-full box-border py-2 hover:bg-[#EFF0F0] ">
							<div class="flex items-center">
								<input type="checkbox" v-model="element.isSelected"  :id="element.name" />
								<label :for="name" class="pl-1 ">{{element.name}}</label>
								<span>
									<button class="px-1 ml-1 h-full">未发布</button>
								</span>
								<n-divider dashed class="inline-block w-[83%] h-full" />
								<div class="inline-block absolute right-3">
									{{element.time}}
								</div>
							</div>
						</div>
						<div >
							<CategoryNested   :tasks="element.tasks" />
						</div>
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
  
const name = "nested-draggable"
</script>

<style>
.dragArea {
    /*padding-left: 20px;*/
}
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
.one:hover{
	display:block;
	background: red;
}

</style>