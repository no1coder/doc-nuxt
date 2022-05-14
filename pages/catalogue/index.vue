<template>
    <div class="h-auto bg-slate-50">
        <!-- 头部 -->
        <div class="w-full box-border h-16">
            <CatalogueHeader />
        </div>
       
        <!-- 内容部分 -->
        <div class="container flex flex-col 2xl:max-w-7xl m-auto w-full box-border pt-4 bg-slate-50  ">
			<div class="h-16 w-full box-border">
				<CatalogueSearch :ParentClassNew="ParentClassNew"/>
			</div>
			<div class="flex-auto w-full box-border">
				<CatalogueContent :getInput="getInput"/>
			</div>
        </div>
    </div>
</template> 

<script lang="ts" setup>

//接收添加按钮传过来的数据
const ParentClassNew = (obj) => {
	getInput(obj)
}

//接收input数据

const getInput = (obj) => {

}
</script>

<style lang="less" scoped>

</style>