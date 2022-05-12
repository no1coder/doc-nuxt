
  <template>
  <div class="card hover" @mouseover="over" @mouseout="out" @click=(qq)>
    <div :body-style="{ padding: '0px' }">
        <img
        src="@/assets/post/image.jpeg"
        class="image"
        />
        <div class="pt-3"> 
            <div class="bookName">让我们灵魂激荡身体欢愉：一个男科医生的手记</div>
            <div class="bookWhiter">大老板</div>
        </div>
    </div>
  </div>
   
</template>

<script setup>



const qq = ()=>{
f.get('/api/book').then(res=>{
  console.log(res,22222);
 })
}


// card.mouseover(function(){
//   console.log('移入');
// })
// card.mouseout(function(){
//   console.log('移出')
// })

</script>

<style  scoped>

.card{
    margin:5px 0px 0px 20px ;
    float:left;
    color:white;
    padding-bottom:20px;
    border-bottom:1px solid rgb(54, 54, 54);
    font-family: DIN-Regular,PingFang SC,-apple-system,SF UI Text,Lucida Grande,STheiti,Microsoft YaHei,sans-serif;
}
img{
    margin-top:10px;
    margin-left:20px;
    width: 64px;
    height: 92px ;
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
  background:linear-gradient(to right,#141618,#212224);
  border-radius:5px;
}



</style>
