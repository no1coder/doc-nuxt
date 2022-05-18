<template>
<div class="mt-7 w-full">
  <div class="font-bold text-sm border-b border-solid h-10 dark:text-white">所有评论（2）</div>

  <div class="review-content flex py-5 border-b border-gray-100">
    <div class=" mr-3">
      <img src="~assets/images/icon/image.png" alt="" class="view-image w-8 h-8"/>
    </div>
    <div>
      <div class="mb-2">
        <a class="text-sm text-gray-700 mr-3 dark:text-white">青木</a>
        <span class="text-xs text-gray-500 dark:text-white">2020-11-14 17:26</span>
      </div>
      <div class="mb-2">
        <span class="text-sm dark:text-white">这两天看了大佬的整理    心思缜密  划分清晰  厉害~</span>
      </div>
      <div class="flex">
        <img src="~assets/images/icon/qipao.svg" alt="" class="w-4 h-4 mr-2 "/>
        <img src="~assets/images/icon/biaoqing.svg" alt="" class="w-4 h-4"/>
      </div>
    </div>
  </div>
  <div class="review-content flex py-5 border-b border-gray-100">
    <div class=" mr-3">
      <img src="~assets/images/icon/image.png" alt="" class="view-image w-8 h-8"/>
    </div>
    <div>
      <div class="mb-2">
        <a class="text-sm text-gray-700 mr-3 dark:text-white">青木</a>
        <span class="text-xs text-gray-500 dark:text-white">2020-11-14  17:26</span>
      </div>
      <div class="mb-2">
        <span class="text-sm dark:text-white">这两天看了大佬的整理    心思缜密  划分清晰  厉害~</span>
      </div>
      <div class="flex">
        <img src="~assets/images/icon/qipao.svg" alt="" class="w-4 h-4 mr-2 "/>
        <img src="~assets/images/icon/biaoqing.svg" alt="" class="w-4 h-4"/>
      </div>
    </div>
  </div>

  <div class="addReview border-2 h-96 w-full py-4 mt-12 mb">

  </div>
</div>
</template>

<script>
export default {
  name: "Review"
}
</script>

<style scoped>
.view-image{
  border-radius:32px;
}
</style>