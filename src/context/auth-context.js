import React, { useState, useEffect, useCallback } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const AuthContext = React.createContext({
  token: "",
  email: "",
  error: "",
  isLogin: false,
  login: (email, password) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [userUID, setUserUID] = useState(null);
  const [experationTime, setExperationTime] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const contextValue = {
    setIsLogin,
    isLogin,
    toggleIsloggin: switchAuthModeHandler,
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
