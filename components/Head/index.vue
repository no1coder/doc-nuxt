<template>
  <div class="bg-stone-900 box-border border-b border-b-zinc-800 fixed w-full">
    <nav class="container m-auto h-16 flex items-center">
      <NuxtLink to="/" class="hidden sm:block">
        <h1 class="logo h-8"></h1>
      </NuxtLink>
      <input class="outline-0 navbar-input h-9 w-4/12 text-sm px-9 mx-5 sm:mx-12 rounded-2xl" type="text" placeholder="搜索">
      <div class="flex justify-end items-center w-48 mr-10 md:w-full">
        <div class="hidden lg:block items-center">
          <NuxtLink class="opacity-70 ml-3 text-base text-white font-medium" to="/">
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
        </div>
        <button class="opacity-70 ml-3 text-base text-white font-medium block">
          登录
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.logo{
  width:117px;
  background:url("../../plugins/category/logo_small.45f3a627.png");
}
.navbar-input{
  background: url("../../plugins/category/icon_search.5731b0d1.png");
  background-color:rgba(246,246,249,.1);
  background-size: 20px 20px;
  background-repeat:no-repeat;
  background-position:12px 8px;
  color:#4e5054;
}
</style>