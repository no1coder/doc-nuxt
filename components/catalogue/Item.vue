<template>
    <div class="flex">
        <!-- 前面加空格顶出去 -->
        <div class="w-auto flex" v-if="element.level > 1">
			<div v-if="element.tasks.length > 0">
				<div class="w-[22px] " v-for="i in (element.level )" :key="i" />
			</div>
			<div v-else>
				<div class="w-[22px] " v-for="i in (element.level + 1)" :key="i" />
			</div>
        </div>
		<div v-else>
			<div v-if="element.tasks.length > 0">
			</div>
			<div v-else>
				<div class="w-[22px] " v-for="i in (element.level )" :key="i" />
			</div>
		</div>
		
        <!--当下级有数据的时候，选择这个-->
		<div @click.stop="stop" class="w-full panel">
			<n-collapse v-if="element.tasks.length > 0">
			<div class="panel">
				<!-- 折叠面板头部内容 -->
				<n-collapse-item :name="element.name" >
					<template #header >
						<CategoryItemSub :element="element"></CategoryItemSub>
					</template>
					
					<!-- 折叠面板的展示内容 -->
					<template #default>
						<CategoryNested  :tasks="element.tasks" />
					</template>
				</n-collapse-item>
			</div>
				
			</n-collapse>
			
			<!-- 当下级没有数据的时候，选择这个 -->
			<div v-else class="flex w-auto">
				<div class="w-full">
					<div>
						<CategoryItemSub :element="element" />
					</div>
					
					<div>
						<CategoryNested  :tasks="element.tasks" />
					</div>
				</div>




				<!-- <n-collapse>
					<template #arrow>
						<n-icon>
						</n-icon>
					</template>
					<n-collapse-item :name="element.name">
						<template #header>
							<CategoryItemSub :element="element" />
						</template>
						
						<template #default>
							<div >
								<CategoryNested  :tasks="element.tasks" />
							</div>
						</template>
					</n-collapse-item>
				</n-collapse> -->
			</div>
		</div>
    </div>
</template>
<script lang="ts" setup>
    let props =  defineProps({
        element:{
            type:Object
        }
    })
	
	const stop = () => {}
</script>

<style lang="less">
.panel{
	.n-collapse-item{
		margin-left: 0px !important;
		.n-collapse-item__content-wrapper{
			.n-collapse-item__content-inner{
				padding-top:0px !important;
			}
		}
	}
}

</style>
