import React, { useContext, useEffect } from "react";
import HeaderComponent from "components/HeaderComponent";
import { setLoginValues } from "utils";
import { UserContext } from "store/Store";

const Header = () => {
  const value = useContext(UserContext);
  const { googleId } = value.user;

  

  useEffect(() => {
    setLoginValues();
  });

  return <HeaderComponent loginValues={setLoginValues(googleId)} />;
}

export default Header;