import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { SignupContainer } from "./SignupElements";
import {
  FormWrap,
  FormContent,
  FormLabel,
  FormButton,
  FormH1,
  Form,
  ButtonContainer
} from "../FormElements";

const SingupComponent = () => {
  const [error, setError] = useState(null);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onBackHandler = () => {
    history.push("/");
  };
  const signupSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (!enteredEmail.includes("@") || enteredPassword.length < 6) {
      setError("Something wrong!.");
      return;
    }
    console.log("email", enteredEmail);
    console.log("password", enteredPassword);
    history.push("/");
  };
  return (
    <SignupContainer>
      <FormWrap>
        <FormContent>
          <Form onSubmit={signupSubmit}>
            {error && (
              <p style={{ textAlign: "center", color: "red" }}>
                Something wrong
              </p>
            )}
            <FormH1>Sign Up in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <input type="email" required ref={emailInputRef} id="email" />

            <FormLabel htmlFor="password">Password</FormLabel>
            <input
              id="password"
              type="password"
              minlength={6}
              required
              ref={passwordInputRef}
            />

            <ButtonContainer>
              <FormButton type="submit">Submit</FormButton>
            </ButtonContainer>
            <ButtonContainer>
              <FormButton type="button" onClick={onBackHandler}>
                Back to Home
              </FormButton>
            </ButtonContainer>
          </Form>
        </FormContent>
      </FormWrap>
    </SignupContainer>
  );
};

export default SingupComponent;
