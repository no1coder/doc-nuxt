<template>
  <!--            悬浮出现的文字 -->
  <n-popover placement="bottom" trigger="hover" >
    <template #trigger>
      <div class="border-2 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl duration-300 bg-white flex">
        <img src="http://webstack.cc/assets/images/logos/dribbble.png" class="w-10 h-10 mt-6 ml-10 mb-7"  alt="">
        <div class="mx-3 my-6">
          <div>
            Dribbble
          </div>
          <div class="text-xs text-gray-400 ">全球UI设计师作品分想平台</div>
        </div>
      </div>
    </template>
    <span >我希望她们都是加州女孩</span>
  </n-popover>



</template>

<script setup>
const props = defineProps({
  category:{
    type:Object,
    default:null
  }
})

let category = ref();
category.value = props.category


</script>

<style scoped>

</style>