<template>
    <div class="h-auto bg-slate-50">
        <!-- 头部 -->
        <div class="w-full box-border h-16">
            <CatalogueHeader />
        </div>
       
        <!-- 内容部分 -->
        <div class="container flex flex-col 2xl:max-w-7xl m-auto w-full box-border pt-4 bg-slate-50">
			<div class="h-16">
				<CatalogueSearch />
			</div>
			<div class="flex-auto" >
				<CatalogueContents  :Obj="ColumnDetails" />
			</div>
        </div>
    </div>
</template> 

<script lang="ts" setup>
import { provide} from 'vue'
//获取个人专栏
onMounted(() => {
    RetrieveData();
})
let ColumnDetails  = ref([])
const RetrieveData = async() => {
    ColumnDetails.value = await f.get(`/api/book/200/catalogue`);
}
provide('key',RetrieveData) // 若提供的是非字符串值会导致错误

</script>

<style lang="less" scoped>

</style>