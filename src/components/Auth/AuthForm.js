import React, { useState, useContext } from "react";
import { AuthContainer, Section, Formdiv, Actiondiv } from "./AuthFormElements";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  console.log("authCtx", authCtx);

  const switchAuthModeHandler = () => {
    authCtx.toggleIsloggin();
  };
  return (
    <AuthContainer>
      <Section>
        <h1>{authCtx.isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          <Formdiv>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </Formdiv>
          <Formdiv>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required />
          </Formdiv>
          <Actiondiv>
            <button>{authCtx.isLogin ? "Login" : "Create Account"}</button>
            <button type="button" onClick={switchAuthModeHandler}>
              {authCtx.isLogin
                ? "Create new account"
                : "Login with existing account"}
            </button>
          </Actiondiv>
          <Formdiv>
            <Link to="/reset-password">
              {authCtx.isLogin ? "Forget password" : ""}
            </Link>
          </Formdiv>
        </form>
      </Section>
    </AuthContainer>
  );
};

export default AuthForm;
