<template>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="确认"
      content="你确认"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
  />
  <n-space>
    <n-tooltip
        placement="bottom"
        trigger="hover"
    >
      <template #trigger>
        <img class="w-8 h-8 border-2" src="assets/images/icon/shenglue.svg" alt="" @click="showModal = true">
      </template>
      <span> I wish they all could be California girls </span>
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
</style>