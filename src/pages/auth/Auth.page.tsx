import { useState } from "react";
import AuthPreloaderComponent from "../../components/auth/AuthPreloader.component";
import AuthSignInComponent from "../../components/auth/AuthSignIn.component";
import AuthSignUpComponent from "../../components/auth/AuthSignUp.component";
import { IAuthUser } from "../../store/slices/auth.slice";
import { AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  const callbackSubmit = (user: IAuthUser) => {
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
