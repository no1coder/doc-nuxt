<template>
  <n-popover trigger="hover" :delay="500" :duration="300" >
    <template #trigger>
      <div >
        <img class="w-8 h-8" :src="props.obj.url" alt="">
      </div>
    </template>
    <span>

    </span>
  </n-popover>
</template>

<script setup>
import {defineProps} from "vue";
let props = defineProps({
  obj:{
    type: Object,
    default:()=>{
      return []
    }
  }
})



</script>

<style scoped>
img{
  border-radius:32px;
}
span{
  display: inline-block;
  height:100px;
  width:250px;
}
</style>