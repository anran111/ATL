
export function isvalidUsername(str) {
  return validatUser(str)
}

/* ユーザー名*/
export function validatUser(str) {
  const reg = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/
  return reg.test(str)
}

