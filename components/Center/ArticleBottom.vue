<template>

  <div class="w-full h-auto relative justify-center">
    <div class="like relative w-full h-auto grid justify-center">
      <span class="like_zan"></span>
    </div>
    <p class="like_text text-sm text-gray-400 mb-4 mt-2 text-center">21人点赞</p>
    <div class="mt-5 w-auto flex justify-center">
      <ul class="touxiang flex justify-between w-5/12 ">
        <li v-for="items in Toux" @click="Toux1">
          <img :src="items.url" alt="" >
        </li>
        <li>
          <img src="assets/images/icon/shenglue.svg" class="border-2 " alt="">
        </li>
      </ul>
    </div>
    <div class="px-12 mt-7 mb-12 flex justify-between">
      <div class="flex w-5/12 items-center justify-between">
        <div class="h-3.5 flex items-center">
          <img src="assets/images/icon/qunzu.svg" alt="" class="h-3.5 w-3.5"/>
          <a class="text-gray-500 text-sm">殷建卫</a>
        </div>
        <img src="assets/images/icon/zhongbiao.svg" alt="" class="h-3.5 w-3.5"/>
        <span class="text-gray-500 text-sm">03-04&nbsp;15:17</span>
        <img src="assets/images/icon/shuben.svg" class="h-3.5 w-3.5"/>
        <span class="text-gray-500 text-sm">4952</span>
        <img src="assets/images/icon/xiaoxi.svg" class="h-3.5 w-3.5"/>
        <span class="text-gray-500 text-sm">2</span>
        <div class="border-l-2">
          <span class="text-gray-500 text-sm ml-3">投诉</span>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <span class="text-gray-500 text-sm">分享到:</span>
        <img src="assets/images/icon/weibo.svg" alt="" class="w-4 h-4 mx-3"/>
        <img src="assets/images/icon/weixin.svg" alt="" class="w-4 h-4 mx-3"/>
      </div>
    </div>
    <div class="px-12  w-full flex">
      <div class="py-8 pr-4  w-1/2">
        <div class="mb-2 text-gray-500 text-sm">上一篇</div>
        <div class="whitespace-normal ">Zoom 2022 苏州、杭州、合肥开发测试职位，不加班（Java、C++、前端、Android、iOS、Mac）</div>
      </div>
      <div class="py-8 pl-4 w-1/2 text-right">
        <div class="mb-2 text-gray-500 text-sm">下一篇</div>
        <div class="">开发资料推荐</div>
      </div>
    </div>
    <CenterReview></CenterReview>


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
.cheng{
  height:1000px;
}
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