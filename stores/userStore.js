import { defineStore } from 'pinia'


// 用户信息  信息处理
export const useUserStore = defineStore('main', {
    // other options...  中间件
    state:()=>({
        // 将Cookie放到浏览器里   状态将数据放到浏览器不然就放空
        token:useCookie('authToken').value||'',
        userInfo:useCookie('userInfo').value||'',
    }),
    // 获取数据 异步请求获取用户数据存放到浏览器里
    getters:{
      async  getUserInfo(state){
            if(state.token == '' || state.userInfo == undefined) {
                return undefined
            }
            return state.userInfo;
        }
    }
})
// const userStore = useUserStore()
// console.log(124445556565)
// console.log(userStore.userInfo)
