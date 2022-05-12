<template>
  <Navigation>
<!--      <div class="left"></div>-->
<!--      <div class="right"></div>-->
  </Navigation>
<!--  上-->
  <Center >
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four f"></div>
  </Center>
<!--  中-->
  <Catalogue class="down"></Catalogue>
<!--下-->


</template>
<script lang="ts" setup>

import Navigation from "~/components/Navigation.vue";
import Center from "~/components/Center.vue";
import Catalogue from "~/components/Catalogue.vue";

</script>

<style scoped>
@import "assets/css/tailwind.css";
img{
  width: 28px;
  height: 28px;

}

</style>