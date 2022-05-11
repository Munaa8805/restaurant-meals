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

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Omnifood</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account </FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forget password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
