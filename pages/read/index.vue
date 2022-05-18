<template>
  <div class="flex w-full dark:bg-black">
    <div class="read_left  relative" :class="{hide : isHide}">
      <DocumentReadLeftCatalog :demo="demo" @isShow="Show" ref="show2"></DocumentReadLeftCatalog>
    </div>

    <div class="flex-auto">
        <DocumentReadrightRight></DocumentReadrightRight>
    </div>
  </div>
</template>

<script setup lang="ts">
 // import {ref} from "vue";
 import {getCurrentInstance} from 'vue'
 const {proxy} = getCurrentInstance()
 let isHide = ref(false);
 const show2 = ref();
 const demo = () => {
   isHide.value = !isHide.value
 }


 onMounted(()=>{
   if(!process.server){
     window.onresize = (e)=>{
       if(window.screen.availWidth<1024){
         show2.value.show3()
         isHide.value = true;
       }
     }
   }
 })
</script>

<style scoped>
.read_left{
  min-width:23%;
}

@media (max-width: 1024px){
  .hide{
    /*transform:translate(-51%);*/
    width:0!important;
    min-width: 0!important;
    will-change: width;
    transition: width .5s cubic-bezier(0.1, 0, 0, 1) 0s;
  }
}

</style>