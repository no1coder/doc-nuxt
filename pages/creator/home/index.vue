<template>
      <CreatorLayout :defaultValue="defaultValue">
        <template #creatoy_body>
          <div class="bg">
            <div class="flex justify-between items-center p-6  ">
        <span class="flex items-center ">
          <span class="text-2xl">数据概览</span>
          <span><img src="assets/images/问号.svg"></span></span>
              <span class="flex items-center">
          <span class="text-slate-500">查看更多</span>
          <span><img src="assets/images/右.svg"></span>
        </span>
            </div>

            <n-divider />

            <div class="py-4 ">
              <div class="flex items-center justify-around m-2 ">
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
                  <span class="flex items-center">文章显示数<img src="assets/images/问号.svg"></span>
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

              <div class="flex items-center justify-around m-2 ">
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
                  <span class="flex items-center">文章显示数<img src="assets/images/问号.svg"></span>
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
      </CreatorLayout>



</template>

<script setup>
// import Sidebar from "../components/sidebar";
// import Activities from "../components/activities";
// import Wengzhang from "../components/wengzhang";
import CreatorLayout from "../../../components/creator/layout";

let defaultValue = ref('shoye')

// const one = (key ) => {
//   demo.value = key
//   console.log(demo.value)
// }




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
.bg{
  background: white;
}

</style>