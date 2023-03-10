import { useState } from "react";
import { AuthSignInComponent, AuthSignUpComponent } from "../../components";
import { GIndents } from "../../ui/variables.style";
import { AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  return (
    <AuthWrapper pl={GIndents.left} pr={GIndents.right}>
      {isSignIn && <AuthSignInComponent toggleForm={() => toggleForm(!isSignIn)} />}
      {!isSignIn && <AuthSignUpComponent toggleForm={() => toggleForm(!isSignIn)} />}
    </AuthWrapper>
  );
};

export default AuthPage;
