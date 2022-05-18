<template>
    <div class="search relative w-3/12 flex items-center justify-end ">
      <span class="w-6 h-6 mr-4 absolute t-4 right-0 z-50" :class="{hidden:!isshowIn}" @click="showIn"><img src="~assets/images/icon/fangdajing.svg" alt="" class="w-6 h-6 mr-4 "></span>
      <div class="flex items-center" :class="{hidden:isshowIn}" @blur="showOut">
        <span class="w-6 h-6 mr-4 absolute z-50 t-4"><img src="~assets/images/icon/fangdajing.svg" alt="" class="w-6 h-6 mr-4" @blur="showOut"></span>
        <n-input v-model:value="value" type="text" placeholder="搜索" autofocus @blur="showOut"/>
      </div>
    </div>
</template>

<script setup>

const inputVal = ref(null);
let isshowIn = ref(true);
let shows = ref(false)
const showIn = ()=>{
  isshowIn.value = !isshowIn.value;
}
const showOut = ()=>{
  isshowIn.value = true;
  console.log(isshowIn.value)
  return isshowIn.value
}

</script>

<style scoped>
.search{
  width:300px;
}
.s-input{
  width:300px;
}
.hidden{
  display: none;
}

.n-input--stateful{
  width: 270px!important;
  padding:0 14px;
  background: rgba(255, 255, 255, 0);
  border:yellowgreen!important;
  box-shadow: 0 0 0 2px rgb(24 160 88 / 20%);
}
</style>