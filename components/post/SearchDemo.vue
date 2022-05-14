<template>

 <div class="search max-w-screen-2xl">
    <img src="@/assets/post/logo.png"  class="logo center"/>
    <br/>
    <div class="searchBox">
      <span class="searchBox-left"></span>
      <input type='text' placeholder="搜索" @click="masklayer"/>
      <span class="searchBox-right"></span>
    </div>
    
  </div>
  
   
</template>

<script setup>

import {ref} from "vue";
 const props = defineProps({
   masklayer1:
       {
         type:Function
       }
})

// 遮罩层显示隐藏效果
const masklayer = () => {
  props.masklayer1(false)       // 调取父组件传输的方法进行返回值使用
  console.log('遮罩层开启子',props.masklayer1)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search{
  text-align: center;
  height:330px;
  padding-top:80px;

}
.logo{
    height:36px;
    width:160px;
    margin: 0 auto 18px;    
}

.searchBox{
  clear:both;
  position:relative;
    display: flex;
    justify-content:flex-start;
    width:75%;
    height:52px;
    // background-color:rgba(238,240,244,.1);
    background-color:rgba(238,240,244,.1);
    margin:20px auto 0;
    border-radius:36px;
    }
.searchBox-left{
        background-image: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_magnifier_white_2x.d7af5de7.png);
        background-size: 100%;
        content: "";
        position: absolute;
        top: 16px;
        left: 20px;
        width: 20px;
        height: 20px;
    }
input{
    background:none;outline:none;border:none;
    width: 100%;
    padding: 0 52px;
    box-sizing: border-box;
    height: 52px;
    border-radius: 26px;
    font-size: 16px;
    color: #eef0f4;
    background: rgba(238,240,244,.1);
    
  }
 .searchBox-right{
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_return.0d4e04d8.png) no-repeat;
    background-size: 100%;
     
  }



</style>
