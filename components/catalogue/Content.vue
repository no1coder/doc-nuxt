<template>
    <div class="h-full w-full box-border  mt-2 border rounded-md">
        <div class="h-full flex flex-col">
<!--			<div class="h-20">-->
<!--				<ul class="h-full">-->
<!--					<li class="h-full flex justify-between items-center">-->
<!--						<div class="flex md:w-1/2 lg:w-1/3 items-center pl-4">-->
<!--							<label class="flex items-center " >-->
<!--						-->
<!--								<input type="checkbox"  class="h-4 w-4  mr-2 bg-red-400" />-->
<!--								<span>所有文档</span>-->
<!--							</label>-->
<!--							<span class="fold px-3 pl-5 ml-2 cursor-pointer">全部折叠</span>-->
<!--							<span class="open px-3 pl-5 cursor-pointer">全部展开</span>-->
<!--						</div>-->
<!--						<div class="xl:w-1/4 text-right mr-5 h-10">-->
<!--							<div class="cursor-pointer borders py-2 inline-block">-->
<!--								<span>默认展开:</span>-->
<!--								<n-dropdown trigger="click" :options="options" placement="bottom-end" class="w-[150px]">-->
<!--									<button class="AllOpen pl-1 pr-6 ml-1">全部层级</button>-->
<!--								</n-dropdown>-->
<!--							</div>-->
<!--							<div class="cursor-pointer borders py-2 inline-block ml-3">-->
<!--								<span>文档信息:</span>-->
<!--								<n-dropdown trigger="click" :options="options" placement="bottom-end" class="w-[150px]">-->
<!--									<button class="AllOpen pl-1 pr-6 ml-1">更新时间</button>-->
<!--								</n-dropdown>-->
<!--							</div>-->
<!--						</div>-->
<!--					</li>-->
<!--				</ul>-->
<!--				-->
<!--			</div>-->
			
            <div class="bg-white flex-1 rounded-md pt-6">
					<CatalogueTree :items="items"></CatalogueTree>
            </div>
        </div>
    </div>
</template>

<script setup >
let props = defineProps({
	getInput:Function
})





let  list = reactive([
    {
        name: "一级数据12131`23123",
        time:'05-07 22:08',
        level:1,
        tasks: [
            {
                name: "二级数",
                time:'05-07 22:08',
                level:2,
                tasks: []
            },
            {
                name: "二级数据11",
                time:'05-07 22:08',
                level:2,
                tasks: [
                    {
                        name: "三级数据1",
                        time:'05-07 22:08',
                        level:3,
                        tasks: []
                    }
                ]
            }
        ]
    },
    {
        name: "一级数据2",
        time:'05-07 22:08',
        level:1,
        tasks: [
            {
                name: "二级数据2",
                time:'05-07 22:08',
                level:2,
                tasks: []
            }
        ]
    },
    {
        name: "一级数据3",
        time:'05-07 22:08',
        level:1,
        tasks: []
    }
      ])
watch(list,(new2,old1)=>{
    list = checkList(new2)
},  { deep: true }
)
const checkList = (items,level = 1) => {
    console.log(items.length);
    for(let i =0;i<items.length;i++){
        items[i].level = level
        if(items[i].tasks.length > 0){
            items[i].tasks = checkList(items[i].tasks,level+1)
        }
    }
    return items;
}
const options = [
        {
          label: '全部层级',
          key: 'All levels',
        },
        {
          label: '第一级',
          key: "first stage"
        },
        {
          label: '第二级',
          key: 'Second stage'
        },
        {
          label: '第三级',
          key: 'Third level'
        }
      ];

 
</script>

<style lang="less" scoped>
.open{
    background: url('~/assets/images/do.svg') no-repeat 0px -2px;
    background-size: 18px 18px;
}
.fold{
    background: url('~/assets/images/向右.svg') no-repeat 0px 2px;
    background-size: 18px 18px;
}
.AllOpen {
	background: url('~/assets/images/do.svg') no-repeat 62px -2px;
	background-size: 18px 18px;
}
</style>