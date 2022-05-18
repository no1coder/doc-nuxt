<template>
  <div class="pt-[4.5rem] ml-0 lg:ml-48">
    <h1 class="text-white ml-2 lg:ml-7 lg:text-xl" :id="items.id">
      {{items.name}}
    </h1>
    <div class="grid grid-cols-1 2xl:grid-cols-2">
      <NuxtLink class="bg-gradient-to-r hover:from-black hover:to-stone-900" v-for="(item,index) in a.items.books.data" :key="item.id">
        <div class="flex py-5 overflow-hidden items-center">
          <p class="flex-shrink w-12 lg:w-20 text-xl text-center text-white">{{index+1}}</p>
          <div class="flex-shrink-0 w-16 h-24 lg:w-28 lg:h-40 block">
            <img :src="item.cover_url" alt="封面" class="w-full h-full" />
          </div>
          <div class="flex-1 pl-8">
            <p class="text-white overflow-hidden text-lg h-auto max-h-14">{{item.title}}</p>
            <p class="mt-2.5 text-sm max-h-5 h-auto text-slate-400">
                太上布衣
            </p>
            <p class="flex items-center mt-2 overflow-hidden text-slate-400 ">
              <span class="text-sm hidden sm:block">
                <span class="mr-0.5 text-sm not-italic">1.6</span>万人今日阅读
              </span>
              <span class="w-px h-3 mx-3 bg-slate-400 inline-block hidden sm:block"></span>
              <span class="text-sm">推荐值
                      <span class="text-sm not-italic">74.4%</span>
                    </span>
              <img class="h-6 flex-shrink-0 ml-2" src="https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/book_ratings_80.svg" alt="标签" />
            </p>
            <p class="mt-2 text-sm leading-5 truncate w-full max-w-md h-full max-h-11 text-slate-400 hidden sm:block">
              {{item.introduction}}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

let a = defineProps({
  items:{
    type:Object,
    default:null
  },
  obj:{
    type:Object,
    default:()=>{
      return {}
    }
  }
})


</script>

<style scoped>

</style>