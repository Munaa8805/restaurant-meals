import React from "react";
import {
  Container,
  FormWrap,
  FormContent,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormH1,
  Form,
  Icon
} from "./SignInElements";
import { ErrorContainer } from "../Error";
import useInput from "../../hooks/loginhook";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = useInput((value) => value.trim().length >= 6);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // console.log(enteredEmailIsValid);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetPasswordInput();
    resetEmailInput();
    history.push("/");
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Omnifood</Icon>
          <FormContent>
            <Form onSubmit={formSubmissionHandler}>
              <FormH1>Sign in to your account </FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailInputHasError && (
                <ErrorContainer>Please enter a valid email.</ErrorContainer>
              )}

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                minlength={6}
                required
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              {passwordInputHasError && (
                <ErrorContainer>
                  Password must not be wrong. Password must be more than 6
                  characters
                </ErrorContainer>
              )}

              <FormButton type="submit">Submit</FormButton>
              <Text>Forget password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
