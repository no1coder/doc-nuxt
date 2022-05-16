<template>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
  >
   <div>

   </div>
  </n-modal>
  <n-space>
    <n-tooltip
        placement="bottom"
        trigger="hover"
    >
      <template #trigger>
        <img class="w-8 h-8 border-2" src="assets/images/icon/shenglue.svg" alt="" @click="showModal = true">
      </template>
      <span>查看所有点赞用户</span>
    </n-tooltip>
  </n-space>
</template>

<script setup>
import { ref } from 'vue'
    const showModalRef = ref(false)
    const showModal = showModalRef
    const onNegativeClick = ()=> {
        showModalRef.value = false
      }
    const onPositiveClick = ()=> {
        showModalRef.value = false
    }
    const showPopover = ref(false);

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
</style>