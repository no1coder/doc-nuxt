<template>

    <div>
      <!-- 头部 -->
      <div class="bg-stone-900 box-border border-b border-b-zinc-800">
        <nav class="container m-auto h-16 flex items-center">
          <NuxtLink to="/">
            <h1 class="logo h-8"></h1>
          </NuxtLink>
          <input class="navbar-input h-9 w-4/12 text-sm px-9 mx-12 rounded-2xl" type="text" placeholder="搜索">
          <div class="flex justify-end items-center w-full">
            <NuxtLink class="opacity-70 ml-3 text-base text-white font-medium">
              首页
            </NuxtLink>
            <span class="opacity-30 w-px h-4 bg-white ml-5 inline-block"></span>
            <button class="opacity-70 ml-3 text-base text-white font-medium">
              传书到手机
            </button>
            <span class="opacity-30 w-px h-4 bg-white ml-5 inline-block"></span>
            <NuxtLink class="opacity-70 ml-3 text-base text-white font-medium">
              墨水屏版
            </NuxtLink>
            <span class="opacity-30 w-px h-4 bg-white ml-5 inline-block"></span>
            <button class="opacity-70 ml-3 text-base text-white font-medium">
              手机版
            </button>
            <span class="opacity-30 w-px h-4 bg-white ml-5 inline-block"></span>
            <NuxtLink class="opacity-70 ml-3 text-base text-white font-medium">
              微信听书
            </NuxtLink>
            <span class="opacity-30 w-px h-4 bg-white ml-5 inline-block"></span>
            <button class="opacity-70 ml-3 text-base text-white font-medium">
              登录
            </button>
          </div>
        </nav>
      </div>

      <div class="bg-stone-900">
        <div class="container m-auto min-h-screen flex">
          <div class="box-border border-r border-r-zinc-800 box-border w-48 fixed h-full">
            <div class="py-2.5 w-full">
              <ul class="overflow-auto">
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
                <li class="overflow-hidden h-14 rounded-l-md">
                  <NuxtLink class="text-white px-5 block text-lg lead h-full opacity-70 bg-gradient-to-r hover:from-black hover:to-stone-900">男生小说榜</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <Card></Card>
<!--          <div class="py-5 ml-48">
            <div class="flex flex-wrap">
              <NuxtLink>
                <div class="flex py-5 overflow-hidden items-center">
                  <p class="flex-shrink w-20 text-xl text-center text-white">1</p>
                  <div class="flex-shrink-0 booklist block">
                    <img src="https://wfqqreader-1252317822.image.myqcloud.com/cover/336/13899336/t6_13899336.jpg" alt="" class="w-full h-full">
                  </div>
                  <div class="flex-1 pl-8">
                    <p class="text-white overflow-hidden text-lg h-auto max-h-14">最强反套路系统</p>
                    <p class="mt-2.5 text-sm max-h-5 h-auto text-slate-400">
                      <NuxtLink>
                        太上布衣
                      </NuxtLink>
                    </p>
                    <p class="flex items-center mt-2 overflow-hidden text-slate-400">
                    <span class="text-sm">
                      <span class="mr-0.5 text-sm not-italic">1.6</span>万人今日阅读
                    </span>
                      <span class="w-px h-3 mx-3 bg-slate-400 inline-block"></span>
                      <span class="text-sm">推荐值
                      <span class="text-sm not-italic">74.4%</span>
                    </span>
                      <img class="h-6 flex-shrink-0 ml-2" src="https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/book_ratings_80.svg">
                    </p>
                    <p class="mt-2 text-sm leading-5 truncate w-full max-w-md h-full max-h-11 text-slate-400">
                      最强反套路，我反手就是一个套路，横扫修仙界无敌手，就问一声还有谁？生死看淡，不服就干！ “年轻人，当年我开始套路的时候，你们还在穿开裆裤！” 徐缺踏上了一条套路之路，每天不是在套路，就是正在去套路的路上！
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>-->
        </div>
      </div>

    </div>

</template>

<script setup>

import Card from "../../components/Categories/Card";
</script>

<style scoped>
.logo{
  width:117px;
  background:url("plugins/category/logo_small.45f3a627.png");
}
.navbar-input{
  background: url("plugins/category/icon_search.5731b0d1.png");
  background-color:rgba(246,246,249,.1);
  background-size: 20px 20px;
  background-repeat:no-repeat;
  background-position:12px 8px;
  color:#4e5054;
}
.lead{
  line-height:56px
}
/*.booklist{*/
/*  width:108px !important;*/
/*  height:156px !important*/
/*}*/
</style>