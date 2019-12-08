import React, { useContext, useEffect } from "react";
import HeaderComponent from "components/HeaderComponent";
import { UserContext } from "store/Store";

const Header = () => {
  const value = useContext(UserContext);
  const { googleId } = value.user;

  const setLoginValues = () => {
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

  useEffect(() => {
    setLoginValues();
  });

  return <HeaderComponent loginValues={setLoginValues()} />;
}

export default Header;