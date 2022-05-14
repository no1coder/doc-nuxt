<template>
  <div class="box-border border-r border-r-zinc-800 box-border w-48 fixed h-full top-16 hidden lg:block">
    <div class="py-2.5 w-full">
      <ul class="overflow-auto">
        <li class="overflow-hidden  h-14 rounded-l-md" v-for="(items,index) in category" :key="items.id ">
          <NuxtLink :class="{active:active === items.id }" class="text-white px-5 block text-lg leading-[3.5rem] h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">{{items.name}}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
obj:{
  type:Object,
  default:()=>{
    return {}
  }
}
})
let category = ref({})
category.value = props.obj

let active = 79;


</script>

<style scoped>
.active{
  background:#2493ee !important;
}
</style>