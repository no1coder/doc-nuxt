import {useUserStore} from '@/stores/userStore'

export const groupArray = (array, subGroupLength) => {
    if (array == undefined) return []

    let index = 0;
    let newArray = [];
    while(index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}


/**
 *  把数字语义化
 * @param value
 * @returns {string}
 */
export const numberFormat  = function (value) {
    var param;
    var k = 1000,
        sizes = ['', '千','百万', '百亿'],
        i;
    if(value < k){
        param=value
    }else{
        i = Math.floor(Math.log(value) / Math.log(k));
        param = ((value / Math.pow(k, i))).toFixed(1)+sizes[i];
    }
    return param;
}


export const  isLogin = () =>{
    // 判断当前用户的Token是否存在
    const userStore = useUserStore();
    if(userStore.token){
        return true;
    }
    handleClick()
    return false;
    // 如果存在的 返回 true

    // 否则返回 false
}

/**
 * 退出登录方法
 * @returns {boolean}
 */
export const  logout = ()=>{
    // 清空cookie
    useCookie('authToken').value =''
    useCookie('userInfo').value =''
    // 清空 store token
    const userStore = useUserStore()
    userStore.token = '';
    // 清空 store userInfo
    userStore.userInfo = undefined;
    return true;
}
