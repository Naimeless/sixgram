import setCookie from './setCookie'

const updateTokenExpiration = (token) => {
  setCookie("token",token.token);
}

export default updateTokenExpiration