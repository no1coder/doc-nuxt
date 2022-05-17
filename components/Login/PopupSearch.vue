<template>
  <!--  遮罩层样式 -->
<!--  <div @click=masklayer_hide>遮罩层样式</div>-->

  <div class="mask_layer" v-show="mask_layer" @click="masklayer1">
    <div class="n-scrollbar-raill"></div>
    <button class="search_close" ></button>
    <div class="" style="padding: 150px">
      <img src="@/assets/post/logo.png" style="margin:0 auto;"/>
      <!--      搜索框-->
      <div class="search_string">
        <span class="searchBox-left"></span>
        <input class="outline-0 px-9 search_Box" id="search_Box1" type="text" placeholder="搜索"  @click.stop >
        <span class="search_input_right"></span>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";

let mask_layer  = ref(false);       // 遮罩层显示

// 遮罩层隐藏效果
const masklayer1 = () => {
  mask_layer.value = false
  document.body.style="overflow: visible;"                     // 关闭轮滑
  console.log('遮罩层隐藏')
}
// 遮罩层显示效果
const masklayer_hide = () =>{
  mask_layer.value = true;
  document.body.style="overflow: hidden;"
  setTimeout(() =>{
    document.getElementById('search_Box1').focus();  // 自动焦点
  },200);
  console.log('遮罩层开启')
}

// 将开启方法继承出去
defineExpose({
  masklayer_hide,
})


</script>

<style scoped>

/* 遮罩层关闭按钮 */
/* 轮滑位置设置 */
   .n-scrollbar-raill{
     right: 4px;
     top: 2px;
     bottom: 2px;
   /*width: 1.7vh;*/
     /*margin-right:1.7vh;*/
     background: #464646;
     position: absolute;
   }
/* 点击关闭 */
   .search_close {
     width: 32px;
     height: 32px;
     position: absolute;
     z-index: 10;
     right: 40px;
     top: 20px;
   /*text-indent: -9999em; */
     background: url("https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_panel_close.c5182ad8.png") no-repeat;
     background-size: 100%;
   }
/* 遮罩层搜索框位置 */
   .search_string{
     position: relative;
     max-width: 840px;
     margin: 50px auto ;
     text-align: center;
   }
/* 遮罩层搜索框样式 */
   .search_Box{
     height: 52px;
     font-size: 16px;
     width: 100%;
     color:white;
     background-color:rgba(246,246,249,.1);
     border-radius: 26px;
   }
/* 搜索框前标 */
   .searchBox-left{
     background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_magnifier_white_2x.d7af5de7.png) no-repeat;
     background-size: 90%;
     position: absolute;
     top: 17px;
     left: 13px;
     width: 20px;
     height: 20px;
   }
/* 搜索框后标 */
   .search_input_right {
     position: absolute;
     top: 10px;
     right: 10px;
     content: "";
     width: 32px;
     height: 32px;
     cursor: pointer;
     background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_return.0d4e04d8.png) no-repeat;
     background-size: 100%;
   }
/* 遮罩层总体 */
   .mask_layer{
     position: fixed;
     width:100%;
     height:100%;
     top: 0;
     left: 0;
     background:rgba(0,0,0,1);
     z-index:10;
   }

</style>