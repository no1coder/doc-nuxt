<template>
  <div class="flex  justify-between  " >
<!--    左-->
    <div class="left flex items-center space-x-4">
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
              <n-button> <svg class="icon-svg index-module_size_ROqxd" style="width: 13px; min-width: 13px; height: 13px;">
                <use xlink:href="#permission-private">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" id="permission-private">
                    <g fill="none" fill-rule="evenodd"><path d="M200 93c13.255 0 24 10.745 24 24v100c0 13.255-10.745 24-24 24H56c-13.255 0-24-10.745-24-24V117c0-13.255 10.745-24 24-24h144Zm0 20H56a4 4 0 0 0-3.995 3.8L52 117v100a4 4 0 0 0 3.8 3.995l.2.005h144a4 4 0 0 0 3.995-3.8l.005-.2V117a4 4 0 0 0-3.8-3.995L200 113Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                      <path d="M128 15c29.823 0 54 24.177 54 54v44H74V69c0-29.823 24.177-54 54-54Zm0 20c-18.59 0-33.695 14.92-33.995 33.438L94 69v24h68V69c0-18.59-14.92-33.695-33.438-33.995L128 35Z" fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)"></path>
                      <rect fill="#8A8F8D" fill-rule="nonzero" mask="url(#permission-private_b)" x="110" y="138" width="36" height="36" rx="18"></rect>
                      <rect fill="#8A8F8D" mask="url(#permission-private_b)" x="118" y="156" width="20" height="40" rx="10"></rect></g></svg>
                </use>
              </svg></n-button>
            </template>
            私密知识库
          </n-tooltip>
          </div>
    </div>
<!--  右-->
    <div class="right flex item-center space-x-4  ">
          <div >
              <n-popover
                  :show="showPopover"
                  placement="bottom"
                  trigger="manual"
              >
                <template #trigger>
                  <n-button @click="showPopover = !showPopover " >
                    分享
                  </n-button>
                </template>
<!--                <span>-->
<!--                    <span class="flex justify-between">-->
<!--                        <span>公开分享 </span>-->
<!--                        <span> <n-switch-->
<!--                            checked-value=""-->
<!--                            unchecked-value=""-->
<!--                            @update:value="handleUpdateValue"-->
<!--                        /></span>-->
<!--                    </span>-->
<!--                    <br/>开启后，所有获得链接的人皆可访问。分享内容需符合相关法-->
<!--                    <br/>律法规及语雀<i class="text-blue-600/75">服务协议</i> 约定。-->
<!--                </span>-->
                <span class="max-w-sm " >

                  <span>
                      <span class="flex justify-between pt-6 max-w-sm">
                            <span>公开分享 </span>
                            <span> <n-switch
                                checked-value="设置成功"
                                unchecked-value="设置成功"
                                v-model:value="show"
                            /></span>
                        </span>
                  </span>

                    <span class=" my-2">
                       内容已转为公开，所有获得链接的人皆可访问。分享内容需符合相<br/>
                       关法律法规及语雀<i class="text-blue-600/75">服务协议</i> 约定。
                    </span>

                    <span class="flex justify-between max-w-sm pt-4">
                        <n-input autosize style="min-width: 50%"
                                 type="textarea"
                                 size="small"
                                 placeholder="https://www.yuque.com/books/share/5eca29"
                                 :disabled="!active"
                                 round
                        />
                      <n-button @click="handleClick" >
                          复制链接
                      </n-button>
                    </span>
                      <a class="pt-2 pb-2 ">链接有效期至 2022-05-16 11:17:19</a>

               <n-collapse>
                <n-collapse-item title="更多设置"  name="1">
                  <div>
                     <span class="flex justify-between pt-4">
                        <span >密码访问 </span>
                        <span > <n-switch
                            checked-value="设置成功"
                            unchecked-value="设置成功"
                            v-model:value="show"
                        /></span>

                    </span>

                      <div class="pt-4">
                        密码：zg46
                        重置密码
                      </div>


                     <div class="pt-4 flex justify-between pt-4 ">
                       <div>
                            <span class="text-neutral-400"> 链接永远有效</span>
                             <span class="text-blue-600/75"> 升级会员</span>
                       </div>

                        <n-switch v-model:value="active"  />
                      </div>
                  </div>
                  <n-divider class="pt-4" />
                </n-collapse-item>
                  <div class="flex justify-around pt-4">
                                     <n-image
                                         width="100"
                                         src="assets/images/336f002c8bc5a058fb2f20ed31b18a17_Wut80KFOjNAtf8WQUK9Fm9622zAn8B6PtbAojexywAAAAASUVORK5CYII=.png"
                                         preview-disabled
                                     />

                                 <div class="my-8"> 使用微信、钉钉扫码分享当前链接</div>
                                  </div>
              </n-collapse>
                </span>
              </n-popover>
          </div>

    </div>
  </div><!--end nav-->
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import {NAlert, useMessage } from 'naive-ui'
import { IosAirplane } from '@vicons/ionicons4'
import type { MessageRenderMessage } from 'naive-ui'
    // 开关
    const  showPopover = ref(false);
// 密码开关事件
const show = ref(false)
const active = ref(false)
const handleUpdateShow = ()=>{


}

    // 信息提示
    const message = useMessage()
    //显示信息和图标
    const handleUpdateValue = (value) => {
      show.value = !show.value
      message.success(value)
    }

  // 复制链接消息提示
    const { success } = useMessage()
    function handleClick () {
      success('链接复制成功')}


const handleSelect = (key: string | number) => {
  message.info(String(key))
}


</script>


<style scoped>
img{
  width: 28px;
  height: 28px;

}
.n-input--stateful {
  /* width: 400px!important; */
}
.n-button {
  --n-border: 1px solid rgba(224, 224, 230, 0) !important;
}
</style>