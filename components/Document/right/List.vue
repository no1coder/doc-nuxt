<template>
  <div style="height: 200px; padding-left: 50px" class="list">
    <n-anchor
        ref="anchorRef"
        affix
        :trigger-top="24"
        :top="88"
        :bound="24"
        style="z-index: 1"
        :show-rail=true
    >
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础用法" href="#basic" />
        <n-anchor-link title="忽略间隔" href="#ignore-gap" />
        <n-anchor-link title="固定" href="#affix" />
        <n-anchor-link title="滚动到" href="#scrollto" />
      </n-anchor-link>
      <n-anchor-link title="Props" href="#Props" />
    </n-anchor>
  </div>
  <n-space style="padding-left: 400px">

<!--    <n-button @click="scrollTo('#affix')">-->
<!--      固定-->
<!--    </n-button>-->
  </n-space>

</template>

<script setup>
import { defineComponent, ref } from "vue";


    const anchorRef = ref(null);
    const scrollTo = (href) => {
      anchorRef.value?.scrollTo(href);
    };

</script>

<style scoped>
.list{
  width:100%;
  padding:0!important;
  font-size: 14px;
}
::v-deep(.n-anchor-link__title){
  font-size:14px!important;
  font-weight:bold
}
</style>