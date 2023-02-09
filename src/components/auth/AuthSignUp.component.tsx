import {
  AuthForm,
  AuthFormItem,
  AuthLabel,
  AuthInput,
  AuthInputIcon,
  AuthAlternativeItems,
  AuthAlternativeTitle,
  AuthAlternativeItem,
  AuthLink,
  AuthSubmit,
} from "./AuthSign.style";

interface Props {
  callback: Function;
  toggleForm: Function;
}

const AuthSignUpComponent = ({ callback, toggleForm }: Props) => {
  const onSubmit = () => {
    callback();
  };

  return (
    <AuthForm onSubmit={onSubmit}>
      <AuthFormItem>
        <AuthLabel>username</AuthLabel>
        <AuthInput />
        <AuthInputIcon />
      </AuthFormItem>

      <AuthFormItem>
        <AuthLabel>password</AuthLabel>
        <AuthInput />
        <AuthInputIcon />
      </AuthFormItem>

      <AuthAlternativeItems>
        <AuthAlternativeTitle>or</AuthAlternativeTitle>
        <AuthAlternativeItem></AuthAlternativeItem>
        <AuthAlternativeItem></AuthAlternativeItem>
        <AuthAlternativeItem></AuthAlternativeItem>
        <AuthLink>forgot password?</AuthLink>
      </AuthAlternativeItems>

      <AuthSubmit>login</AuthSubmit>
    </AuthForm>
  );
};

export default AuthSignUpComponent;
