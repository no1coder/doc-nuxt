<template>

  <n-button @click="showModal = true">
    登录
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card class="ModalBox rounded-lg "
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true">

      <n-tabs  v-show="register1"
               class="card-tabs"
               default-value="signin"
               animated
               tab-style="font-size: 18px;font-weight: 700;"
               style="margin: 0 -4px;"
               :bar-width="28"
               pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
        <!--        账号登录-->
        <n-tab-pane name="signin" tab="账号登录" >
          <n-form
              :rules="usename_rules"
              :model="form"
              size="large"
          >
            <div class="FormSize">
              <n-form-item path="username" class="mt-15" >
                <n-input v-model:value="form.username" placeholder="请输入用户名" />
              </n-form-item>
            </div>
            <div class="FormSize">
              <n-form-item path="password" class="mt-25" >
                <n-input v-model:value="form.password" type="password" placeholder="请输入密码"/>
              </n-form-item>
            </div>

            <!-- 账号下面的文字-->
            <div class="text-right text-sm text-slate-400 ForgetPassword w-400"  >
              <n-checkbox v-model:checked="disabled2" class="FollowingText">
                  <span class="text-slate-400 hover:text-black">
                    七天内自动登录
                  </span>
              </n-checkbox>

              <span  class="cursor-pointer hover:text-black" @click="Forget_password">忘记密码</span> | <span  class="hover:text-black cursor-pointer mr-14">遇到问题</span>
            </div>
          </n-form>

          <!-- 登录按钮-->
          <div  class="my-5" >
            <div class="rounded-full bg-red-500 ml-6 w-80">
              <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="UsersLogin">
                登录
              </button>
            </div>
          </div>

          <div class="text-center ">
            <span class="text-red-600 text-base cursor-pointer" @click="RevealLogin">快速注册</span>
          </div>
          <!-- 图标显示-->
          <loginicon/>
        </n-tab-pane>





        <!--    手机验证码登录-->
        <n-tab-pane name="signup" tab="验证码登录">
          <n-form
              size="large"
              :model="form"
              :rules="phone_rules"
          >
            <div class="FormSize" >
              <n-form-item path="phone" class="mt-15" >
                <n-input  v-model:value="form.phone"  placeholder="短信登录仅限中国大陆用户">
                  <template #prefix>
                    <span>+86</span>
                  </template>
                </n-input>
              </n-form-item>
            </div>

            <div class="FormSize">
              <n-form-item path="code" class="mt-25" >
                <n-input v-model:value="form.code"   placeholder="请输入短信验证码">
                  <template #suffix>
                    <span class="cursor-pointer text-blue-400 hover:text-current Code" @click="phoneCode">获取验证码</span>
                  </template>
                </n-input>
              </n-form-item>
            </div>

            <!-- 账号下面的文字-->
            <div class="text-right text-sm text-slate-400 w-400"  >
              <n-checkbox v-model:checked="disabled2" class="FollowingText2" >
                  <span class="text-slate-400 hover:text-black">
                    七天内自动登录
                  </span>
              </n-checkbox>

              <span  class="cursor-pointer hover:text-black mr-14" @click="Forget_password">找回账号</span>
            </div>
          </n-form>
          <!-- 登录按钮-->
          <div  class="my-5" >
            <div class="rounded-full bg-red-500 ml-6 w-80">
              <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="MobilePhoneLogin">
                登录
              </button>
            </div>
          </div>

          <div class="text-center ">
            <span class="text-red-600 text-base cursor-pointer" @click="RevealLogin">快速注册</span>
          </div>
          <!-- 图标显示-->
          <loginicon/>

        </n-tab-pane>
      </n-tabs>



      <!--      快速注册弹窗位置-->
      <div v-show="!register1">
        <span class="text-lg cursor-pointer font-semibold leading-10" style="">快速注册</span>

        <n-form
            size="large"
            :model="form"
            :rules="Register_rules"
        >
          <div class="FormSize" >
            <n-form-item path="phone" class="mt-15" >
              <n-input v-model:value="form.phone" placeholder="请输入注册手机号">
                <template #prefix>
                  <span>+86</span>
                </template>
              </n-input>
            </n-form-item>
          </div>

          <div class="FormSize">
            <n-form-item path="username" class="mt-25" >
              <n-input   v-model:value="form.username" placeholder="请输入用户名">
              </n-input>
            </n-form-item>
          </div>

          <div class="FormSize">
            <n-form-item path="password" class="mt-25" >
              <n-input   v-model:value="form.password" placeholder="请输入密码">
              </n-input>
            </n-form-item>
          </div>

          <div class="FormSize">
            <n-form-item path="code" class="mt-25" >
              <n-input  v-model:value="form.code" placeholder="请输入短信验证码">
                <template #suffix class="" >
                  <span class="cursor-pointer text-blue-400 hover:text-current Code" @click="Register_Code">获取验证码</span>
                </template>
              </n-input>
            </n-form-item>
          </div>

          <!-- 账号下面的文字-->
          <div class="text-right text-sm text-slate-400 w-400"  >
            <n-checkbox v-model:checked="disabled2" class="FollowingText3" >
                  <span class="text-slate-400 hover:text-black">
                    同意隐私政策
                  </span>
            </n-checkbox>

            <span  class="cursor-pointer hover:text-black mr-14" @click="Forget_password">找回账号</span>
          </div>
        </n-form>
        <!-- 登录按钮-->
        <div  class="my-5" >
          <div class="rounded-full bg-red-500 ml-6 w-80">
            <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="FastRegistration">
              注册账号
            </button>
          </div>
        </div>

        <div class="text-center ">
          <span class="text-red-600 text-base cursor-pointer" @click="ReturnTo_login">返回账号登录</span>
        </div>
        <!-- 图标显示-->
        <loginicon/>

      </div>


    </n-card>
  </n-modal>

</template>

<script setup>
import { ref,reactive } from "vue";
import loginicon from "./loginicon";


let showModal = ref(false)      // 显示弹框
let disabled2 = ref(null)       // 选中复选框

let register1 = ref(true)   // 注册显示
let formRef = ref(null)

// 参数模型
let form = reactive({
  username: undefined,
  password:undefined,
  phone:"",
  code: undefined,
})


// 用户登录验证规则
const usename_rules = {
  username: [
    {
      required: true,
      min: 2,
      max: 20,
      message: '长度为2 至 20之间',
      trigger: ["input", "blur"]
    }
  ],
  password: [
    {
      required: true,
      message: "密码长度在6位数以上",
      trigger: ["input", "blur"]
    }
  ],
};


// 手机登录验证规则
const phone_rules = {
  phone:
      {
        required: true,
        validator(rule, value) {
          if (!value) {
            return new Error("请输入手机号");
          } else if (!(/^1[3456789]\d{9}$/.test(value))) {
            return new Error("手机号格式不正确");
          }
          return true;
        },
        trigger: ["input", "blur"]
      },

  code:
      {
        required: true,
        message: "请输入验证码",
        trigger: ["input", "blur"]
      },
}


// 用户注册验证规则
const Register_rules = {
  phone:
      {
        required: true,
        validator(rule, value) {
          if (!value) {
            return new Error("请输入手机号");
          } else if (!(/^1[3456789]\d{9}$/.test(value))) {
            return new Error("手机号格式不正确");
          }
          return true;
        },
        trigger: ["input", "blur"]
      },

  username: [
    {
      required: true,
      min: 2,
      max: 20,
      message: '长度为2 至 20之间',
      trigger: ["input", "blur"]
    }
  ],

  password: [
    {
      required: true,
      message: "密码长度在6位数以上",
      trigger: ["input", "blur"]
    }
  ],

  code:
      {
        required: true,
        message: "请输入验证码",
        trigger: ["input", "blur"]
      },
}




// 用户登录
const UsersLogin = () =>{
  console.log(form,1111)
}

// 手机号登录
const MobilePhoneLogin = () =>{
  console.log(form,2222)
}


// 发送手机验证码
const phoneCode = () =>{
  console.log('已经发送验证码请注意查收')
}


// 忘记密码
const Forget_password = () =>{
  console.log('忘记密码')
}


// 显示注册
const RevealLogin = () =>{
  console.log('快速注册123123')
  register1.value = false
  console.log(register1.value,222222)
}

// 注册账号提交按钮
const FastRegistration = () => {
  console.log('注册账号提交成功')
}

// 注册验证码
const Register_Code = () =>{
  console.log('注册验证码')
}

const ReturnTo_login = () => {
  register1.value = true
}



</script>







<style scoped>



.ModalBox{
  width: 455px;
  height:100%;
}

.FormSize{
  margin: 0 20px
}
.mt-15{
  margin-top:-15px
}
.mt-25{
  margin-top:-25px
}

.w-400{
  width:400px;
}

.FollowingText{
  margin-right: 70px
}
.FollowingText2{
  margin-right: 137px
}
.FollowingText3{
  margin-right: 150px
}




</style>