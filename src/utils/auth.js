/** @auther   : ww  **/
/** @date     : 2018.07.06  **/
import Cookies from 'js-cookie'

const TokenKey = 'kao-web-app'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
