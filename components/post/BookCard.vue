
  <template>
  <div class="card hover">
    <div :body-style="{ padding: '0px' }">
        <img
        src="@/assets/post/image.jpeg"
        class="image"
        />
        <div> 
            <div class="bookName">1. 古诗词里面的快意人生</div>
            <div class="bookWhiter">大老板</div>
        </div>
    </div>
  </div>
   
</template>

<script>

</script>

<style  >

.card{
    width:40%;
    margin:5px 0px 20px 40px ;
    float:left;
    color:white;
    padding-bottom:20px;
    border-bottom:1px solid rgb(54, 54, 54);
}
img{
    width:30%;
    float:left;
}
.bookName{
    font-size: 15px;
    font-weight: 500;
    color: #eef0f4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: normal;
    height:20px;
    margin:10px 0 10px 0;
    padding-left:18px;
}
.bookWhiter{
    padding-left:32px;
    text-align:left;
    font-size: 12px;
    z-index: 2;
    color: #8a8c90;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: normal;
}


.hover:hover{
  background:-webkit-linner-gradient(
    left,#1f2124,#5a5e64
  );
}



</style>
