<template>
  <n-popover trigger="hover" :delay="500" :duration="300" v-model:show="show" >
    <template #trigger>
      <div >
        <img class="w-8 h-8" :src="props.obj.url" alt="">
      </div>
    </template>
    <template #header>
      <span class="relative border-box header">
        <div>
            <img class="w-16 h-16 use-info" :src="props.obj.url" alt="" >
        </div>
        <div>
          <span>userName</span>
        </div>
      </span>
    </template>
    <div class="relative content">
      <div class="flex items-end h-full">
        <p class="text-sm text-gray-500 p-1 border-2 mr-4 mb-1">关注者2</p>
        <p class="text-sm text-gray-500 p-1 border-2 mb-1">关注了2</p>

      </div>
      <n-button class="absolute bottom-1 right-1" size="small" @click="show = false">
        关注
      </n-button>

    </div>
  </n-popover>
</template>

<script setup>
import {defineProps,ref} from "vue";
let props = defineProps({
  obj:{
    type: Object,
    default:()=>{
      return []
    }
  }
})
const show = ref(false)


</script>

<style scoped>
.user-info{
  border-radius:32px;
}
img{
  border-radius:32px;
}
span{
  display: inline-block;
  height:100px;
  width:250px;
}
.header{
  height:80px;
}
.content{
  height:80px;
}
</style>