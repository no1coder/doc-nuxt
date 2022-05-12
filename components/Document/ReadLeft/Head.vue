<template>
  <div class="head">
  <div class="logo w-full h-16 border-2 text-black font-medium flex justify-center items-center">文档阅读</div>
  <div class="title my-2 px-5 flex justify-between items-center">
    <span>目录</span>
    <div class="icon flex w-14 h-5 justify-end border-solid items-center relative">
      <input type="text" placeholder="搜索" v-if="isShow" @blur="Hidden" class="search-input border-box w-60 h-11 p-1 shadow border-2 rounded absolute right-6" />
      <img src="~assets/images/icon/list.svg" alt="" class="w-4 h-4" @click="Change">
      <img src="~assets/images/icon/fangda.svg" alt="" class="ml-2 w-4 h-4" v-show="Out" @click="Show">
    </div>
  </div>
  </div>
</template>

<script setup>
import {ref,defineProps,defineEmits} from 'vue';
    let Out = ref(true);
    let isShow = ref(false);
    const Show = ()=>{
      isShow.value = true;
      console.log(isShow.value)
      Out.value = false;
    }

    //接收父元素传过来的数据，使用defineProps接收
    const props = defineProps({
      name:{
        type:Object,
        default:() =>{
          return[]
        }
      }
    })
    const Change = ()=>{
    }
    const Hidden = ()=>{
      isShow.value = false;
      Out.value = true;
    }
</script>

<style scoped>
.title>span{
  padding:12px 0;
  color:#262626;
  border-bottom:2px solid #262626;
}

</style>