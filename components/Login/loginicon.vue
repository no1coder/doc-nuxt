<template>
  <div class="flex space-x-20 p-1">
    <img class="ml-24 w-11" src="../../assets/img/wx.png" alt="微信登录" @click="loginwx">
    <img class="w-11" src="../../assets/img/QQ.png" alt="QQ登录" @click="loginqq">
  </div>
</template>

<script setup>

const loginwx = () =>{
  console.log('微信扫码登录')
}

const loginqq = () =>{
  console.log('QQ扫码登录')
}


</script>

<style scoped>

</style>