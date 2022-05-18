import React, { useState } from "react";
import { AuthContainer, Section, Formdiv, Actiondiv } from "./AuthFormElements";
import { Link } from "react-router-dom";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <AuthContainer>
      <Section>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
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
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </Actiondiv>
          <Formdiv>
            <Link to="/reset-password">{isLogin ? "Forget password" : ""}</Link>
          </Formdiv>
        </form>
      </Section>
    </AuthContainer>
  );
};

export default AuthForm;
