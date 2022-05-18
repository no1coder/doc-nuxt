<template>
  <n-popover trigger="click" :delay="500" :duration="300" v-model:show="show">
    <template #trigger>
        <div class="w-6 h-6 mr-4">
          <img src="~assets/images/icon/shoucang.svg" alt="" class="w-6 h-6 mr-4" :class="{hidden:!isShowIn}" @click="isshow">
          <img src="~assets/images/icon/sc.svg" alt="" class="w-6 h-6 mr-4" :class="{hidden:isShowIn}" @click="isshow">
        </div>
    </template>
    <template #header>
      <span class="relative border-box header">
        <div>
          <span>选择分组</span>
        </div>
        <div>
          <span>你可以选择分组或直接</span>
          <span class="text-blue">取消收藏</span>
        </div>
      </span>
    </template>
    <div class="relative content">
      <div class="flex items-end h-full">
        <DocumentXinjian>
        </DocumentXinjian>
      </div>
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

const isShowIn = ref(true)
const isshow = ()=>{
  isShowIn.value = !isShowIn.value
}


</script>

<style scoped>
.user-info{
  border-radius:32px;
}
img{
  border-radius:32px;
}
span{
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