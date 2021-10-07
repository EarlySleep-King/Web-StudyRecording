import request from '../utils/ request'

export function searchMessage(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}
export function showMessage(){
    return request({
        url:'/showMessage',
        method:'get'
    })
}