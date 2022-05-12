<template>
<<<<<<< HEAD
  <n-space>
    <n-tooltip
        placement="bottom"
        trigger="hover"
        @update:show="handleUpdateShow"
    >
      <template #trigger>

        <n-button> 悬浮 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip
        placement="bottom"
        trigger="click"
        @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button> 点击 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip :show="showPopover" trigger="manual" placement="bottom">
      <template #trigger>
        <n-button @click="showPopover = !showPopover">
          手动（不会有事件发出来）
        </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
  </n-space>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // const message = useMessage();
    return {
      showPopover: ref(false),
      handleUpdateShow(show) {
        message.success(show + "");
      }
    };
  }
});
</script>
=======
<div id="Home bgcol">
  <div id="head" >
    <div >
    <a>传书到手机</a> |
    <a>墨水屏版</a> |
    <a>手机版</a> |
    <a>微信听书</a> |
    <a>登录</a> 
    </div>
  </div>  
  

  
  <div class="home">
    <PostSearchDemo />
    <div class="bgcol grid grid-cols-1 lg:grid-cols-2 book">
      
      <!-- 飙升出版书列表 -->
      <div class="">
        <div class="diva">
          <img src="@/assets/post/top200.png" class="logoa"/>
          <div class="spana">微信读书用户近期热度的出版书</div>
        </div>
        <div class="bookCardL grid  grid-cols-1 sm:grid-cols-2">
          <PostBookCard/><PostBookCard/><PostBookCard/>
          <PostBookCard/><PostBookCard/><PostBookCard/>
        </div>
        <div class="cheekAll">
            查看全部
            <div><img src="@/assets/post/右.png" /></div>
          </div>
      </div>
      
      <!-- 新书出版列表 -->
      <div >
        <div class="diva">
          <img src="@/assets/post/top200xinshu.png" class="logoa"/>
          <div class="spanb">最近90天出版的热门书籍</div>
        </div>
        <div class="bookCardR grid  grid-cols-1 sm:grid-cols-2">
          <PostBookCard/><PostBookCard/><PostBookCard/>
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
        
        <div class="diva">
          <img src="@/assets/post/top200xinshu.png" class="logoa"/>
          <div class="spanb">最近90天出版的热门书籍</div>
        </div>
        <div class="bookCardR grid  grid-cols-1 sm:grid-cols-2">
          <PostBookCard/><PostBookCard/><PostBookCard/>
        <PostBookCard/><PostBookCard/><PostBookCard/>
        
        </div>
        <div class="cheekAll hover">
          查看全部
          <div><img src="@/assets/post/右.png" /></div>
        </div>
      
      </div>
      
      <!-- 男生更新书单列表 -->
     <div >
        <div class="diva">
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
<button @click="qq">123123</button>

     <!-- 分类榜单 -->
      <div class="bgcol classlist">
        <PostClassList/>
      </div>
      <!-- 底部备案编号 -->
      <div class="bgcol">
      <PostFooterBank/>
      </div>
    <!-- 底部固定栏 -->
    <div class="tabBar">
      <PostTabBar/>

    </div>
  </div>
</div>    

  
</template>

<script setup>


const qq = ()=>{
f.get('/api/book_categories').then(res=>{
  console.log(res,22222);
})
}




</script>

<style lang="less">
#Home {
  margin:0;
  padding:0;
  font-family:PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif;
  
}

#head{
  text-align: center;
  color: #949596;
  background-color:#1f2022;
  height:60px;
  div{
    float:right;
    margin-top:20px;
    margin-right:20px;
    a{
      padding:10px 10px ;
    }
  }
}
@media screen and (max-width:724px){
  #head>div{
    display:none;
  }
}
.home{
  clear:both;
  height:397px;
  width:100%;  
}
.book{
   box-shadow: 0 -1px 10px  rgb(70, 69, 69);
   z-index:3;
}
.bgcol{
    background-color:#1f2124;
}
.diva{
  padding-left:30px;
  margin-bottom:15px;
  height:150px;
  margin-top:30px;
  padding-top:30px;
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
.mar-bot5{
  margin-bottom:50px;
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
>>>>>>> e132d484de16d512aa2ce2ccf800d56550b1cba9
