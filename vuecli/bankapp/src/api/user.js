import request from '../utils/ request'

export function searchMessage(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}