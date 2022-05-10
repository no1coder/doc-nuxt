<template>
    <div class="flex">
        <!-- 前面加空格顶出去 -->
        <div class="w-auto flex" v-if="element.level > 1 ">
            <!-- <div v-if="element.tasks.length > 0"> -->
                <div class="w-[22px] " v-for="i in (element.level - 1 )" :key="i" >
                </div>
            <!-- </div> -->
                
            <!-- <div class="w-auto flex" v-else>
                <div class="w-[22px]" v-for="i in (element.level  )" :key="i" >
                </div>
            </div> -->

        </div>

        <!-- <div class="w-auto flex" v-else>
            <div class="w-[22px]" >
            </div>
        </div> -->

        <!--当下级有数据的时候，选择这个-->
        <n-collapse  v-if="element.tasks.length > 0"> 
            <!-- 折叠面板头部内容 -->
            <n-collapse-item :name="element.name" >
                <template #header >
                    <CategoryItemSub :element="element"></CategoryItemSub>
                </template>
                
                <!-- 折叠面板的展示内容 -->
                <template #default>
                    <CategoryNested   :tasks="element.tasks" />
                </template>
            </n-collapse-item>
        </n-collapse>

        <!-- 当下级没有数据的时候，选择这个 -->
        <div v-else class="flex w-full">
            <CategoryItemSub :element="element"></CategoryItemSub>
            <div >
                <CategoryNested :tasks="element.tasks" />
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
</script>
