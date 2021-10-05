import request from '../utils/ request'

export function  bankList(){
    return request({
        url:'/showAddresses',
        method:'get'
    })
}