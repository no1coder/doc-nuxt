<template>
  <div class="flex  justify-between container items-center mx-auto mt-10" >
<!--    左-->
    <div class=" flex items-center space-x-4">
          <div>
            <n-avatar
                round
                size="small"
                src="assets/images/头像.jpeg"
            />
          </div>

          <div>
                <a class="text-slate-500 font-mono  cursor-pointer">褒浮<i>/</i></a>
          </div>

          <div>
                <a class="  cursor-pointer">默认知识库</a>
          </div>

          <div>
                <n-tooltip placement="top-start" trigger="hover" >
                  <template #trigger>
                    <n-button>
                      <svg class="icon-svg index-module_size_ROqxd" style="width: 13px; min-width: 13px; height: 13px;">
                      <use xlink:href="#permission-private">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" id="permission-private">
                          <g fill="none" fill-rule="evenodd"><path d="M200 93c13.255 0 24 10.745 24 24v100c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24V117c0-13.255 10.745-24 24-24h144Zm0 20H56a4 4 0 0 0-3.995 3.8L52 117v100a4 4 0 0 0 3.8 3.995l.2.005h144a4 4 0 0 0 3.995-3.8l.005-.2V117a4 4 0 0 0-3.8-3.995L200 113Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                            <path d="M128 15c29.823 0 54 24.177 54 54v44H74V69c0-29.823 24.177-54 54-54Zm0 20c-18.59 0-33.695 14.92-33.995 33.438L94 69v24h68V69c0-18.59-14.92-33.695-33.438-33.995L128 35Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                            <rect fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)" x="110" y="138" width="36" height="36" rx="18"></rect>
                            <rect fill="#8A8F8D" mask="url(#permission-private_b)" x="118" y="156" width="20" height="40" rx="10"></rect></g></svg>
                      </use>
                    </svg>
                    </n-button>
                  </template>
                  私密知识库
                </n-tooltip>
          </div>
    </div>
<!--  右-->
    <div class=" flex item-center space-x-4  ">
      <n-button ghost  color="#a9b7c6">分享</n-button>
    </div>
  </div><!--end nav-->
</template>

<script lang="ts" setup>

</script>

<style scoped>
img{
  width: 28px;
  height: 28px;

}
.n-button {
  --n-border: 1px solid rgba(224, 224, 230, 0) !important;
}
</style>