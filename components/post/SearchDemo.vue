<template>

 <div class="search">
    <img src="@/assets/post/logo.png"  class="logo"/>
    <br/>
    <div class="searchBox">
      <span class="searchBox-left"></span>
      <input type='text' placeholder="搜索"/>
      <span class="searchBox-right"></span>
    </div>
    
  </div>
  
   
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search{
  text-align: center;
  background-color:#1f2022;
  height:300px;

}
.logo{
    margin-top:70px;
    height:36px;
    width:160px;
    margin-left:44%;
    margin-bottom:40px;
    
}

.searchBox{
  clear:both;
  position:relative;
    display: flex;
    justify-content:flex-start;
    width:80%;
    height:52px;
    // background-color:rgba(238,240,244,.1);
    background-color:white;
    margin:40px auto 0;
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
    background-image:url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_return_white_2x.bc206fa4.png);
    background-size: 100%;
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
     
  }



</style>
