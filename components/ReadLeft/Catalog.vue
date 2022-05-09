<template>
  <div class="w-3/12 h-full">

    <n-space vertical class="h-full fixed z-50">

      <!--          <n-switch v-model:value="collapsed" />-->
      <n-layout has-sider class="h-screen">

        <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="5"
            :width="300"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
        >
          <ReadLeftHead></ReadLeftHead>

          <n-collapse class="ml-4 border-box w-4/5">
            <div class="ml-5 whitespace-nowrap overflow-hidden">Zoom 2022 苏州、杭州、合肥开发测试职位，不加班（Java、C++、前端、Android、iOS、Mac）</div>
<!--                            自定义图标-->
            <template #arrow>
              <n-icon>
                <img src="assets/images/icon/sanjiao.svg" class="w-4 h-4" />
              </n-icon>
            </template>


            <n-collapse-item v-for="items in menuOptions"  :title=items.whateverLabel :name="items.name">
              <n-collapse>
                <template #arrow>
                  <n-icon>
                    <img src="assets/images/icon/sanjiao.svg" class="w-4 h-4" />
                  </n-icon>
                </template>

                <n-collapse-item v-for="sub in items.whateverChildren"  :title=sub.whateverLabel :name="sub.name">
                </n-collapse-item>

              </n-collapse>
            </n-collapse-item>
            <n-collapse-item title="红灯" name="2">
              <div class="ml-5">停</div>
            </n-collapse-item>
          </n-collapse>

        </n-layout-sider>
      </n-layout>
    </n-space>

  </div>
</template>

<script lang="ts" setup>


const menuOptions = [
  {
    name:'ting',
    whateverLabel: '且听风吟',
    whateverKey: 'hear-the-wind-sing',

  },
  {
    name:'wanju',
    whateverLabel: '1973年的弹珠玩具',
    whateverKey: 'pinball-1973',


    whateverChildren: [
      {
        name:'shu',
        whateverLabel: '鼠',
        whateverKey: 'rat'
      }
    ]
  },
  {
    name:'yang',
    whateverLabel: '寻羊冒险记',
    whateverKey: 'a-wild-sheep-chase',


  },
  {
    name:'wu',
    whateverLabel: '舞，舞，舞',
    whateverKey: 'dance-dance-dance',

    whateverChildren: [
      {
        name:'renwu',
        type: 'group',
        whateverLabel: '人物',
        whateverKey: 'people',
        whateverChildren: [
          {
            name:'xushi',
            whateverLabel: '叙事者',
            whateverKey: 'narrator',

          },
          {
            name:'yangnan',
            whateverLabel: '羊男',
            whateverKey: 'sheep-man',

          }
        ]
      },
      {
        name:'yinpin',
        whateverLabel: '饮品',
        whateverKey: 'beverage',

        whateverChildren: [
          {
            name:'weishiji',
            whateverLabel: '威士忌',
            whateverKey: 'whisky'
          }
        ]
      },
      {
        name:'food',
        whateverLabel: '食物',
        whateverKey: 'food',
        whateverChildren: [
          {
            name:'sanmingzhi',
            whateverLabel: '三明治',
            whateverKey: 'sandwich'
          }
        ]
      },
      {
        name:'old',
        whateverLabel: '过去增多，未来减少',
        whateverKey: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]


</script>
<style scoped>
.n-layout-sider--show-content{
  max-width: 320px;
}
.n-layout-sider{
  background-color: #fbfbfb;
}

</style>