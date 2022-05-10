
  <template>
  <div class="ClassList">
    <div class="Class">分类榜单</div>
    <div id="List" class=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      <div class="List hover">
        <!-- {{name}} · {{number}} 本 -->
        name · number 本
      </div>
      
      
      
    </div>


    

  </div>

</template>

<script>
export default {
  name: 'ClassList',
  props: {
    
  }
}
</script>

<style scoped lang="less">
.ClassList{
  font-size:20px;
  margin:0 30px;
  color:white;

  .Class{
    border-bottom:1px solid rgb(54, 54, 54);
    text-align:left;
    padding:70px 0  20px ;
  }
  #List{
    // display:flex;
    // justify-content: flex-start;
    
    .List{
      border-bottom:1px solid rgb(54, 54, 54);
      margin-right:21px;
      text-align:left;
      padding:18px 0 18px 5px;
      float:left;
      font-size:1rem;

    }
  }
  
}
.hover:hover{
  background:linear-gradient(to right,#15171a,#212224);
  border-radius:5px;
}

</style>
