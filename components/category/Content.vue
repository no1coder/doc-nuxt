<template>
    <div class="h-[95%] w-full box-border  mt-2 border rounded-md ">
        <div class="h-full w-full box-border">
            <ul class="h-[10%] w-full box-border">
                <li class="h-full flex justify-between items-center">
                    <div class="flex md:w-1/2 lg:w-1/3 items-center pl-4">
                        <label class="flex items-center " >
                            <input type="checkbox"  class="h-4 w-4  mr-2 bg-red-400" />
                            <span>所有文档</span>
                        </label>
                        <span class="fold px-3 pl-5 ml-2 cursor-pointer">全部折叠</span>
                        <span class="open px-3 pl-5 cursor-pointer">全部展开</span>
                    </div>
                    <div class="xl:w-1/4 text-right mr-5">
                        <span class="cursor-pointer">
                            默认展开:
                            <div class="inline-block">
                                <n-space class="">
                                    <n-dropdown class="max-w-[150px]" trigger="click" :options="options" placement="bottom-end">
                                        <n-button class="AllOpen pl-1 pr-6">全部层级</n-button>
                                    </n-dropdown>
                                </n-space>
                            </div>   
                        </span>
                        <span class="cursor-pointer ml-3">
                            文档信息:
                            <div class="inline-block box">
                                <n-space >
                                    <n-dropdown class="max-w-[150px]" trigger="click" :options="options" placement="bottom-end">
                                        <n-button class="AllOpen pl-1 pr-6">更新时间</n-button>
                                    </n-dropdown>
                                </n-space>
                            </div> 
                        </span>
                    </div>
                </li>
            </ul>
   

            <div class="row h-[90%] w-full box-border bg-white">
                <div class="col-8 pt-3" >
                    <CategoryNested :tasks="list" />
                </div>
<!--				<CategoryRow class="col-3" :value="list" title="List" />-->
            </div>
        </div>
    </div>
</template>

<script setup >
// const name = "nested-example";
// const display = "Nested";
// const order = 15;

let  list = ref([
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

const showDropdownRef = ref(false);
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
    background: url('../../assets/images/do.svg') no-repeat;
    background-size: 18px 18px;
    background-position: 0px -2px;
}
.fold{
    background: url('../../assets/images/向右.svg') no-repeat;
    background-size: 18px 18px;
    background-position: 0px 0px;
}
.AllOpen{
    background: url('../../assets/images/do.svg') no-repeat;
    background-size: 18px 18px;
    background-position: 62px 4px;
    --n-border:none !important;
    --n-border-hover:none !important;
    --n-text-color-hover:black;
    --n-border-pressed:none !important;
    --n-border-focus:none !important;
    --n-border-disabled:none !important;
    --n-text-color-hover:opacity !important;
    --n-text-color-pressed:opacity !important;
    --n-text-color-focus:opacity !important;
    --n-ripple-color:white !important;
}
.v-binder-follower-content{
    .n-dropdown-option{
        .n-dropdown-option-body__label{
            width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>