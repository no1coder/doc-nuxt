<template>
  <div class="center container mx-auto  flex items-center place-content-center flex-col pt-10 ">
    <div class="one"><a class="text-2xl ">默认知识库</a> </div>
    <div class="two"><ul class="flex items-center space-x-4 p-6">
      <li><img src="assets/images/头像.jpeg" alt="" class="rounded-full"></li>
      <li><img src="assets/images/shenglve_1.png" alt="" class="rounded-full"></li>
    </ul> </div>
    <div class="three"><span class="flex items-center space-x-4 p-3">
                    <button type="button" class="border border-slate-300 px-4 py-1">已关注1</button>
                    <span class="flex items-center space-x-2 border py-1 px-2">
                          <img src="assets/images/wujiaoxing_kong.png" alt="">
                          <button type="button" class=" border-slate-300">收藏</button>
                    </span>
              </span></div>
    <div class="four flex justify-between w-3/5 pt-3">

          <div>
            <a class="border-b-2 border-slate-900 p-1">目录</a>
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

</style>