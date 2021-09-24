import request from '@/utils/request'

export function showMessage(){
    return request({
        url:'/showMessage',
        method:'get'
    })
}
export function addMessage(data){
    return request({
        url:'/insertAllMessage',
        method:'post',
        data
    })
}
export function deleteMessage(params){
    return request({
        url:'/delOneMessage',
        method:'get',
        params
    })
}