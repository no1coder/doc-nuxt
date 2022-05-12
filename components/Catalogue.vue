
<template>
  <div class="down border-t-2 border-state-300  ">
    <div class="container mx-auto  flex items-center place-content-center flex-col pt-2">
      <div class="flex justify-between w-3/5 pt-3">
        <n-collapse>
          <template #header-extra>
            <n-icon><img src="assets/images/jia.svg"  alt=""></n-icon>
            <n-icon><img src="assets/images/sangedian.svg"  alt=""></n-icon>
          </template>

          <template #arrow>
            <n-icon><img src="assets/images/you.svg"  alt=""></n-icon>
          </template>



            <n-collapse-item title="青铜" name="1">
              <n-divider dashed class="inline-block md:flex-1" />
                <div class="flex justify-around ">
                  <i>可以</i>
                  <n-divider dashed class="max-w-lg grow "></n-divider>
                  <n-time :time="0" />
                </div>
            </n-collapse-item>

        </n-collapse>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
time: new Date(0)

export default defineComponent({
  components: {
    CashIcon
  }
})
</script>

<style scoped>
.n-divider:not(.n-divider--vertical) {
  margin-top: 10px;
   margin-bottom: 24px;
}
</style>