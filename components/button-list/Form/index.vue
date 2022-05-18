<template>
  <n-dynamic-tags v-model:value="tags" max="2" input-style="width:50px"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      tags: ref['']
    }
  }
})
</script>
<style scoped>
::v-deep(.n-input--stateful){
  width:80px!important;
  text-align: left!important;
}

</style>