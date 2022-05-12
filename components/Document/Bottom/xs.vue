<template>
<div>
  <ul>
    <li v-for="items in data" :key="items.id" :class="[{active:items.id === isActive}]" id="lii" class="ac" @click="show(items.id)">{{items.name}}</li>
  </ul>
</div>
</template>

<script setup>
import {ref} from 'vue';
let isActive = ref()
const show = (btn)=>{
 isActive.value = btn;
 console.log(isActive.value)
}

const data = [
  {id:1,name:'张三'},
  {id:2,name:'张三'},
  {id:3,name:'张三'},
  {id:4,name:'张三'},
  {id:5,name:'张三'},
  {id:6,name:'张三'},
]
</script>

<style scoped>
.ac{
  width:100px;
  height:200px;
  display: inline-block;
  background:pink;
}
.active{
  background:blue;
}
</style>