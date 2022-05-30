const setCookie = (name, value, expiration) => {
  let expires = "";
  if (expiration) {
    const date = new Date(expiration);
    expires = "; expires=" + date.toUTCString();
  }

  // document.cookie = name + "=" + (value || "")  + expires + "; path=/ ;domain="+DOMAIN;
  document.cookie = name + "=" + (value || "")  + "; path=/ ;domain=localhost";
}

export default setCookie