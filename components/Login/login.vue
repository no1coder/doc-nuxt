<template>

  <n-button @click="showModal = true">
    登录
  </n-button>
  <button @click="logoutHeader">退出登录</button>
  <n-modal v-model:show="showModal">
    <n-card class="modalBox rounded-lg "
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
            <div class="formSize">
              <n-form-item path="username" class="mt-15" >
                <n-input v-model:value="form.username" placeholder="请输入用户名" />
              </n-form-item>
            </div>
            <div class="formSize">
              <n-form-item path="password" class="mt-25" >
                <n-input v-model:value="form.password" type="password" placeholder="请输入密码"/>
              </n-form-item>
            </div>

            <!-- 账号下面的文字-->
            <div class="text-right text-sm text-slate-400 ForgetPassword w-400"  >
              <n-checkbox v-model:checked="disabled2" class="followingText">
                  <span class="text-slate-400 hover:text-black">
                    七天内自动登录
                  </span>
              </n-checkbox>

              <span  class="cursor-pointer hover:text-black" @click="forget_password">忘记密码</span> | <span  class="hover:text-black cursor-pointer mr-14">遇到问题</span>
            </div>
          </n-form>

          <!-- 登录按钮-->
          <div  class="my-5" >
            <div class="rounded-full bg-red-500 ml-6 w-80">
              <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="usersLogin">
                登录
              </button>
            </div>
          </div>

          <div class="text-center my-1.5">
            <span class="text-red-600 text-base cursor-pointer" @click="revealLogin">快速注册</span>
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
            <div class="formSize" >
              <n-form-item path="phone" class="mt-15" >
                <n-input  v-model:value="form.phone"  placeholder="短信登录仅限中国大陆用户">
                  <template #prefix>
                    <span>+86</span>
                  </template>
                </n-input>
              </n-form-item>
            </div>

            <div class="formSize">
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
              <n-checkbox v-model:checked="disabled2" class="followingText2" >
                  <span class="text-slate-400 hover:text-black">
                    七天内自动登录
                  </span>
              </n-checkbox>

              <span  class="cursor-pointer hover:text-black mr-14" @click="forget_password">找回账号</span>
            </div>
          </n-form>
          <!-- 登录按钮-->
          <div  class="my-5" >
            <div class="rounded-full bg-red-500 ml-6 w-80">
              <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="mobilePhoneLogin">
                登录
              </button>
            </div>
          </div>

          <div class="text-center my-1.5">
            <span class="text-red-600 text-base cursor-pointer" @click="revealLogin">快速注册</span>
          </div>
          <!-- 图标显示-->
          <loginicon/>

        </n-tab-pane>
      </n-tabs>



      <!--      快速注册弹窗位置-->
      <div v-show="!register1" class="my-1">
        <span class="text-lg cursor-pointer font-semibold leading-10" style="">快速注册</span>

        <n-form
            size="large"
            :model="form"
            :rules="register_rules"
        >
          <div class="formSize" >
            <n-form-item path="phone" class="mt-15" >
              <n-input v-model:value="form.phone" placeholder="请输入注册手机号">
                <template #prefix>
                  <span>+86</span>
                </template>
              </n-input>
            </n-form-item>
          </div>

          <div class="formSize">
            <n-form-item path="username" class="mt-25" >
              <n-input   v-model:value="form.username" placeholder="请输入用户名">
              </n-input>
            </n-form-item>
          </div>

          <div class="formSize">
            <n-form-item path="password" class="mt-25" >
              <n-input   v-model:value="form.password" placeholder="请输入密码">
              </n-input>
            </n-form-item>
          </div>

          <div class="formSize">
            <n-form-item path="code" class="mt-25" >
              <n-input  v-model:value="form.code" placeholder="请输入短信验证码">
                <template #suffix class="" >
                  <span class="cursor-pointer text-blue-400 hover:text-current Code" v-show="!countdown" @click="register_Code">获取验证码</span>
                  <span class="text-current" v-show="countdown" @click="register_Code1">{{ seconds }}</span>

                </template>
              </n-input>
            </n-form-item>
          </div>

          <!-- 账号下面的文字-->
          <div class="text-right text-sm text-slate-400 w-400"  >
            <n-checkbox v-model:checked="disabled2" class="followingText3" >
                  <span class="text-slate-400 hover:text-black">
                    同意隐私政策
                  </span>
            </n-checkbox>

            <span  class="cursor-pointer hover:text-black mr-14" @click="forget_password">找回账号</span>
          </div>
        </n-form>
        <!-- 登录按钮-->
        <div  class="my-5" >
          <div class="rounded-full bg-red-500 ml-6 w-80">
            <button class="text-white text-base hover:bg-red-600 duration-300 rounded-full w-full h-12" @click="fastRegistration">
              注册账号
            </button>
          </div>
        </div>

        <div class="text-center ">
          <span class="text-red-600 text-base cursor-pointer" @click="returnTo_login">返回账号登录</span>
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
import {logout} from '/util/util';
import  {useUserStore} from '/stores/userStore'



const userStore = useUserStore();                 // 获取用户信息  和token
// const userInfo = await userStore.getUserInfo


let showModal = ref(false)      // 显示弹框
let disabled2 = ref(null)       // 选中复选框

let register1 = ref(true)       // 注册显示
let seconds = ref(60)           // 验证码秒数
let countdown = ref(false);   // 隐藏发送验证码倒计时


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
const register_rules = {
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
      min: 6,
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


// 手机验证码解析方法
const common = {
  // 手机验证码发送数据
  jiemi(str){
    let key = 'jdjahfajdiehldi';
    let string = this.base64_decode(str);

    let len = key.length;
    let code = '';
    for (let i = 0; i < string.length; i++) {
      let k = i % len;
      code += String.fromCharCode(string.charCodeAt(i) ^ key.charCodeAt(k));
    }
    return JSON.parse(code);
  },
  base64_decode(data){
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        dec = "",
        tmp_arr = [];
    if (!data) {
      return data;
    }
    data += '';
    do { // unpack four hexets into three octets using index points in b64
      h1 = b64.indexOf(data.charAt(i++));
      h2 = b64.indexOf(data.charAt(i++));
      h3 = b64.indexOf(data.charAt(i++));
      h4 = b64.indexOf(data.charAt(i++));
      bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
      o1 = bits >> 16 & 0xff;
      o2 = bits >> 8 & 0xff;
      o3 = bits & 0xff;
      if (h3 == 64) {
        tmp_arr[ac++] = String.fromCharCode(o1);
      } else if (h4 == 64) {
        tmp_arr[ac++] = String.fromCharCode(o1, o2);
      } else {
        tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
      }
    } while (i < data.length);
    dec = tmp_arr.join('');

    console.log('解析的内存图片',dec)

    return dec;
  }
}




// 用户登录
const usersLogin = () =>{
  console.log(form,1111,'用户登录')
  if (form) {
    f.post('/api/auth/login', form).then(res => {
      console.log(res,'API登录成功')
      // 保存当前用户的token
      setLoginToken(res.token)

    }).catch(err => {
      console.log(err,'登录失败')
    })
  } else {
    console.log('没有登录参数')
    return false;
  }
}

// 手机号登录
const mobilePhoneLogin = () =>{
  console.log(form,'手机号登录')

}


// 发送手机验证码
const phoneCode = () =>{
  console.log('已经发送验证码请注意查收')
}
const phoneCode1 = () =>{
  console.log('已经发送验证码请注意查收111111')
}


// 忘记密码
const forget_password = () =>{
  console.log('忘记密码')
}



// 显示注册页面
const revealLogin = () =>{
  register1.value = false
}


// 手机发送注册验证码
const register_Code = () =>{
    console.log('注册验证码')
  if ((/^1[3456789]\d{9}$/.test(form.phone))) {
    f.post('/api/auth/register_code', form).then(res=>{
      let code = common.jiemi(res.code)
      let phone = form.phone
      let form1 = Object.assign({phone},code)         // 对象合并
          f.post('/api/auth/register_phone_code', form1).then(res=>{
            countdown.value = true;
            const forgetphonetime = setInterval(() => {
              seconds.value --;
              if(seconds.value === 0) {
                seconds.value = 60;
                console.log('每秒倒计时0重置倒计时',seconds.value)
                countdown.value = false;
                clearInterval(forgetphonetime)
              }
            }, 1000)
        console.log('全局提示消息验证码发送成功',res)
      })
    })
  }else{
    console.log('全局提示消息注册手机号不真实')
  }
}
// 发送后的效果显示
const register_Code1 = () =>{
  console.log('全局提示消息注册验证码已发送请勿在点击数字了')
}


// 注册账号提交按钮
const fastRegistration = () => {
  console.log(form,22222)
  f.post('/api/auth/register',form).then(res=>{
    setLoginToken(res.token)      // 保存token

    console.log(res,'全局提示消息注册账号提交成功')
  })
}

// 返回账号登录页面
const returnTo_login = () => {
  register1.value = true
}





/**
 *  设置登录成功地ToKen
 * @param token   将用户信息储存在cookie里面
 * @returns {boolean}
 */
const setLoginToken = (token)=>{
  let authToken = useCookie('authToken')
  let userInfo = useCookie('userInfo')

  const userStore = useUserStore()        // 用户信息储存
  userStore.token = token
  authToken.value = token
  showModal.value = false;              // 关闭显示弹框
  f.post('/api/auth/me').then(res=>{
    console.log(res,'这是用户信息API的详细数据')
    userStore.userInfo = res
    userInfo.value = res

  })
  return true;
}



// 退出登录
const logoutHeader = async ()=>{
  if (userStore.token){
    logout()
    //将token设置为空
    console.log('全局提示消息退出成功');
  }else{
    console.log('全局提示消息退出失败');
  }
}





</script>





<style scoped>

.modalBox{
  width: 455px;
  height:100%;
}

.formSize{
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

.followingText{
  margin-right: 70px
}
.followingText2{
  margin-right: 137px
}
.followingText3{
  margin-right: 150px
}




</style>