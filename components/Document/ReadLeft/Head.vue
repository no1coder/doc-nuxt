<template>
  <div class="head1">
  <div class="logo w-full h-16 text-black font-medium flex justify-center items-center font-bold ">文档阅读</div>
  <div class="title my-2 px-5 flex justify-between items-center">
    <span>目录</span>
    <input type="text" placeholder="搜索" v-if="isShow" @blur="Hidden" class="search-input border-box h-8 p-1 shadow border-2 rounded absolute right-9" />
    <div class="icon flex w-14 h-5 justify-end border-solid items-center relative">
      <img src="~assets/images/icon/list.svg" alt="" class="w-3 h-3" @click="Change">
      <img src="~assets/images/icon/fangda.svg" alt="" class="ml-2 w-3 h-3" v-show="Out" @click="Show">
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
      obj:{
        type:Object,
        default:() =>{
          return[]
        }
      },
      demo:{
        type:Function,
        default:() => {
          return;
        }
      }
    })
//调用函数全部展开
    const Change = ()=>{
      props.demo()
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
.search-input{
  width: 87%;
  box-shadow: none!important;
}
</style>