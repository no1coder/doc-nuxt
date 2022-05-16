<template>
  <div class="center container mx-auto  flex items-center place-content-center flex-col pt-8 ">

      <h1 class="h1">默认知识库</h1>

      <span class="flex items-center space-x-4 p-6">
        <n-avatar
            round
            size="small"
            src="assets/images/头像.jpeg"
        />

        <n-avatar
            round
            size="small"
            src="assets/images/shenglve.png"
        />
      </span>

      <div class="four flex justify-between w-4/5 pt-3">

            <div>
              <n-divider class="pt-4" />
              <a class="border-b-4 border-indigo-500">目录</a>
            </div>

            <div  class="flex items-center space-x-4">
                                <span  class="flex items-center space-x-2">
                                  <span><img src="assets/images/zancunxiang.png" alt=""></span>
                                  <span>暂存箱（2）</span>
                                </span>

                                 <span  class="flex items-center space-x-2">
                                    <span><img src="assets/images/muluguanli.png" alt=""></span>
                                    <span>目录管理</span>
                                  </span>
            </div>
      </div>
    </div><!--  end center-->
</template>

<script>
export default {
  name: "Center"
}
</script>

<style scoped>
img{
  width: 28px;
  height: 28px;

}

.h1 {
  font-size: x-large;
  font-weight: bold;
}
</style>