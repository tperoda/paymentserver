import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const url = `/api/current_user`;
      const results = await axios.get(url);
      setUser(results.data);
    } catch(error) {
      console.log("Api Error", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;