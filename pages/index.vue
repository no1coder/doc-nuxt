<template>
  <!--  遮罩层样式 -->
  <PopupSearch/>

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

        <NuxtLink class="cursor-pointer">
          <login class="cursor-pointer" :showModal="true" v-if="!userStore.token">
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

</template>

<script setup>
import {ref} from "vue";
import {useUserStore} from "../stores/userStore";
import {logout} from "../util/util";
import PopupSearch from "../components/PopupSearch";


let mask_layer  = ref(true);       // 遮罩层隐藏显示

// 遮罩层显示效果
const masklayer1 = (e) => {
  mask_layer.value = e
  document.body.style="overflow: hidden;"                     // 关闭轮滑
  setTimeout(() =>{
    document.getElementById('search_Box1').focus();  // 自动焦点
  },200);
  console.log(e,'遮罩层开启')
}

// 遮罩层隐藏效果
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
