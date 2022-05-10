<template>
  <div class="w-full" >
    <div class="pt-12 px-12 container">
      <div class="end pb-8 text-center" >
        <img src="../../../assets/images/icon/biaoqing.svg" class="w-8 h-8 inline-block " alt=""/>
        <span class="split" ></span>
        <a>关于文档</a>
        <a>使用帮助</a>
        <a>数据安全</a>
        <a>服务协议</a>
        <span class="split"></span>
        <a>English</a>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "End"
}
</script>

<style scoped>
.split {
  display: inline-block;
  vertical-align: middle;
  margin: 0 8px;
  width: 1px;
  height: 14px;
  background-color: #e8e9e8;
}
a{
  font-size: 14px;
  color:#9b9595;
  margin:0 8px;
}
.end{

}
</style>