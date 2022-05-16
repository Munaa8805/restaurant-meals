import React from "react";
import { useHistory } from "react-router-dom";
import { SignupContainer } from "./SignupElements";
const SingupComponent = () => {
  const history = useHistory();
  const onBackHandler = () => {
    history.push("/");
  };
  return (
    <SignupContainer>
      <h1>Sign Up page</h1>
      <div>
        <button onClick={onBackHandler}>Back Home page</button>
      </div>
    </SignupContainer>
  );
};

export default SingupComponent;
