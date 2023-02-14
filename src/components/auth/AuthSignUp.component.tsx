import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authSignUp, IAuthUser } from "../../store/slices/auth.slice";
import { GButton } from "../../style/components/button.style";
import AuthPreloaderComponent from "./AuthPreloader.component";
import {
  AuthForm,
  AuthFormItem,
  AuthLabel,
  AuthInput,
  AuthInputIcon,
  AuthAlternativeItems,
  AuthAlternativeTitle,
  AuthLink,
  AuthFormItems,
  AuthField,
  AuthErr,
  AuthAlternativeLine,
  AuthAlternativetext,
  AuthAlternativeSign,
  AuthAlternativeSignItem,
  AuthToggleForm,
  AuthTitle,
  AuthSubTitle,
} from "./AuthSign.style";

interface Props {
  callback: Function;
  toggleForm: Function;
}

const AuthSignUpComponent = ({ callback, toggleForm }: Props) => {
  const dispatch = useAppDispatch();
  const { isPending } = useAppSelector((state) => state.audh);

  const [isFormValid, setFormValid] = useState<boolean | undefined>(undefined);
  const [typePass, setTypePass] = useState<"password" | "text">("password");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    if (isValid) {
      const user: IAuthUser = {
        email: data["email"] || "",
        password: data["password"] || "",
      };
      // callback(user);
      dispatch(authSignUp(user));
    }
  };

  const getError = (field: string) => (errors[field]?.message as string) || "Error!";

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      {isPending && <AuthPreloaderComponent />}
      <AuthTitle>sign up to organize pro</AuthTitle>
      <AuthSubTitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </AuthSubTitle>
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
                  value: 6,
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
          <AuthAlternativeSignItem color="#281286">
            <i className="bi bi-github"></i>
          </AuthAlternativeSignItem>
          <AuthAlternativeSignItem color="#000">
            <i className="bi bi-apple"></i>
          </AuthAlternativeSignItem>
          <AuthAlternativeSignItem color="#ff4800">
            <i className="bi bi-ubuntu"></i>
          </AuthAlternativeSignItem>
        </AuthAlternativeSign>
        <AuthLink></AuthLink>
      </AuthAlternativeItems>

      <GButton type="submit" color1="#266ED7" color2="#4D8AEB">
        sign up
      </GButton>

      <AuthToggleForm onClick={() => toggleForm()} type="button">
        I have an account, Login
      </AuthToggleForm>
    </AuthForm>
  );
};

export default AuthSignUpComponent;
