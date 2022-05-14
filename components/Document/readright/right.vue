<template>
  <div class="top relative">
  <DocumentTopTou></DocumentTopTou>
  </div>
  <div class="flex">
    <div class="flex-auto">
      <DocumentCenterArticle></DocumentCenterArticle>
    </div>
    <div class="right-list relative lg:block hidden">
      <DocumentRightList></DocumentRightList>
    </div>
  </div>
  <div class="fixed right-6 bottom-8 h-auto w-auto">
    <DocumentFixiconHuiDing class="mt-4"></DocumentFixiconHuiDing>
    <DocumentFixiconZan class="mt-4"></DocumentFixiconZan>
    <DocumentFixiconQipao class="mt-4"></DocumentFixiconQipao>
    <DocumentFixiconMobile class="mt-4"></DocumentFixiconMobile>
  </div>
</template>

<script>
export default {
  name: "right"
}
</script>

<style scoped>
.right-list{
  min-width:180px;
  height:200px;
}

</style>