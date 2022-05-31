import setCookie from "./setCookie";

const createTokenExpiration = (token, isRemember) => {
  const expiration = isRemember ? Date.now() + 3600 : undefined
  setCookie("token",token.token, expiration);
}

export default createTokenExpiration