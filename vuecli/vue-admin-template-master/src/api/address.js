import request from '@/utils/request'

export function addressList(){
    return request({
        url:'/showAddresses',
        method:'get'
    })
}
export function addList(data){
    return request({
        url:'/insertOneAddress',
        method:'post',
        data
    })
}
export function deleteList(params){
    return request({
        url:'/delOneAddress',
        method:'get',
        params
    })
}