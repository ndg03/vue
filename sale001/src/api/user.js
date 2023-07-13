export function userRegister(params) {
    request({
        method: 'post',
        url: '/user/add',
        data: params
    })
}