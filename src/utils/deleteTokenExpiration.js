import setCookie from './setCookie'

const deleteTokenExpiration = (token) => {
  setCookie("token",token.token,0);
}

export default deleteTokenExpiration