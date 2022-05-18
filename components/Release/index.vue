<template>
  <div>
  <n-space>
    <n-popover
        :show="showPopover"
        placement="bottom"
        trigger="manual"
        style="padding: 3px 3px;background: linear-gradient(90deg,#69d9f1,plum);margin-top: 20px;border-radius: 3px"
        b
        arrow-point-to-center:false
    >
      <template #trigger style="background: red">
        <n-button @click="showPopover = !showPopover" class="button1 w-full">
          发布
        </n-button>
      </template>
      <div class="theme" style="width: 560px;height:630px;background: #1d7dfa">
          <Button-ListTags></Button-ListTags>
          <Button-ListClass></Button-ListClass>
        <Button-ListLastbtn></Button-ListLastbtn>
      </div>

    </n-popover>
  </n-space>
  </div>
</template>

<script setup>

let showPopover =  ref(false);
</script>

<style scoped>
.button1{
  border:0;
  background: #1d7dfa;
  /*background: white;*/
  color: white;
  --n-border: 0px solid rgb(224, 224, 230)!important;
}
/*.button1:hover{
  background: #388eff!important;
  color: white!important;
}*/
.n-button:not(.n-button--disabled):hover {
  background-color: #388eff!important;
  color: white!important;
}
.n-button:not(.n-button--disabled):focus {
  background-color: #388eff!important;
  color: white!important;
}
.n-button .n-base-wave {
  animation: none;

}
.n-button{
  width:62px;
  height:32px;
}

.n-popover--manual-trigger
 {
  padding: 100px!important;
}
.pl-9 {
  padding-left: 0.25rem;
}
::v-deep(.n-popover .n-popover-arrow-wrapper .n-popover-arrow){
  background:red!important;
}







body{
  background: black!important;
}


</style>