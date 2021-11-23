import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = React.useState(false);
  const [token, setToken] = React.useState("abcdef");
  const value = { isAuth, token };
  console.log(children);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
