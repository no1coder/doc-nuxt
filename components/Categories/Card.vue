<template>
  <div class="pt-[4.5rem] ml-0 lg:ml-48">
    <h1 class="text-white ml-2 lg:ml-7 lg:text-xl" :id="items.id">{{items.name}}</h1>
    <div class="grid grid-cols-1 2xl:grid-cols-2">
      <NuxtLink class="bg-gradient-to-r hover:from-black hover:to-stone-900">
        <div class="flex py-5 overflow-hidden items-center">
          <p class="flex-shrink w-12 lg:w-20 text-xl text-center text-white">1</p>
          <div class="flex-shrink-0 w-16 h-24 lg:w-28 lg:h-40 block">
            <img src="https://wfqqreader-1252317822.image.myqcloud.com/cover/336/13899336/t6_13899336.jpg" alt="封面" class="w-full h-full" />
          </div>
          <div class="flex-1 pl-8">
            <p class="text-white overflow-hidden text-lg h-auto max-h-14">最强反套路系统</p>
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
              最强反套路，我反手就是一个套路，横扫修仙界无敌手，就问一声还有谁？生死看淡，不服就干！ “年轻人，当年我开始套路的时候，你们还在穿开裆裤！” 徐缺踏上了一条套路之路，每天不是在套路，就是正在去套路的路上！
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

let book = ref({})
book.value = a.obj
console.log(1111111111);
console.log(a.obj);
</script>

<style scoped>

</style>