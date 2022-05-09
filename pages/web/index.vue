<template>
    <div class="h-screen bg-slate-50">
        <!-- 头部 -->
        <div class="w-full box-border h-[9%]">
            <categoryHeader />
        </div>
       
        <!-- 内容部分 -->
        <div class="container max-w-7xl m-auto pt-1 bg-slate-50 h-[91%]">
            <CategorySearch />
            <CategoryContent />
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