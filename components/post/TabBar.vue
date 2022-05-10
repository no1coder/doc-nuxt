
  <template>
  <div class="tab">
    <div class="tabBox">
      <img src="@/assets/post/首页.png"/><br/>
      <div class="text"> &nbsp; 书  城</div>
      </div>
    <div class="tabBoxR">
      <img src="@/assets/post/图书.png"/><br/>
      <div class="text">下载微信读书App·百万好书免费读</div>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'TabBar',
  props: {
    
  }
}
</script>

<style scoped lang="less">

  .tab{
    width:100%;
    height:60px;
    // box-shadow: ;
    display:flex;
    justify-content:flex-start;
    position: fixed;
    background-color:white;
    bottom:0px;
    box-shadow: 0 -5px 15px  rgb(168, 167, 167);
    
    .tabBox{
      width:50%;
      color:#5D646E;
      font-weight: 700;
    }
    .tabBoxR{
      background: linear-gradient(90deg,#0a93fc,#0aaef5);
      width:50%;
      color:white;
      font-weight: 700;
    }
    
  }
  img{
    width:20px;
    height:20px;
    margin-top:10px;
    margin-bottom:-5px;
    margin-left:49%;
  }
  .text{
    width:100%;
    // border:1px solid red;
    text-align:center;
    padding:7px;
  }

</style>
