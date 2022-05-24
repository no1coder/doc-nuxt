<template>
  <div class="flex w-full dark:bg-black">
    <div class="read_left  relative" :class="{hide : isHide}">
      <DocumentReadLeftCatalog :article="articleList"  :demo="demo" @isShow="Show" ref="show2"></DocumentReadLeftCatalog>
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
       if(document.body.clientWidth<1024){
          console.log('缩小')
         show2.value.show3()
         isHide.value = true;
       }
     }
   }
 })

 //获取文章
 let articleList = ref([]);

 //获取文章列表的数据
 articleList.value = await f.get(`/api/posts`);
console.log(articleList.value)

 // let isgood = ref({});
 //获取点赞与取消的数据
 // isgood.value = await f.post(`/api/posts/{forum_post}/likes`)
 // console.log(isgood.value)

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