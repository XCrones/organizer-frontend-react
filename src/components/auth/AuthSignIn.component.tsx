import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AuthForm,
  AuthFormItem,
  AuthLabel,
  AuthInput,
  AuthInputIcon,
  AuthAlternativeItems,
  AuthAlternativeTitle,
  AuthLink,
  AuthSubmit,
  AuthFormItems,
  AuthField,
  AuthErr,
  AuthAlternativeLine,
  AuthAlternativetext,
  AuthAlternativeSign,
  AuthAlternativeSignItem,
  AuthToggleForm,
} from "./AuthSign.style";

interface Props {
  callback: Function;
  toggleForm: Function;
}

const AuthSignInComponent = ({ callback, toggleForm }: Props) => {
  const [isFormValid, setFormValid] = useState<boolean | undefined>(undefined);
  const [typePass, setTypePass] = useState<"password" | "text">("password");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async () => {
    if (isValid) {
      callback();
    }
  };

  const getError = (field: string) => (errors[field]?.message as string) || "Error!";

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormItems>
        <AuthFormItem>
          <AuthLabel>username</AuthLabel>
          <AuthField>
            <AuthInput
              onFocus={() => setFormValid(true)}
              type="email"
              {...register("email", {
                required: "required filed",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "email invalid",
                },
              })}
            />
            <AuthInputIcon>
              {!errors.email && isFormValid && <i className="bi bi-check2 text-orange-400"></i>}
              {errors.email && isFormValid && <i className="bi bi-x-lg text-red-600"></i>}
            </AuthInputIcon>
          </AuthField>
          {errors?.email && <AuthErr>{getError("email")}</AuthErr>}
        </AuthFormItem>

        <AuthFormItem>
          <AuthLabel>password</AuthLabel>
          <AuthField>
            <AuthInput
              type={typePass}
              {...register("password", {
                required: "required filed",
                minLength: {
                  value: 8,
                  message: `min char 8`,
                },
                maxLength: {
                  value: 20,
                  message: `max char 20`,
                },
              })}
            />
            <AuthInputIcon
              style={{ cursor: "pointer" }}
              onMouseUp={() => setTypePass("password")}
              onMouseDown={() => setTypePass("text")}
            >
              {typePass === "text" && <i className="bi bi-eye-fill"></i>}
              {typePass === "password" && <i className="bi bi-eye-slash-fill"></i>}
            </AuthInputIcon>
          </AuthField>
          {errors?.password && <AuthErr>{getError("password")}</AuthErr>}
        </AuthFormItem>
      </AuthFormItems>

      <AuthAlternativeItems>
        <AuthAlternativeTitle>
          <AuthAlternativeLine />
          <AuthAlternativetext>or</AuthAlternativetext>
          <AuthAlternativeLine />
        </AuthAlternativeTitle>
        <AuthAlternativeSign>
          <AuthAlternativeSignItem style={{ backgroundColor: "#fff" }}></AuthAlternativeSignItem>
          <AuthAlternativeSignItem style={{ backgroundColor: "#fff000" }}></AuthAlternativeSignItem>
          <AuthAlternativeSignItem style={{ backgroundColor: "#f00" }}></AuthAlternativeSignItem>
        </AuthAlternativeSign>
        <AuthLink>forgot password?</AuthLink>
      </AuthAlternativeItems>

      <AuthSubmit type="submit">login</AuthSubmit>

      <AuthToggleForm type="button">I’m a new user. Registration</AuthToggleForm>
    </AuthForm>
  );
};

export default AuthSignInComponent;
