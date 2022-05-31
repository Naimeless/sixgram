const deleteTokenExpiration = (token) => {

  const setCookie = (name, value, expiration) => {
    let expires = "";
    if (expiration) {
      const date = new Date(expiration);
      expires = "; expires=" + date.toUTCString();
    }
  
    // document.cookie = name + "=" + (value || "")  + expires + "; path=/ ;domain="+DOMAIN;
    document.cookie = name + "=" + (value || "") + expires + "; path=/ ;domain=localhost";
  }
  
  setCookie("token", token, Date.now() - 86400000);

}

export default deleteTokenExpiration