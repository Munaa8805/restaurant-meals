import React, { useState, useContext } from "react";
import AuthForm from "../components/Auth/AuthForm";
import FirebaseAuthService from "../FirebaseAuthService";
import AuthContext from "../context/auth-context";
const Authpage = () => {
  const authCtx = useContext(AuthContext);

  const loginHandler = (email, password) => {
    FirebaseAuthService.loginUser(email, password).then((userCredential) => {
      let userDetail = userCredential.user;
      const expirationTime = new Date(new Date().getTime());
      console.log("expirationTime", expirationTime);
      console.log("expirationTime", expirationTime.toISOString());
      // console.log("userDetail from Authpage", userDetail);
      authCtx.setEmail(userDetail.email);
      authCtx.setDisplayName(userDetail.displayName);
      authCtx.setRefreshToken(userDetail.refreshToken);

      ///// localstorage
      localStorage.setItem("token", userDetail.refreshToken);
    });
  };
  const registerHandler = (email, password) => {
    FirebaseAuthService.registerUser(email, password);
  };

  return (
    <>
      <AuthForm onLogin={loginHandler} onRegister={registerHandler} />
    </>
  );
};

export default Authpage;
