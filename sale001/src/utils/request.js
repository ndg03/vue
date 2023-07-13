import axios from "axios";
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000, //超时时间
        //  headers: {  请求头
        //      'X-Custom-Header': 'foobar'
        //  }
    });
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
}