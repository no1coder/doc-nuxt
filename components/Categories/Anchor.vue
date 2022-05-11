<template>
  <div class="box-border border-r border-r-zinc-800 box-border w-48 fixed h-full top-16">
    <div class="py-2.5 w-full">
      <ul class="overflow-auto">
        <li class="overflow-hidden h-14 rounded-l-md" v-for="items in category" :key="items.id">
          <NuxtLink :class="{active:items.id == 79}" class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900" to="">{{items.name}}</NuxtLink>
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
</script>

<style scoped>
.lead{
  line-height:56px
}
.active{
  background:#2493ee !important;
}
</style>