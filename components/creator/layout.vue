<template>
    <div class=" bg-gray-200">
      <div class="container mx-auto flex pt-36 bg-slate-50 bg-white dark:bg-slate-900">
        <!--边栏-->
        <CreatorSidebar :defaultValue="defaultValue" ></CreatorSidebar>
        <!--内容-->

        <div class="w-4/5 bg ">
<!--          使用插槽方式-->
          <slot name="creatoy_body" ></slot>
        </div>
      </div>
    </div>


</template>

<script setup>

let props = defineProps({
  defaultValue: {
    type: String
  }

})
console.log(props)
</script>

<style scoped>
.bg{
  background: white;
}
</style>