<template>
    <div  class="w-full box-border py-2 flex"  @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div class="flex items-center w-full justify-end">
            <input type="checkbox" v-model="element.isSelected" :id="element.name" />
            <label :for="name" class="max-w-[10%] h-full pl-[0.5%] truncate">{{element.name}}</label>
            <span class="max-w-[15%] ml-[0.5%]">
                <button class="h-full w-full px-1 box-border border">未发布</button>
            </span>


            <n-divider v-if="show" dashed class="inline-block max-w-[79%]" />
            <n-divider v-else dashed class="inline-block max-w-[82%] justify-end" />
            <div v-if="show" class="inline-block  w-[8%] " >
                {{element.time}}
            </div>
            <div v-else  class="flex w-[5%] justify-end pr-4">
                <img class="h-4 w-4 mx-1.5" src="../../assets/images/加号.png" alt="">
                <img class="h-4 w-4 mx-1.5" src="../../assets/images/24gf-ellipsisVertical.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
    let item =  defineProps({
        element:{
            type:Object
        }
    })
    const show = ref(true)
    const  mouseOver = () => {
        show.value = false;
    }
    // 移出
    const mouseLeave = () => {
        show.value = true;
    }
</script>
