<template>
<div id="Home">
  <div id="head">
    <div>
    <a>传书到手机</a> |
    <a>墨水屏版</a> |
    <a>手机版</a> |
    <a>微信听书</a> |
    <a>登录</a> 
    </div>
  </div>  
  

  
  <div class="home">
    <PostSearchDemo />
    <div class="bgcol">
      <div class="diva">
        <!-- 书单左侧飙升出版 -->
        <div>
          <img src="@/assets/post/top200.png" class="logoa"/>
          <div class="spana">微信读书用户近期热度的出版书</div>
        </div>
        <!-- 书单右侧新书出版 -->
        <div >
          <img src="@/assets/post/top200xinshu.png" class="logoa"/>
          <div class="spanb">最近90天出版的热门书籍</div>
        </div>
      </div>
      <!-- 飙升出版书列表 -->
      <div class="bookCardL">
        <PostBookCard/><PostBookCard/><PostBookCard/>
        <PostBookCard/><PostBookCard/><PostBookCard/>
        <div class="cheekAll">
          查看全部
          <div><img src="@/assets/post/右.png" /></div>
        </div>
      </div>
      
      <!-- 新书出版列表 -->
      <div class="bookCardR">
          <PostBookCard/><PostBookCard/><PostBookCard/>
        <PostBookCard/><PostBookCard/><PostBookCard/>
        <div class="cheekAll hover">
          查看全部
          <div><img src="@/assets/post/右.png" /></div>
      </div>
      </div>
       
      
      <div class="divb">
        <!-- 左侧新榜出版表头 -->
        <div>
          <img src="@/assets/post/zongbang.png" class="logoa"/>
          <div class="spanc">微信读书用户最喜爱的出版书</div>
        </div>
        <!-- 书单右侧男生新书 -->
        <div >
          <img src="@/assets/post/gengxin.png" class="logoa"/>
          <div class="spand">最近更新的热门男生小说</div>
        </div>
      </div>
      <!-- 总榜出版书单列表 -->
      <div class="bookCardL mar-bot5">
        <PostBookCard/><PostBookCard/><PostBookCard/>
        <PostBookCard/><PostBookCard/><PostBookCard/>
        <div class="cheekAll">
          查看全部
          <div><img src="@/assets/post/右.png" /></div>
       </div>
      </div>
      
      <!-- 男生更新书单列表 -->
      <div class="bookCardR mar-bot5">
          <PostBookCard/><PostBookCard/><PostBookCard/>
        <PostBookCard/><PostBookCard/><PostBookCard/>
          <div class="cheekAll">
          查看全部
          <div><img src="@/assets/post/右.png" /></div>
        </div>
      </div>
      
      <!-- 分类榜单 -->
      <div class="bgcol classlist">
        <PostClassList/>
      </div>
      <!-- 底部备案编号 -->
      <PostFooterBank/>
    </div>
    <!-- 底部固定栏 -->
    <div class="tabBar">
      <PostTabBar/>

    </div>

  </div>
</div>    

  
</template>

<script >




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
    margin-top:10px;
    margin-right:15px;
    a{
      padding:10px 10px ;
    }
  }
}

// button{
//   background:none;border:none;
//   color:white;
//   font-size:16px;
// }
.home{
  clear:both;
  height:397px;
  width:100%;
  
  
}
.bgcol{
    background-color:#1f2124;
}
.diva{
  height:200px;
  width: 100%;
  color:white;
  display: flex;
  justify-content: flex-start;
  margin-bottom:10px;

}
.diva>div{
  text-align:left;
  width:49%;
  padding:70px 0 0  40px;
}
.divb{
  height:200px;
  width: 100%;
  color:white;
  display: flex;
  justify-content: flex-start;
  margin-bottom:10px;
}
.divb>div{
  text-align:left;
  width:49%;
  padding:70px 0 0  40px;
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
  width:50%;
  background-color:#1f2022;
  margin-top:-50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-strat;
  float:left;
}
.mar-bot5{
  margin-bottom:50px;
}
.cheekAll{
  clear:both;
  width:100%;
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
