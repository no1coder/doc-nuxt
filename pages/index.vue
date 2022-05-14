<template>
<!--  遮罩层样式 -->
  <div class="mask_layer" v-show="!mask_layer" @click="masklayer_hide">
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
<div class="Home m-0 p-0 ">
    <div class="w-full">
      <div class="home ">

        <!-- 导航栏 -->
        <div class="topbgcol">
          <div class="head max-w-screen-xl mx-auto topbgcol" >
            <div class="float-right  text-center mt-5 mr-5 ">
             <div >
        <NuxtLink to="###">传书到手机</NuxtLink> |
        <NuxtLink>墨水屏版</NuxtLink> |
        <NuxtLink>手机版</NuxtLink> |
        <NuxtLink >微信听书</NuxtLink> |

        <NuxtLink>
          <login :showModal="true" v-if="!userStore.token">
            登录
          </login>

          <span v-show="userStore.token">
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <span>用户资料</span>
      </n-dropdown>
      </span>

        </NuxtLink>
      </div>
            </div>
          </div>  
        </div>

        <!-- 搜索栏 -->
        <div class="topbgcol">
          <PostSearchDemo class="max-w-screen-xl mx-auto topbgcol" :masklayer1="masklayer1"/>
        </div>
        

        <!-- 图书列表 -->
        <div class="btbgcol ">
          <div class="bgcol grid grid-cols-1 lg:grid-cols-2  max-w-screen-xl mx-auto">
            
            <!-- 飙升出版书列表 -->
            <div class="">
              <div class=" pl-9 pt-8 mt-8  mt-4 h-40">
                <img src="@/assets/post/top200.png" class="logoa"/>
                <div class="spana">微信读书用户近期热度的出版书</div>
              </div>
              <div class="bookCardL grid  grid-cols-1 sm:grid-cols-2">
                <PostBookCard v-bind="book"/><PostBookCard/><PostBookCard/>
                <PostBookCard/><PostBookCard/><PostBookCard/>
              </div>
              <div class="cheekAll">
                  查看全部
                  <div><img src="@/assets/post/右.png" /></div>
                </div>
            </div>
            
            <!-- 新书出版列表 -->
            <div >
              <div class=" pl-9 pt-8 mt-8  mt-4 h-40">
                <img src="@/assets/post/top200xinshu.png" class="logoa"/>
                <div class="spanb">最近90天出版的热门书籍</div>
              </div>
              <div class="bookCardR grid  grid-cols-1 sm:grid-cols-2">
                <PostBookCard /><PostBookCard/><PostBookCard/>
              <PostBookCard/><PostBookCard/><PostBookCard/>
              
              </div>
              <div class="cheekAll hover">
                查看全部
                <div><img src="@/assets/post/右.png" /></div>
              </div>
            
            </div>
            
          
            
            <!-- 总榜出版书单列表 -->
            <div class="">
              <!-- 左侧新榜出版表头 -->
              
              <div class=" pl-9 pt-8 mt-8  mt-4 h-40">
                <img src="@/assets/post/top200xinshu.png" class="logoa"/>
                <div class="spanb">最近90天出版的热门书籍</div>
              </div>
              <div class="bookCardR grid  grid-cols-1 sm:grid-cols-2">
              <PostBookCard /><PostBookCard/><PostBookCard/>
              <PostBookCard/><PostBookCard/><PostBookCard/>
              
              </div>
              <div class="cheekAll hover">
                查看全部
                <div><img src="@/assets/post/右.png" /></div>
              </div>
            
            </div>
            
            <!-- 男生更新书单列表 -->
          <div >
              <div class=" pl-9 pt-8 mt-8  mt-4 h-40">
                <img src="@/assets/post/gengxin.png" class="logoa"/>
                <div class="spand">最近更新的热门男生小说</div>
              </div>
              <div class="bookCardR grid  grid-cols-1 sm:grid-cols-2 ">
                <PostBookCard/><PostBookCard/><PostBookCard/>
                <PostBookCard/><PostBookCard/><PostBookCard/>
              </div>
              <div class="cheekAll hover">
                查看全部
                <div><img src="@/assets/post/右.png" /></div>
              </div>
            
            </div>
          </div>
        </div>

        <!-- 分类榜单 -->
        <div class="btbgcol">
          <div class=" max-w-screen-xl mx-auto"><PostClassList /></div>
        </div>

        <!-- 底部备案编号 -->
        <div class="btbgcol w-full">
          <PostFooterBank class="max-w-screen-xl  mx-auto"/>
        </div>


        <!-- 底部固定栏 -->
        <!-- <div class="tabBar">
          <PostTabBar/>
        </div>
        -->
      </div>
    </div>
</div>  
>>>>>>> origin/main

</template>

<script setup>
import {ref} from "vue";
import {useUserStore} from "../stores/userStore";
import {logout} from "../util/util";

let mask_layer  = ref(true);       // 遮罩层隐藏显示

// 遮罩层显示隐藏效果
const masklayer1 = (e) => {
  mask_layer.value = e

  document.body.style="overflow: hidden;"                     // 关闭轮滑
  setTimeout(() =>{
    document.getElementById('search_Box1').focus();  // 自动焦点
  },200);
  console.log(e,'遮罩层开启')
}


const masklayer_hide = () =>{
  mask_layer.value = true;
  document.body.style="overflow: visible;"
  console.log('遮罩层隐藏')
}


// 退出登录
const userStore = useUserStore();                 // 获取用户信息  和token
const userInfo = await userStore.getUserInfo
const logoutHeader = ()=>{
  console.log(123123,'点击退出登录==>>',userStore.token)
  if (userStore.token){
    logout()
    //将token设置为空
    console.log('全局提示消息退出成功');
  }else{
    console.log('全局提示消息退出失败');
  }
}
console.log(userInfo,222222)

// 登录后显示效果
let options = [
  {
    label: "用户资料",
    key: "profile",
  },
  {
    label: "退出登录",
    key: "logout",
  }
]
const handleSelect = (key) => {
  if(key == 'logout'){
    logoutHeader()
    console.log('全局提示用户退出成功')
  }else if (key == 'profile'){
    console.log(key,'全局提示进入用户资料==>>',userInfo)
  }else{
    console.log('未知操作')
  }
}

f.get('/api/book_categories').then(res=>{
  let book =res;
})



</script>

<style lang="less">
// 遮罩层关闭按钮
.search_close {
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 101;
  right: 20px;
  top: 20px;
  text-indent: -9999em;
  background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_panel_close.c5182ad8.png) no-repeat;
  background-size: 100%;
}
// 遮罩层搜索框位置
.search_string{
  position: relative;
  max-width: 840px;
  margin: 50px auto ;
  text-align: center;
}
// 遮罩层搜索框样式
.search_Box{
  height: 52px;
  font-size: 16px;
  width: 100%;
  color:white;
  background-color:rgba(246,246,249,.1);
  border-radius: 26px;
}
// 搜索框前标
.searchBox-left{
  background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_magnifier_white_2x.d7af5de7.png) no-repeat;
  background-size: 90%;
  position: absolute;
  top: 17px;
  left: 13px;
  width: 20px;
  height: 20px;
}
// 搜索框后标
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
// 遮罩层总体
.mask_layer{
  position: fixed;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  background:rgba(0,0,0,1);
  z-index:10;
}




.Home {
  font-family:PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif;  
}
.head{
  color: #949596;
  background-color:#1f2022;
  height:60px; 
  a{
    padding:10px 10px ;
  }
}
@media screen and (max-width:724px){
  .head>div{
    display:none;
  }
}

.topbgcol{
  background-color:#17181a;

}
.btbgcol{
    background-color:#1f2022;
}
.logoa{
  width:204px;
  height:32px;
}
.spana{
  color: #F75B9A;
}
.spanb{
  color:#FF6F3C;
}
.spanc{
  color: #DBC79C;
}
.spand{
  color: #817CF2;
}
.spana, .spanb, .spanc ,.spand{
  clear:both;
  font-size:12px;
  padding-bottom:20px;
  border-bottom:1px solid rgb(54, 54, 54);
}
.bookCardL,.bookCardR{
  background-color:#1f2022;
  margin-top:-50px;
}
.cheekAll{
  clear:both;
  color:white;
  padding:10px 0 10px 45px;
  display: flex;
  justify-content: flex-start;

  div{
    padding:6px 0 0 6px ;
    img{
      width:12px;
      height:12px;
      float:left;
    }
  }
}
.hover:hover{
  background:-webkit-linner-gradient(
      left,#1f2124,#5a5e64
  );
}

</style>
