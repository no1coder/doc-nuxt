import {useUserStore} from '@/stores/userStore'
import {logout} from '@/util/util'
// let userStore = useUserStore();
import {useRouter} from 'vue-router';
class baseFetch {
    getHeader = () => {
        // 获取运行时配置 nuxt.config.ts配置文件
        let config = useRuntimeConfig()
        let userStore = useUserStore()
        // const token = useCookie('authToken')
        // let authTest = useState('authTest')
        const headers = {
            Accept: 'application/json',
            authorization: undefined
        };
        // 将配置的.env文件赋值
        if (userStore.token) {        // 如果有值的时候赋值进去
            headers.authorization = 'Bearer ' + userStore.token;
        }
        return headers;        // 返回
    }
    getCreate = () => {

        let config = useRuntimeConfig()         // 将运行的时候nuxt.config.ts配置文件进行配置
        return{                          // 创建默认配置
            baseURL: config.apiUrl,            // 公共配置地址和文件
            headers: this.getHeader(),          // 带上配置方法到头部信息里面
            onResponse: async ({request, response, options}) => this.onResponse({request, response, options})
        }
    }

    // 响应监听
    async onResponse({request, response, options}) {
        // Log response    监听反应时 失败进行下面的核算操作
        const error = {
            message: ''
        }
        switch (response.status) {               // 反应状态进行赋值 返回
            case 400:
                error.message = response.data.message
                break
            case 401:
                logout();
                const router = useRouter()
                error.message = '登录信息已过期，请登录'
                if (!process.server && error.message) {
                    // message.error(error.message)
                    // console.log(error.message)
                }
                router.go(0)
                break
            case 403:
                error.message = response.data.message || '拒绝访问'
                break
            case 408:
                error.message = '请求超时';
                break
            case 404:
                error.message = 'API不存在';
                break
            case 422:
                error.message = response.data.errors[Object.keys(response.data.errors)[0]]
                break
            case 500:
                error.message = '服务器内部错误';
                break
            case 501:
                error.message = '服务未实现';
                break
            case 502:
                error.message = '网关错误';
                break
            case 503:
                error.message = '服务不可用';
                break
            case 504:
                error.message = '网关超时';
                break
            case 505:
                error.message = 'HTTP版本不受支持';
                break
            default:
                break
        }
        // 配置失败提示全局效果 将里面的error返回具体提示消息
        if (!process.server && error.message) {

            console.log((error.message));
        }
    }

    // 取里面的数据固定属性
    fetch = (url: string, options: Object) => {
        // 初始化fetch   里面的create为配置的公共地址文件和头部信息
        let createData = this.getCreate();
        if(url.indexOf('http://') != -1 ||url.indexOf("https://") != -1){
            createData.baseURL = undefined;
        }
        const fetch = $fetch.create(createData)
        return fetch(url, options);
    }      // 地址为 调用的配置地址 参数为对象传输方法 和 参数或body体
    get = (url: string, params: Object) => {
        return this.fetch(url, {method: 'get', params});
    }
    put = (url: string, body: Object) => {
        return this.fetch(url, {method: 'PUT', body});
    }
    post = (url: string, body: Object) => {
        return this.fetch(url, {method: 'POST', body});
    }
    delete = (url: string, body: Object) => {
        return this.fetch(url, {method: 'delete', body});
    }
    patch = (url: string, body: Object) => {
        return this.fetch(url, {method: 'patch', body});
    }

}



export default new baseFetch();         // 将这里面的方法暴露出来