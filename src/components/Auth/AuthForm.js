import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { AuthContainer, Section, Formdiv, Actiondiv } from "./AuthFormElements";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const AuthForm = (props) => {
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const registerSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (!enteredEmail.includes("@") || enteredPassword.length < 6) {
      setError("Something wrong!.");
      return;
    }

    if (!authCtx.isLogin) {
      props.onLogin(enteredEmail, enteredPassword);
    } else {
      props.onRegister(enteredEmail, enteredPassword);
    }

    history.push("/");
  };
  const switchAuthModeHandler = () => {
    authCtx.toggleIsloggin();
  };
  return (
    <AuthContainer>
      <Section>
        <h1>{authCtx.isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={registerSubmit}>
          {error && (
            <p style={{ textAlign: "center", color: "red" }}>Something wrong</p>
          )}
          <Formdiv>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </Formdiv>
          <Formdiv>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              minLength={6}
              required
              ref={passwordInputRef}
            />
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
