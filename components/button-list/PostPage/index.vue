<!--
<template>
  <n-upload
      multiple
      directory-dnd
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
  >
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3" style="font-style:normal;color: #92909c" class="n-icon">
          +
        </n-icon>
      </div>
      <n-text style="font-size: 16px">
        封面上传
      </n-text>
    </n-upload-dragger>
    <div class="font-size">建议尺寸1303*734px</div>
  </n-upload>
</template>

&lt;!&ndash;
<script lang="ts">
// import { defineComponent } from 'vue'
// import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    ArchiveIcon
  }
})
</script>&ndash;&gt;

<style>
.n-text{
  color: #92909c
}
.n-icon{
  color: #92909c!important;
}
.n-upload-dragger{
  padding: 10px;
}
.font-size{
  margin-top: 5px;
  color: #92909c
}
.n-upload&#45;&#45;dragger-inside{
  display: flex;

}
.n-upload-file&#45;&#45;text-type{
  width: 280px;
  /*border: 1px solid red;*/
  text-align: left;
  margin-left: 7px;
}

</style>-->

<template>
  <n-upload
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      :default-file-list="fileList"
      list-type="image-card"
  >
    点击上传
  </n-upload>



</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UploadFileInfo } from 'naive-ui'

export default defineComponent({
  setup () {
    const showModalRef = ref(false)
    const previewImageUrlRef = ref('')
    function handlePreview (file: UploadFileInfo) {
      const { url } = file
      previewImageUrlRef.value = url as string
      showModalRef.value = true
    }
    return {
      handlePreview,
      showModal: showModalRef,
      previewImageUrl: previewImageUrlRef,
      fileList: ref<UploadFileInfo[]>([




      ]),
      previewFileList: ref<UploadFileInfo[]>([

        {
          id: 'vue',
          name: '我是vue.png',
          status: 'finished',
          url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        }
      ])
    }
  }
})
</script>