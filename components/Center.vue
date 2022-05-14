<template>
  <div class="center container mx-auto  flex items-center place-content-center flex-col pt-8 ">

   <h1 class="h1">默认知识库</h1>
    <div class="two"><ul class="flex items-center space-x-4 p-6">
      <li >

        <n-popover
            style="width: 350px"
            content-style="padding: 7px;"
            placement="bottom"
            trigger="hover"
            @update:show="handleUpdateShow"
        >
          <template #trigger>
            <n-button> <n-avatar
                round
                size="small"
                src="assets/images/头像.jpeg"
            /></n-button>
          </template>
          <span class="w-2/3">
             <n-avatar
                 round
                 size="large"
                 src="assets/images/头像.jpeg"
             />
           <span>加油</span>
             <n-divider />
            <span>关注者 0</span>
            <span>关注了 0</span>
          </span>
        </n-popover>



      </li>
      <li>
        <div>

          <n-avatar
              round
              size="small"
              src="assets/images/shenglve_1.png"
          />
        </div>
        </li>
    </ul> </div>
    <div class="three"><span class="flex items-center space-x-4 p-3">
                    <button type="button" class="border border-slate-300 px-4 py-1">已关注1</button>
                    <span class="flex items-center space-x-2 border py-1 px-2">
                          <img src="assets/images/wujiaoxing_kong.png" alt="">
                          <button type="button" class=" border-slate-300">收藏</button>
                    </span>
              </span></div>
    <div class="four flex justify-between w-full pt-3">

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
                                  <span><img src="assets/images/zancunxiang.png" alt=""></span>
                                  <span>暂存箱（2）</span>
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