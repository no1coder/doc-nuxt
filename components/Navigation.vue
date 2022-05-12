<template>
  <div class="flex  justify-between container mx-auto text-sm p-1 mt-10" >
<!--    左-->
    <div class="left flex items-center space-x-4">
          <div>
                <img src="assets/images/头像.jpeg" alt="" class="rounded-full">
          </div>
          <div>
                <a class="text-slate-500 font-mono  cursor-pointer">褒浮<i>/</i></a>
          </div>
          <div>
                <a class="  cursor-pointer">默认知识库</a>
          </div>
          <div>
                <n-tooltip placement="top-start" trigger="hover" >
            <template #trigger>
              <n-button> <svg class="icon-svg index-module_size_ROqxd" style="width: 13px; min-width: 13px; height: 13px;">
                <use xlink:href="#permission-private">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" id="permission-private">
                    <g fill="none" fill-rule="evenodd"><path d="M200 93c13.255 0 24 10.745 24 24v100c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24V117c0-13.255 10.745-24 24-24h144Zm0 20H56a4 4 0 0 0-3.995 3.8L52 117v100a4 4 0 0 0 3.8 3.995l.2.005h144a4 4 0 0 0 3.995-3.8l.005-.2V117a4 4 0 0 0-3.8-3.995L200 113Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                      <path d="M128 15c29.823 0 54 24.177 54 54v44H74V69c0-29.823 24.177-54 54-54Zm0 20c-18.59 0-33.695 14.92-33.995 33.438L94 69v24h68V69c0-18.59-14.92-33.695-33.438-33.995L128 35Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                      <rect fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)" x="110" y="138" width="36" height="36" rx="18"></rect>
                      <rect fill="#8A8F8D" mask="url(#permission-private_b)" x="118" y="156" width="20" height="40" rx="10"></rect></g></svg>
                </use>
              </svg></n-button>
            </template>
            私密知识库
          </n-tooltip>
          </div>
    </div>
<!--  右-->
    <div class="right flex item-center space-x-4  ">
          <div>
                  <n-popover trigger="hover" :delay="500" :duration="500">
                  <template #trigger>
                    <n-button class="border border-slate-600 rounded-md hover:border-solid hover:bg-white hover:text-lime-500 hover:border-lime-500 px-2">分享</n-button>
                  </template>
                  <span>分享</span>
                  </n-popover>
          </div>
          <div>
                  <n-dropdown :options="User">
                  <n-button class="border-slate-600 rounded-md bg-emerald-500 border-8a8a8a text-white cursor-pointer hover:bg-emerald-400 px-6">新建</n-button>
                  </n-dropdown>
          </div>
          <div>
                <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                      <n-button >
                        <a class="hover:bg-slate-200 w-8 cursor-pointer mt-1 ">
                        <svg class="" style="width: 20px; min-width: 20px; height: 20px;">
                          <use xlink:href="#more-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="more-circle"><g fill="none" fill-rule="evenodd"><path d="M74 113c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm54 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm54 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="currentColor" fill-rule="nonzero"></path><circle stroke="currentColor" stroke-width="18" cx="128" cy="128" r="103"></circle></g></svg>
                          </use>
                        </svg>
                      </a>
                      </n-button>
                </n-dropdown>
          </div>

      <template>
        <n-dropdown
            :options="options"
            placement="bottom-start"
            trigger="click"
            @select="handleSelect"
        >
          <n-button>人物和食物</n-button>
        </n-dropdown>
      </template>
    </div>
  </div><!--end nav-->
</template>

<script lang="ts" setup>
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  BuildSharp, CashOutline as CashIcon
} from '@vicons/ionicons5'
import { NIcon} from 'naive-ui'
import type { Component } from 'vue'
import {h} from "vue";

const renderImg = (src) => {
  return () => {
    return h('img', {
      src,
      style:"width:20px;height:20px"
    })
  }
}
const User = [
  {
    label: '文档',
    key: 'wd',
    icon: renderImg('assets/images/wendang.svg')

  },
  {
    label: '表格',
    key: 'bg',
    icon: renderImg('assets/images/biaoge(1).svg')

  },
  {
    label: '画板',
    key: 'hb',
    icon: renderImg('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')

  },
  {
    label: '数据表',
    key: 'sjb',
    icon: renderImg('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')

  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '从模板新建...',
    key: 'mb',
    icon: renderImg('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')

  },
  {
    label: '导入',
    key: 'dr',
    icon: renderImg('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')

  },
]

const  options = [
  {
    label: '文档',
    key: "wd"
  },
  {
    label: '表格',
    key: 'bg'
  },
  {
    label: '画板',
    key: 'hb'
  },
  {
    label: '数据表',
    key: 'sjb'
  },
  {
    label: '从模板新建',
    key: 'mbxj'
  },
  {
    label: '导入',
    key: 'dr'
  },
]


</script>


<style scoped>
img{
  width: 28px;
  height: 28px;

}
.n-button{
  --n-border: 1px solid rgba(224, 224, 230, 0) !important;
  --n-border-hover: 1px solid rgba(54, 173, 106, 0) !important ;
}
</style>