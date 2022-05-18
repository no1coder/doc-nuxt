<template>

    <div class="w-4/5 act ">
      <div>
        <div class="flex justify-between items-center p-6 ">
        <span class="flex items-center ">
          <span class="text-2xl">数据概览</span>
          <span><img src="../../assets/images/问号.svg"></span></span>
          <span class="flex items-center">
          <span class="text-slate-500">查看更多</span>
          <span><img src="../../assets/images/右.svg"></span>
        </span>
        </div>

        <n-divider />

        <div class="flex items-center justify-around mt-8 ">
          <n-card
              embedded
              :bordered="false"
          >
            <p>总关注着数</p>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

          <n-card
              embedded
              :bordered="false"
          >
            <span class="flex items-center">文章显示数<img src="../../assets/images/问号.svg"></span>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

          <n-card
              embedded
              :bordered="false"
          >
            <p>文章阅读数</p>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

        </div>

        <div class="flex items-center justify-around mt-8 ">
          <n-card
              embedded
              :bordered="false"
          >
            <p>总关注着数</p>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

          <n-card
              embedded
              :bordered="false"
          >
            <span class="flex items-center">文章显示数<img src="../../assets/images/问号.svg"></span>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

          <n-card
              embedded
              :bordered="false"
          >
            <p>文章阅读数</p>
            <p class="text-2xl font-bold p-2">0</p>
            <p>较前日 -- </p>
          </n-card>

        </div>
      </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
img{
  width: 14px;
  height: 14px;
}
.act{
  background: #fff;
  height: 450px;
}
.n-card {
  max-width: 300px;
}
</style>