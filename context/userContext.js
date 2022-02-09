import { createContext, useContext, useEffect, useState } from "react";

const defaultValue = {
  globalName: "",
  login: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultValue);

export const UserWrapper = ({ children }) => {
  const [globalName, setGlobalName] = useState(defaultValue.globalName);

  useEffect(() => {
    const storageGlobalName = localStorage.getItem("globalName");
    if (storageGlobalName) {
      setGlobalName(storageGlobalName);
    }
  }, []);

  const login = (data) => {
    setGlobalName(data);
    localStorage.setItem("globalName", data);
  };

  const logout = () => {
    setGlobalName("");
    localStorage.removeItem("globalName");
  };

  return (
    <UserContext.Provider value={{ globalName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
