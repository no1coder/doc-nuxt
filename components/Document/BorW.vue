<template>
  <div :class="{hidden:isChange}" @click="change">
    <img src="~assets/images/icon/taiy.svg" alt="" class="h-8 w-8">
  </div>
  <div :class="{hidden:!isChange}" @click="change">
    <img src="~assets/images/icon/yuel.svg" alt="" class="h-8 w-8">
  </div>
</template>

<script setup>
let isChange = ref(true)
const change = ()=>{
  isChange.value = !isChange.value
  localStorage.theme = 'dark'
      console.log(localStorage.theme)
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
onMounted(()=>{

  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

})



//
// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'
//
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'


</script>

<style scoped>

</style>