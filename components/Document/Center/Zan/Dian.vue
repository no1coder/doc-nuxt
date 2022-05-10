<template>
  <div class="like relative w-full h-auto grid justify-center">
    <span class="like_zan"></span>
  </div>
  <p class="like_text text-sm text-gray-400 mb-4 mt-2 text-center">21人点赞</p>
  <div class="mt-5 w-auto flex justify-center">
    <ul class="touxiang flex justify-between w-5/12 ">
      <li v-for="items in Toux" @click="Toux1" :key="items.id">
        <img :src="items.url" alt="" >
      </li>
      <li>
        <img src="~assets/images/icon/shenglue.svg" class="border-2 " alt="">
      </li>
    </ul>
  </div>
</template>

<script setup>
const Toux1 = ()=>{
  console.log(Toux[0].url)
}

const Toux = [
  {id:1,url:'assets/images/icon/image.png'},
  {id:2,url:'assets/images/icon/image.png'},
  {id:3,url:'assets/images/icon/image.png'},
  {id:4,url:'assets/images/icon/image.png'},
  {id:5,url:'assets/images/icon/image.png'},
  {id:6,url:'assets/images/icon/image.png'},
  {id:7,url:'assets/images/icon/image.png'},
  {id:7,url:'assets/images/icon/image.png'},
]
</script>

<style scoped>
/*.like .like_zan{
  !*-webkit-animation-name: like-module_like_ywZuk;*!
  animation-name: like-module_like_ywZuk;
  !*-webkit-animation-duration: .9s;*!
  animation-duration: .9s;
  !*-webkit-animation-iteration-count: 1;*!
  animation-iteration-count: 1;
  !*-webkit-animation-timing-function: steps(27);*!
  animation-timing-function: steps(27);
  !*-webkit-animation-fill-mode: forwards;*!
  animation-fill-mode: forwards;
}*/
.like_zan{
  display: inline-block;
  margin: -1px 0;
  width: 80px;
  height: 80px;
  background: url(https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*eDsBTKcm1IcAAAAAAAAAAAAAARQnAQ) no-repeat 0 0;
  background-size: auto 80px;
}
.touxiang>li>img{
  width:100%;
  height:100%;
  border-radius: 32px;
}
.touxiang>li{
  width:32px;
  height:32px;
}
</style>