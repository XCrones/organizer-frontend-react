import { useState } from "react";
import AuthSignInComponent from "../../components/auth/AuthSignIn.component";
import AuthSignUpComponent from "../../components/auth/AuthSignUp.component";
import { AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  return (
    <AuthWrapper>
      {isSignIn && <AuthSignInComponent toggleForm={() => toggleForm(!isSignIn)} />}
      {!isSignIn && <AuthSignUpComponent toggleForm={() => toggleForm(!isSignIn)} />}
    </AuthWrapper>
  );
};

export default AuthPage;
