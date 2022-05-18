import React, { useState, useEffect, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  //   console.log("props", props);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const contextValue = {
    isLoggedIn: true,
    isLogin,
    toggleIsloggin: switchAuthModeHandler
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
