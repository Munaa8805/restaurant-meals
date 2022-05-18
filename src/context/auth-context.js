import React, { useState, useEffect, useCallback } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  //   console.log("props", props);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  ////
  const loginHandler = (email, password) => {
    return FirebaseAuthService.loginUser(email, password);
  };

  const registerUser = (email, password) => {
    return FirebaseAuthService.registerUser(email, password);
  };

  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
    setIsLogin(false);
  };

  const contextValue = {
    isLogin,
    toggleIsloggin: switchAuthModeHandler,
    logout: handleLogout,
    useRegister: registerUser,
    login: loginHandler
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
