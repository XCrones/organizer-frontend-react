import { useState } from "react";
import AuthSignInComponent from "../../components/auth/AuthSignIn.component";
import AuthSignUpComponent from "../../components/auth/AuthSignUp.component";
import { AuthSubTitle, AuthTitle, AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  const callbackSubmit = () => {};

  return (
    <AuthWrapper>
      <AuthTitle>Login to Organize Pro</AuthTitle>
      <AuthSubTitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </AuthSubTitle>
      {isSignIn && <AuthSignInComponent toggleForm={() => toggleForm(!isSignIn)} callback={callbackSubmit} />}
      {!isSignIn && <AuthSignUpComponent toggleForm={() => toggleForm(!isSignIn)} callback={callbackSubmit} />}
    </AuthWrapper>
  );
};

export default AuthPage;
