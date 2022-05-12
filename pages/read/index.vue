<template>
  <div class="flex">
    <div class="read_left lg:h-full lg:block xs:hidden relative" >
      <DocumentReadLeftCatalog></DocumentReadLeftCatalog>
    </div>
    <div class="flex-auto">
        <DocumentReadrightRight></DocumentReadrightRight>
    </div>
  </div>
</template>

<script setup>


</script>

<style >
.read_left{
  width:300px;
}
.cheng{
  height:1000px;
  width:200px
}
.container{
  max-width:850px;
  margin:0 auto;
}

</style>