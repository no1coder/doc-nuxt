<template>
  <div style="height: 200px; padding-left: 50px" class="">
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

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const anchorRef = ref(null);
    const scrollTo = (href) => {
      anchorRef.value?.scrollTo(href);
    };
    return {
      anchorRef,
      scrollTo
    };
  }
});
</script>

<style scoped>
.list{
  min-width:150px;
  height:200px;
}
</style>