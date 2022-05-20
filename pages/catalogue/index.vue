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
				<CatalogueContent  :Obj="ColumnDetails.catalogue.data" />
			</div>
        </div>
    </div>
</template> 

<script lang="ts" setup>
//获取个人专栏
let ColumnDetails  = ref()
ColumnDetails.value = await f.get(`/api/book/200`);
console.log(ColumnDetails.value.catalogue.data)

let catalogue = ref()


// catalogue.value = await f.get(``);

</script>

<style lang="less" scoped>

</style>