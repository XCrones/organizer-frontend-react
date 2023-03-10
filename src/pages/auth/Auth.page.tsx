import { useState } from "react";
import { AuthSignInComponent, AuthSignUpComponent } from "../../components";
import { G_INDENTS } from "../../ui/variables.style";
import { AuthWrapper } from "./Auth.style";

const AuthPage = () => {
  const [isSignIn, toggleForm] = useState(true);

  return (
    <AuthWrapper pl={G_INDENTS.left} pr={G_INDENTS.right}>
      {isSignIn && <AuthSignInComponent toggleForm={() => toggleForm(!isSignIn)} />}
      {!isSignIn && <AuthSignUpComponent toggleForm={() => toggleForm(!isSignIn)} />}
    </AuthWrapper>
  );
};

export default AuthPage;
