
<template>
  <n-space>
    <n-button  @click="showModal = true">
      +新建分组
    </n-button>
  </n-space>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="确认"
      content="确认"
      positive-text="确认"
      negative-text="取消"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
  />
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'

const showModalRef = ref(false)

const  showModal = showModalRef,
    onNegativeClick = ()=> {
      showModalRef.value = false
    },
    onPositiveClick = ()=> {
      showModalRef.value = false
    }
</script>
<style scoped>
img{
  border-radius:32px;
}
.n-dialog.n-modal{
  width:520px!important;
  height:295px!important;
  box-sizing: content-box;
}
::v-deep(.n-button__content){
  color:black!important;
}
</style>