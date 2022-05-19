import React, { useState, useContext } from "react";
import AuthForm from "../components/Auth/AuthForm";
import FirebaseAuthService from "../FirebaseAuthService";
import AuthContext from "../context/auth-context";
const Authpage = () => {
  const authCtx = useContext(AuthContext);


  return (
    <>

      <AuthForm />
    </>
  );
};

export default Authpage;
