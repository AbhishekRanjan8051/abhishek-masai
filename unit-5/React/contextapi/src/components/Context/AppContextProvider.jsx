import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = React.useState(false);
  const [token, setToken] = React.useState("abcdef");

  const handleLogin = (username) => {
    setISAuth(true);
    setToken(Date.now() + username);
  };
  const value = { isAuth, token, handleLogin };
  // console.log(children);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
