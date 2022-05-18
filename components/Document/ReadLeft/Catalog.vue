<template>
  <div class="h-screen catalog fixed"  :class="{show : isShow}" @click="CurrentShow">
    <n-space vertical class="h-screen tm">

<!--                <n-switch v-model:value="collapsed" />-->
      <n-layout has-sider class="h-screen relative dark:bg-black">

        <n-layout-sider
            bordered
            :collapsed-width="5"
            show-trigger
            :class="{show : isShow}"
            class="bg-grey dark:bg-black"
        >
          <DocumentReadLeftHead :demo="demo"></DocumentReadLeftHead>
          <button class="w-8 h-8 cang absolute top-24 an_niu flex items-center justify-center border-2"  @click="yc">
            <i :class="{over:isOver}" class="n-base-icon w-8 h-8">
              <svg class="w-6 h-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z" fill="currentColor"></path></svg>
            </i>
          </button>

          <n-tree
              class="ml-4 border-box w-4/5 dark:text-white"
              :data="menuOptions"
              block-line
              :default-expand-all="isExpand"
              :obj="isExpand"
              cascade
              :default-checked-keys="['1-1']"
          />


        </n-layout-sider>
      </n-layout>
    </n-space>

  </div>
</template>

<script setup>
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  demo:{
    type:Function,
    default:() => {
    }
  }
})


let isExpand = ref(false);
let isOver = ref(false);
let isShow = ref(false);
const yc = ()=>{
  isShow.value = !isShow.value;
  isOver.value = !isOver.value;
  props.demo();
  console.log(isShow.value+'catalog')
}

const demo = () => {
  isExpand.value = !isExpand.value
  console.log(isExpand.value)
}

const show3 = () =>{
  isShow.value = true;
  isOver.value = true;
}


const menuOptions =  [
  {
    key: '0',
    label: '哈哈哈',
    children: [
      {
        key: '0-0',
        label: '0-0'
      },
      {
        key: '0-1',
        label: '0-1',
        children: [
          {
            label: '0-1-0',
            key: '0-1-0'
          },
          {
            label: '0-1-1',
            key: '0-1-1'
          }
        ]
      }
    ]
  },
  {
    key: '1',
    label: '1',
    children: [
      {
        key: '1-0',
        label: '1-0'
      },
      {
        key: '1-1',
        label: '1-1',
        children: [
          {
            label: '1-1-0',
            key: '1-1-0'
          },
          {
            label: '1-1-1',
            key: '1-1-1'
          }
        ]
      }
    ]
  }
]

defineExpose({
  show3,
})


</script>
<style scoped>
.catalog{
  width:20%;
  min-width: 200px;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1999;
}
::v-deep(.n-layout-sider-scroll-container){
  min-width: 200px!important;
  transition: min-width .5s cubic-bezier(0.1, 0, 0, 1) 0s;
}
aside{
  max-width: 380px!important;
  min-width: 0;
  width:100% !important;
  will-change: width;
  transition: width .5s cubic-bezier(0.1, 0, 0, 1) 0s;
}
::v-deep(.n-layout-sider .n-layout-toggle-button) {
  display: none!important;
}
.n-layout-sider{
  background-color: #fbfbfb;
}
.n-layout--static-positioned{
  --n-color: rgba(255, 255, 255, 0);
}
::v-deep(.n-collapse-item__header):hover{
  background: #f5f3f3 !important;
  border-radius:5px;
  padding:16px 0;
}
.n-collapse-item__header-main{
  padding:16px 0!important;
}
.cang{
  border-radius:32px;
}
.over{
  transition: transform .5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(
      180deg
  );
}
.show{
  /*transform:translate(-51%);*/
  width:0!important;
  min-width: 0!important;
  will-change: width;
  transition: width 1s cubic-bezier(0.1, 0, 0, 1) 0s;
}
.n-collapse-item{
  margin:0!important;
}
.an_niu{
  transform: translateX(50%) translateY(-50%);
  z-index: 999;
  top: 50%;
  right: 0;
  background:white;
  box-shadow: 0 1px 4px -2px rgb(0 0 0 / 13%), 0 2px 8px rgb(0 0 0 / 8%), 0 8px 16px 4px rgb(0 0 0 / 4%);
}
i{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
svg{
  height:24px!important;
  width:24px!important;
  color: #dad7d7;
  position: absolute;
  transform: rotate(
      180deg
  );
}
.n-layout{
  overflow:visible;
  transition: width .5s cubic-bezier(0.1, 0, 0, 1) 0s;
}
::v-deep(.n-layout-scroll-container){
  overflow-x: visible!important;
}
.n-tree-node-content__text{
  color: #c2b5b5!important;
}
</style>