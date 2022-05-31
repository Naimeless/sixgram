const setCookie = (name, value) => {
  
    // document.cookie = name + "=" + (value || "")  + expires + "; path=/ ;domain="+DOMAIN;
    document.cookie = name + "=" + (value || "") + "; path=/ ;domain=localhost";
  }
  
  export default setCookie