<template>
  <n-tree
      block-line
      :data="data"
      :default-expanded-keys="defaultExpandedKeys"
      selectable
      @update:expanded-keys="expandedKeys"
  />
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { repeat } from 'seemly'
import {NAvatar, TreeOption} from 'naive-ui'
const expandedKeys = (key,option) =>{
    console.log(key,option)
}

function createData (level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = '' + baseKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}



function createLabel (level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}



const data = ref([
  {
    key:1,
    label:'1111',
    prefix:()=>{
      return h('div',{ id: 'foo'},[
        h(NAvatar, {round:true,size:'small',src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})
      ])
    }
  },
  {
    key:2,
    label:'222',
    children:[
      {
        key:3,
        label:'33333'
      },
      {
        key:4,
        label:'444444'
      }
    ]
  }
])

const defaultExpandedKeys = ref(['40', '41'])
</script>

<style scoped>

</style>

