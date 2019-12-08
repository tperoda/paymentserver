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

  const deleteRate = (val, type) => {
    const url = "/api/manage_rates";
    axios.delete(url, {params: { val: val, type: type}})
    .then(response => setUser(response.data))
    .catch(error => console.log("Delete Rate Route Error", error));
  };

  const postRate = (val, type) => {
    const url = "/api/manage_rates";
    axios.post(url, { val: val, type: type})
    .then(response => setUser(response.data))
    .catch(error => console.log("Post Rate Route Error", error));
  };


  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, deleteRate, postRate }}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;