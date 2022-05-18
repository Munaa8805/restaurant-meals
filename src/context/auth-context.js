import React, { useState, useEffect, useCallback } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [userUID, setUserUID] = useState(null);
  const [experationTime, setExperationTime] = useState(null);

  // console.log("email", email);
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
    localStorage.removeItem("token");
    setIsLogin(false);
  };
  const contextValue = {
    isLogin,
    toggleIsloggin: switchAuthModeHandler,
    logout: handleLogout,
    registerUser,
    login: loginHandler,
    setEmail,
    setDisplayName,
    setEmailVerified,
    setExperationTime,
    setPhoneNumber,
    setPhotoURL,
    setRefreshToken,
    setExperationTime,
    setUserUID
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
