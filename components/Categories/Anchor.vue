<template>
  <div class="box-border border-r border-r-zinc-800 box-border w-48 fixed h-full top-16 hidden lg:block">
    <div class="py-2.5 w-full">
      <ul class="overflow-auto">
        <li class="overflow-hidden  h-14 rounded-l-md" v-for="(items,index) in category" :key="items.id ">
          <div :class="{active:active == items.hash_id }" @click="goId(items.hash_id)" class="text-white px-5 block text-lg leading-[3.5rem] h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">{{items.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
obj:{
  type:Object,
  default:()=>{
    return {}
  }
}
})
let category = ref({})
category.value = props.obj

let active = ref("2kK");

const goId = (id)=>{
  var anchor = document.getElementById(id);
  // 获取div距离顶部高度
  console.log(anchor.offsetTop)

  let offsetTop = anchor.offsetTop-80;
  let gundongSize = document.documentElement.scrollTop

  gundong(offsetTop,gundongSize)
  // document.documentElement.scrollTop = anchor.offsetTop-80;
  console.log(111111111)
  console.log(id);
  active.value = id;
  console.log(111111111)
}
const gundong = (offsetTop,doffset) =>{
  console.log(offsetTop,doffset)

  console.log(Math.abs(offsetTop - doffset) < 50)
    if(Math.abs(offsetTop - doffset) < 50){
      document.documentElement.scrollTop = offsetTop
      return ;
    }
  let gundongSize = null;
    if(offsetTop > doffset){
       gundongSize =  doffset+50
    }else{
       gundongSize =  doffset-50
    }
    setTimeout(()=>{
      document.documentElement.scrollTop = gundongSize
      gundong(offsetTop,gundongSize)
    },5)
}

</script>

<style scoped>
.active{
  background:#2493ee !important;
}
</style>