import { defineStore } from 'pinia'
// 用户信息
export const useUserStore = defineStore('main', {
    // other options...  中间件
    state:()=>({
        // 将Cookie放到浏览器里
        token:useCookie('authToken').value||'',
        userInfo:useCookie('userInfo').value||'',
    }),
    getters:{
        async  getUserInfo(state){
            if(state.token == '' || state.userInfo == undefined) {
                return undefined
            }
            return state.userInfo;
        }
    }
})

