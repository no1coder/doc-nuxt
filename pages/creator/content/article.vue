<template>
  <CreatorLayout>
    <template #creatoy_body>


          <n-tabs :bar-width="28" tab-style="height:70px"  pane-style="padding-left: 4px; padding-right: 4px; " type="line" class="custom-tabs p-4">
            <n-tab-pane name="oasis" tab="文章">


             全部（0）


            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="草稿箱（0）">

            </n-tab-pane>
          </n-tabs>


    </template>
  </CreatorLayout>
</template>

<script setup>

</script>

<style scoped>
.bg{
  background: white;
}
.v-x-scroll {
  overflow: auto;
  height: 70px;
  scrollbar-width: none;
}
</style>