import { useState } from "react";
import AuthSignInComponent from "../../components/auth/AuthSignIn.component";
import AuthSignUpComponent from "../../components/auth/AuthSignUp.component";
import { IAuth } from "../../models/auth.model";
import { AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  const callbackSubmit = (user: IAuth) => {
    console.log(user);
  };

  return (
    <AuthWrapper>
      {isSignIn && <AuthSignInComponent toggleForm={() => toggleForm(!isSignIn)} callback={callbackSubmit} />}
      {!isSignIn && <AuthSignUpComponent toggleForm={() => toggleForm(!isSignIn)} callback={callbackSubmit} />}
    </AuthWrapper>
  );
};

export default AuthPage;
