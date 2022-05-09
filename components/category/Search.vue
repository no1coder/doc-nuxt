<template>
<div class="container m-auto">
    <div class="h-16 flex justify-between items-center ">
        <div class="h-8 w-1/3 flex items-center">
            <div class="mr-4 cursor-pointer">目录</div>
            <div class="mr-1 cursor-pointer">暂存箱</div>
            <div class="ml-1">  
                <n-popover trigger="hover" class="bg-black " :style="{ backgroundColor:'black' }">
                    <template #trigger class="bg-black">
                        <img class="h-4 w-4 cursor-pointer" src="../../assets/images/问号.png" alt="">
                    </template>
                    <span class="text-white">仅成员所见,存放不在目录上的文档</span>
                </n-popover> 
            </div>
        </div>
        <div class="w-1/3 flex h-9 justify-between">
            <input type="text" class="border w-2/3 search pl-10 rounded-md  " placeholder="输入标题进行搜索">
            <button class="border px-8 rounded-md bg-green-500 text-white">新建</button>
        </div>
    </div>
</div>
    
</template>

<script setup>
const name = "nested-example";
const display = "Nested";
const order = 15;

let  list = ref([
    {
        name: "task 1",
        tasks: [
        {
            name: "task 2",
            tasks: []
        }
        ]
    },
    {
        name: "task 3",
        tasks: [
        {
            name: "task 4",
            tasks: []
        }
        ]
    },
    {
        name: "task 5",
        tasks: []
    }
      ])
</script>

<style>
.search{
    background: url('../../assets/images/search.png') no-repeat;
    background-size: 20px 20px;
    background-position: 12px 9px;
}
</style>