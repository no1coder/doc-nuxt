
<template>
  <!--左侧标签内容-->
  <div class="flex">
    <div

        class="bg-zinc-800 min-h-screen "
        style="overflow: hidden;"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
      <!--      大图-->
      <div class="h-20 pl-4 pt-4 bg-zinc-800 inline-block w-full md:w-[16.34rem]"  v-if="!collapsed">
        <img src="http://webstack.cc/assets/images/logo@2x.png" alt="">
      </div>
      <!--  小图-->
      <div class="h-20 bg-zinc-800 inline-block" v-show="collapsed">
        <img src="http://webstack.cc/assets/images/logo-collapsed@2x.png" class="w-10 m-5" alt="">
      </div>

      <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="category"
          key-field="id"
          label-field="name"
          @update:value="qq"
      />
    </div>


    <!--   右边内容-->
    <div class="w-full">
      <!--      右侧上方内容-->
      <div class="h-14 w-full">
        <div class="md:flex hidden space-y-4 ml-10">
          <div></div>
          <img src="assets/img/list.png" class="w-5 h-4 cursor-pointer " alt="" @click="collapsed1">
          <img src="http://webstack.cc/assets/images/flags/flag-cn.png" class="h-4 ml-9" alt="">
          <span class="text-xs text-slate-400 ml-3 cursor-pointer">Chinese</span>
          <div style="text-align:right" class="text-xs w-11/12 mr-10">
            图标 GitHub
          </div>
        </div>
      </div>

      <!--       右侧下面内容  id绑定右侧数据缆 计算上下可视高度calc(100vh - 3.5rem);-->
      <div class="overflow-auto pb-12" id="content" style="height: 95vh">
<!--        渲染页面数据 api数据到标题 -->
<div  v-for="item in category">
        <div class="bg-gray-100 p-7" >
          <h3 class="font-normal text-base mb-5" :id="item.id">{{ item.name }}</h3>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <WebList/>
            <WebList/>
            <WebList/>
            <WebList/>
            <WebList/>
          </div>
        </div>
</div>

        <!--        页脚-->
        <div class="text-xs text-slate-700 bg w-full ">
          <div class="ml-10 mt-5">© 2017-2022 WebStack design by Viggo</div>
        </div>
      </div>


    </div>

  </div>



</template>

<script setup>
import {defineComponent, h, onMounted, ref} from "vue";
import { reactive, toRefs, onBeforeMount,onUnmounted, onBeforeUpdate, onUpdated, } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}


const category = ref()
 category.value = await f.get(`/api/book_categories`)


//  点击 侧边栏 右边跳转
const qq = (key,item) =>{
  console.log(key,'《《第一个  第二个》》',item)
  var anchor = document.getElementById(key);
  console.log(anchor,123123)
  // 获取div距离顶部高度
  let offsetTop = anchor.offsetTop-80;

  let gundongSize = document.documentElement.scrollTop
  gundong(offsetTop,gundongSize)
  //// document.documentElement.scrollTop = anchor.offsetTop-80;

}

const gundong = (offsetTop,doffset) =>{
  console.log(offsetTop,'<<<<顶部位置',doffset,'<<< 偏移位置')

  console.log(Math.abs(offsetTop - doffset) < 50)

  // 移动位置  将documentElement替换成右侧内容高度id 进行上下计算
  if(Math.abs(offsetTop - doffset) < 50){
    document.getElementById('content').scrollTop = offsetTop
    console.log(3333333)
    return ;
  }

  let gundongSize = null;
  if(offsetTop > doffset){
    gundongSize =  doffset+50
    console.log(4444444)
  }else{
    gundongSize =  doffset-50
    console.log(55555555)
  }
  setTimeout(()=>{
    document.getElementById('content').scrollTop = gundongSize
    // document.documentElement.scrollTop = gundongSize
    gundong(offsetTop,gundongSize)
  },5)
}



let activeKey= ref(null)
let collapsed= ref(false)

//  左右切换侧边栏大小
const collapsed1 = ()=>{
  collapsed.value = !collapsed.value
  console.log(collapsed.value)
}

// 监听并缩放屏幕的侧边栏大小
onMounted(()=>{
  if (!process.server){
    window.onresize = (e)=>{
      if (window.screen.availWidth<1024){
        console.log(123123)
        collapsed.value = true
      }else{
        collapsed.value = false
        console.log(1111)
      }
    }
  }
})

//创建前设置
onBeforeMount (()=> {
  document.querySelector('body').setAttribute('style', 'overflow: hidden;')
})
//销毁前清除
onUnmounted(()=>{
  document.querySelector('body').removeAttribute('style')
})


</script>

<style scoped lang="less">

/*灰色字体*/
:deep .n-menu-item-content-header{
  color: #a6a4a4 !important;
}
/*图标颜色*/
:deep .n-icon{
  color: #a6a4a4 !important;
}

/*鼠标悬浮字体颜色*/
:deep .n-menu-item-content-header:hover{
  /*color: #605d5d !important;*/
}

/*点击后的背景颜色*/
:deep .n-menu .n-menu-item-content.n-menu-item-content--selected::before{
  background-color: rgb(44, 72, 133) !important;
  /*background-color: rgb(39 39 42)*/
}
:deep .n-base-icon svg{
  path{
    background-color: #ffffff;
    border-radius: 0.5rem;
  }
}



</style>