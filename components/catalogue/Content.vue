<template>
    <div class="mb-3 border rounded-md">
        <div class="h-full bg-white rounded-md">
			<CatalogueTree :items="items"></CatalogueTree>
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
// watch(list,(new2,old1)=>{
//     list = checkList(new2)
// },  { deep: true }
// )
// const checkList = (items,level = 1) => {
//     console.log(items.length);
//     for(let i =0;i<items.length;i++){
//         items[i].level = level
//         if(items[i].tasks.length > 0){
//             items[i].tasks = checkList(items[i].tasks,level+1)
//         }
//     }
//     return items;
// }
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