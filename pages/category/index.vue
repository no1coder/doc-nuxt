<template>

  <popup-search ref="MaskLayerSearch"/>

  <div>
      <!-- 头部 -->
      <div class="bg-stone-900 box-border border-b border-b-zinc-800 fixed w-full">
        <nav class="container m-auto h-16 flex items-center">
          <NuxtLink to="/" class="hidden sm:block">
            <h1 class="logo h-8"></h1>
          </NuxtLink>
          <input class="outline-0 navbar-input h-9 w-4/12 text-sm px-9 mx-12 rounded-2xl" type="text" placeholder="搜索" @click="masklayer2">
          <div class="flex justify-end items-center w-full">
            <div class="hidden lg:block items-center">
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
            </div>
            <button class="opacity-70 ml-3 text-base text-white font-medium block">
                <login/>
            </button>
          </div>
        </nav>
      </div>

      <div class="bg-stone-900">
        <div class="container m-auto min-h-screen">
          <CategoriesAnchor :obj="category"/>
          <CategoriesCard v-for="items in bookData" :items="items" :key="items.id"/>
        </div>
      </div>

    </div>

</template>

<script setup>

import {ref} from "vue";
import PopupSearch from "../../components/PopupSearch";

let category = ref({})
// category.value = await f.get(`/api/book_categories`)
console.log(category.value )
let bookData = reactive([
  {"id":79,"name":"\u524d\u7aef","hash_id":"2kK"},
  {"id":80,"name":"\u751f\u6001","hash_id":"31M"},
  {"id":81,"name":"\u5927\u6570\u636e","hash_id":"4x1"},
  {"id":82,"name":"python","hash_id":"5yB"},
  {"id":83,"name":"Golang","hash_id":"68n"},
  {"id":386,"name":"Java","hash_id":"924"},
  {"id":387,"name":"PHP","hash_id":"09G"},
  {"id":395,"name":"Linux","hash_id":"pzr"},
  {"id":396,"name":"UI\/UE","hash_id":"qVR"},
  {"id":399,"name":"\u5176\u4ed6","hash_id":"wEm"}
])





// 开启遮罩层搜索的方法 继承过来的
const MaskLayerSearch = ref()
const masklayer2 = () =>{
  MaskLayerSearch.value.masklayer_hide()
}


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


</style>