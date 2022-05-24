<template>
  <div class="h-full flex justify-end items-center">
    <div class="w-1/3 h-9 flex justify-end">
      <n-dropdown trigger="click" :options="data"  placement="bottom-end" class="w-36" @select="handleSelect">
        <button class="text-white bg-green-500 w-20 h-full rounded" >新建</button>
      </n-dropdown>
    </div>
    <catalogueNewlyBuild :addValue="addValue" :keys="keys"  v-model:show="showModal"></catalogueNewlyBuild>
  </div>
</template>

<script setup lang="ts">
import {h, onMounted,inject} from 'vue'
const renderImg = (src) => {
  return () => {
    return h('img',{
      src,
      style:'width:15px;height:25px'
    })
  }
};
const foo = inject('key')
//点击新建下面的选项
let showModal =  ref(false);
let keys = ref()
let title = ref()
const handleSelect =  (key: string | number) => {
  showModal.value = true;
  keys.value = key
}

//获取input表单输入的内容
const addValue = (title,id) => {
    let params = {
        title,
        is_group:id,
        parent_id:0,
        seq:0
    }
    if(id === 1){
	    console.log(123221321)
    }else if(id ===0 ){
	    f.post(`/api/book/200/catalogue`,params).then(res => {
		    showModal.value = false;
            //添加完数据重新请求数据
            foo();
	    })
    }else{
        /*console.log(12312321312321321321312)*/
    }

  
}

const data = [
  {
    label: '文档',
    key: 1,
    icon:renderImg('assets/images/文档.svg')
  },
  {
    label: '新建分组',
    key: 0,
    icon:renderImg('assets/images/分组管理.svg')
  },
  {
    label: '添加链接',
    key: 2,
    icon:renderImg('assets/images/链接.svg')
  },
];
</script>

<style lang="less" scoped>
.search{
  background: url('../../assets/images/search.svg') no-repeat 12px 9px;
  background-size: 20px 20px;
}
</style>