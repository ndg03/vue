import axios from "axios";

export function requset(config) {

    const instance = axios.create({
        baseURL: 'http://localhost:9090',
        timeout: 10000, //超时时间
    });
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求前做些什么
        return config;
    }, function (error) {
        // 对错误请求做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        //2xx范围内的状态码都会触发该函数
        // 对响应数据做点什么
        console.log("封装", response);
        return response.data;
    }, function (error) {
        // 超出2xx范围的状态码都会触发该函数
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    //真正发送请求
    return instance(config);
}