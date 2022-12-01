//对于原有的axios进行二次封装
import axios from 'axios' //引入axios

//1.利用axios对象的create方法去创建一个axios示例
//2.request就是axios,只不过可以配置参数
const requests = axios.create({
    //配置对象
    //baseURL 基础路径，发请求的时候，路径当中会出现api
    // baseURL:"http://39.108.14.150:3000/blogReception",
    baseURL:"http://localhost:3000/blogReception",
    timeout:5000 //请求超时超过5s代表请求失败
})

//请求拦截器：在发起请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
//interceptors 拦截器的意思
requests.interceptors.request.use((config)=>{
    //config 是一个配置对象，该对象里面有一个属性很重要，就是header请求头
    return config
})

//响应拦截器
requests.interceptors.response.use((res) =>{
    //响应成功的回调函数，服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    return res
},(error) =>{
    //服务器响应失败的回调函数
    return Promise.reject(new Error('Faile'))
})


//对外暴露
export default requests