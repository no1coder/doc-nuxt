
<template>
  <div class="down border-t-2 border-state-300  ">
    <div class="container mx-auto  flex items-center place-content-center flex-col pt-2">

<!--      节点撑开 block-line-->
<!--      data树的节点数据。重新设置 data 会将一些非受控状态清空，如果你需要在使用中改动 data，最好以受控的方式控制树-->
<!--      :default-expanded-keys展开默认项-->
<!--      selectable 节点是否可以被选中-->
      <n-tree
          block-line
          :data="data"
          :default-expanded-keys="defaultExpandedKeys"
          :selectable="false"
          ></n-tree>

    </div>

  </div>

  <div class="container mx-auto yumao">
      <img src="assets/images/sWiZyNKIDyiSrxV.png">
  </div>
</template>

<script lang="ts" setup>

import { h, defineComponent, ref } from 'vue'
import { repeat } from 'seemly'
import { NButton, TreeOption,NIcon } from 'naive-ui'
// 创建节点数据
function createData (level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = '' + baseKey + level + index
    const label = createLabel(level)
    return {
      label,
      key,
      children: createData(level - 1, key),
      suffix: () => h(NButton ,
          { text: true, type: 'text' },
          { default: () => '时间 ' }
      ),
    }
  } )

  }
function createLabel (level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

    const  data = createData()
    const  defaultExpandedKeys = ref(['40', '41'])
    const time = new Date(0)

</script>

<style lang="less">
.n-divider:not(.n-divider--vertical) {
  margin-top: 10px;
   /*margin-bottom: 0px;*/
}
.yumao {

  position: absolute;
  background:url('assets/images/sWiZyNKIDyiSrxV.png') no-repeat 50%;
  background-size: 59px 74px;
  width: 59px;
  height: 74px;
  bottom: 20px;
  left: 50%;
  margin-left: -30px;
}
.n-tree {
  width: 100%;

}


.n-tree-node-wrapper {
  font-size: 16px;
}
.n-tree-node-content__text {
  font-weight: bold!important;
  height: 40px;
}

</style>