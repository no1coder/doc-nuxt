<template>
  <div class="w-1/6 bg-blue-200  mx-6 side pt-2 ">

    <div class="flex items-center space-x-4 p-4">
      <div>
        <n-avatar
            round
            :size="48"
            src="/assets/images/头像.jpeg"
        />
      </div>
      <div>褒浮</div>

    </div>

    <div class="p-4">
      <n-button >
        写文章
      </n-button>
    </div>

<!--    手风琴组件-->
    <div class="accordion">
        <n-menu
            :options="menuOptions"
            @update:value="handleUpdateValue"
            :default-expanded-keys="defaultExpandedKeys"
            :default-value="defaultValue"
            accordion
                 />
    </div>

  </div>

</template>

<script lang="ts" setup>
import {defineComponent, h, Component, defineProps} from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon
} from '@vicons/ionicons5'

let route = useRoute();

let props = defineProps({
  defaultValue:{
    type:String
  }
})
console.log(props)

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
// 点击的值
const handleUpdateValue = (key: string, item: MenuOption) => {
  // props.one(key)
    console.log(item)
  // 跳转页面
  return navigateTo({
    path: item.url,
  })

}

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'shoye',
    icon: renderIcon(FishIcon),
    url:'/creator/home',
  },
  {
    label: '内容管理',
    key: 'neirong',
    icon: renderIcon(PawIcon),
    url:'/creator/content',
    children: [
      {
        label: '文章管理',
        key: 'wengzhang',
        url:'/creator/content/article',
      },
      {
        label:'专栏管理',
        key:'zhuanlan',
        url:'/creator/content/column',
      }
    ]
  },
  {
    label: '数据中心',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '内容数据',
        key: 'shuju'
      },
      {
        label: '关注着数据',
        key: 'guanzhushuju'
      },
    ]
  },
  {
    label: '活动中心',
    key: 'houdon',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '创作活动',
        key: 'houdon'
      }
    ]
  },
  {
    label: '帮助中心',
    key: 'banghzhu',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '常见问题',
        key: 'changjian'
      }
    ]
  }
]

const defaultExpandedKeys = ['neirong', 'both','houdon','banghzhu']

</script>

<style scoped lang="less">

.n-button {
  -webkit-appearance: button;
   background-color:#1D7DFA ;
  background-image: none;
  width: 208px;
  height: 36px;
}
::v-deep.n-menu .n-submenu .n-menu-item-content {
  height: 48px;
}
.side {
  //position: fixed;
  //width: 240px;
  top: 7rem;
  bottom: 0;
  background: #fff;
  z-index: 2;
  overflow: hidden;
  margin-bottom: 24px;
}
</style>