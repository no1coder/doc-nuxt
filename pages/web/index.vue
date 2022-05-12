<template>
    <div class="h-screen bg-slate-50">
        <!-- 头部 -->
        <div class="w-full box-border h-[9%]">
            <categoryHeader />
        </div>
       
        <!-- 内容部分 -->
        <div class="container 2xl:max-w-7xl m-auto w-full box-border pt-1 bg-slate-50 h-[91%]">
			<div class="h-[7%] w-full box-border">
				<CategorySearch />
			</div>
			<div class="h-[92%] w-full box-border">
				<CategoryContent />
			</div>
        </div>
  
    </div>
</template> 

<script>
export default {

}
</script>

<style>
.bg{
    background: rgb(250,250,250);
}
</style>