<template>
  <CreatorLayout>
    <template #creatoy_body>


      <n-tabs :bar-width="28" tab-style="height:70px"  pane-style="padding-left: 4px; padding-right: 4px; " type="line" class="custom-tabs p-4">
        <n-tab-pane name="oasis" tab="专栏">


          全部（0）


        </n-tab-pane>
        <template #suffix>
          <n-button @click="showModal = true">
            新建专栏
          </n-button>
          <n-modal
              v-model:show="showModal"
              class="custom-card"
              preset="card"
              :style="bodyStyle"
              title="新建专栏"
              size="huge"
              :bordered="false"
              :segmented="segmented"
          >
            <template #header-extra>
            </template>


            <n-form
                ref="formRef"
                :model="model"
                :rules="rules"
                label-placement="left"
                label-width="auto"
                require-mark-placement="right-hanging"
                :style="{
      maxWidth: '640px'
    }"
            >
              欢迎大家使用稀土掘金专栏，让你的写作更加体系化～
            <n-form-item label="专栏名称" path="inputValue">
              <n-input v-model:value="model.inputValue" placeholder="Input" />
            </n-form-item>
            <n-form-item label="专栏简介" path="textareaValue">
              <n-input
                  v-model:value="model.textareaValue"
                  placeholder="Textarea"
                  type="textarea"
                  :autosize="{
          minRows: 3,
          maxRows: 5
        }"
              />
            </n-form-item>
            </n-form>
            专栏封面
            <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            >
              <n-upload-dragger>
                <div style="margin-bottom: 12px">
                  <n-icon size="48" :depth="3">
                    <archive-icon />
                  </n-icon>
                </div>
                <n-text style="font-size: 16px">
                  点击或者拖动文件到该区域来上传
                </n-text>
                <n-p depth="3" style="margin: 8px 0 0 0">
                  请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                </n-p>
              </n-upload-dragger>
            </n-upload>

          </n-modal>

        </template>
      </n-tabs>


    </template>
  </CreatorLayout>
</template>

<script setup>


    const  bodyStyle ={
        width: '600px'
      }
    const  segmented = {
        content: 'soft',
        footer: 'soft'
      }
    const  showModal =  ref(false)

   const model = ref({
     inputValue : null,
     textareaValue: null,
     selectValue: null,
     multipleSelectValue: null,
     datetimeValue: null,

   });
    const rules = {
      inputValue: {
        required: true,
            trigger : ['blur', 'input'],
            message : '请输入 专栏名称'
      }
    ,
      textareaValue: {
        required: true,
            trigger : ['blur', 'input'],
            message : '请输入 专栏简介'
      }
    ,
    }
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