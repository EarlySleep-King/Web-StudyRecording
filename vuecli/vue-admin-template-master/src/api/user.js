import request from '@/utils/request'
//post传参用data(对象)
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
//get传参用params(对象)
export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
