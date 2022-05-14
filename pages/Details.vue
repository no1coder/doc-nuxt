<template>
  <div class="w-full box-border ">
    <n-message-provider>
      <div class="pt-10   lg:mx-auto  lg:container  ">
        <Navigation >

        </Navigation>
      </div>

      <!--  上-->
      <Center >
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </Center>
      <!--  中-->
      <Catalogue class="down"></Catalogue>
      <!--下-->
    </n-message-provider>
  </div>


</template>
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import Navigation from "~/components/Navigation.vue";
import Center from "~/components/Center.vue";
import Catalogue from "~/components/Catalogue.vue";

</script>

<style scoped>
img{
  width: 28px;
  height: 28px;

}


</style>