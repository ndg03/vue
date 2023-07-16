import {
    requset
} from "@/utils/request";
// 用户注册
export function userRegister(params) {
    return requset({
        method: 'post',
        url: 'user/add',
        data: params,
        Headers: { //请求头
            'Authorization': window.localStorage.token,
        }
    })
}

// 用户登录
export function userLogin(params) {
    return requset({
        method: 'post',
        url: 'user/login',
        data: params,
        Headers: { //请求头
            'Authorization': window.localStorage.token,
        }
    })
}