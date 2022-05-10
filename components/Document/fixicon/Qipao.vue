<template>
  <div>
    <span class="text border absolute right-0 bottom-8 text-sm text-center">2</span>
    <span class="back flex justify-center items-center">
      <img src="~assets/images/icon/qipao.svg" alt=""/>
    </span>
  </div>
</template>

<script>
export default {
  name: "Qipao"
}
</script>

<style scoped>
img{
  width:20px;
  height:20px;
}
.back{
  width:42px;
  height:42px;
  border-radius:42px;
  background:#ffffff;
  box-shadow: 0 1px 4px -2px rgb(0 0 0 / 13%), 0 2px 8px rgb(0 0 0 / 8%), 0 8px 16px 4px rgb(0 0 0 / 4%);
}
.text{
  width:22px;
  height:22px;
  border-radius:22px;
  display:inline-block;
}
</style>