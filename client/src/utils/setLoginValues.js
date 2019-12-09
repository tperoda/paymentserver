const setLoginValues = (googleId) => {
  if (googleId !== undefined) {
    return {
      text: "Logout",
      url: "/api/logout"
    };
    
  }
  return {
    text: "Login",
    url: "/auth/google"
  };
}

module.exports = { setLoginValues };