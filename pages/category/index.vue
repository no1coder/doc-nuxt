<template>
    <div>
      <!-- 头部 -->
      <Head/>
      <div class="bg-stone-900">
        <div class="container m-auto min-h-screen">
          <CategoriesAnchor :obj="category"/>
          <CategoriesCard v-for="items in book" :items="items" :key="items.id" :obj="items"/>
        </div>
      </div>
    </div>

</template>

<script setup>


import {ref} from "vue";

let category = ref({})
category.value = await f.get(`/api/book_categories`)

let book = ref({})
book.value = await f.get(`/api/books`)
console.log(book.value);


// let bookData = reactive([
//   {"id":79,"name":"\u524d\u7aef","hash_id":"2kK"},
//   {"id":80,"name":"\u751f\u6001","hash_id":"31M"},
//   {"id":81,"name":"\u5927\u6570\u636e","hash_id":"4x1"},
//   {"id":82,"name":"python","hash_id":"5yB"},
//   {"id":83,"name":"Golang","hash_id":"68n"},
//   {"id":386,"name":"Java","hash_id":"924"},
//   {"id":387,"name":"PHP","hash_id":"09G"},
//   {"id":395,"name":"Linux","hash_id":"pzr"},
//   {"id":396,"name":"UI\/UE","hash_id":"qVR"},
//   {"id":399,"name":"\u5176\u4ed6","hash_id":"wEm"}
// ])


</script>

<style scoped>



</style>