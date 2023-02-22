import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuthSignIn, IAuthSignUp } from "../../models/auth.model";
import { ROUTER_LINKS } from "../../router-links";
import { useAuthStore } from "../../store/auth.store";
import { GButton } from "../../style/components/button.style";
import AuthPreloaderComponent from "./AuthPreloader.component";
import {
  AuthForm,
  AuthFormItem,
  AuthLabel,
  AuthInput,
  AuthInputIcon,
  AuthLink,
  AuthFormItems,
  AuthField,
  AuthErr,
  AuthToggleForm,
  AuthTitle,
  AuthSubTitle,
} from "./AuthSign.style";

interface Props {
  toggleForm: Function;
}

const AuthSignUpComponent = ({ toggleForm }: Props) => {
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state);

  const [typePass, setTypePass] = useState<"password" | "text">("password");
  const [errMessage, SetErrMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    if (isValid) {
      const user: IAuthSignUp = {
        email: data["email"] || "",
        password: data["password"] || "",
        name: data["name"] || "",
        urlAvatar: "",
      };

      const result = await authStore.singUp(user);
      console.log(result);
      if (!result.isError) {
        navigate(ROUTER_LINKS.todos.link, { replace: false });
      } else {
        SetErrMessage(result.message);
      }
    }
  };

  const getError = (field: string) => (errors[field]?.message as string) || "Error!";

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      {authStore.isPending && <AuthPreloaderComponent />}
      <AuthTitle>sign up to organize pro</AuthTitle>
      <AuthSubTitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </AuthSubTitle>
      <AuthFormItems>
        <AuthFormItem>
          <AuthLabel>first name</AuthLabel>
          <AuthField>
            <AuthInput
              minLength={3}
              maxLength={20}
              onFocus={() => SetErrMessage("")}
              type="text"
              {...register("name", {
                required: "required filed",
                minLength: 3,
                maxLength: 20,
              })}
            />
            <AuthInputIcon>
              {/* {!errors.name && <i className="bi bi-check2 text-orange-400"></i>} */}
              {errors.name && <i className="bi bi-x-lg text-red-600"></i>}
            </AuthInputIcon>
          </AuthField>
          {errors?.name && <AuthErr>{getError("name")}</AuthErr>}
          {errMessage.length > 0 && <AuthErr>{errMessage}</AuthErr>}
        </AuthFormItem>

        <AuthFormItem>
          <AuthLabel>email</AuthLabel>
          <AuthField>
            <AuthInput
              onFocus={() => SetErrMessage("")}
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
              {/* {!errors.email && isFormValid && <i className="bi bi-check2 text-orange-400"></i>} */}
              {errors.email && <i className="bi bi-x-lg text-red-600"></i>}
            </AuthInputIcon>
          </AuthField>
          {errors?.email && <AuthErr>{getError("email")}</AuthErr>}
          {errMessage.length > 0 && <AuthErr>{errMessage}</AuthErr>}
        </AuthFormItem>

        <AuthFormItem>
          <AuthLabel>password</AuthLabel>
          <AuthField>
            <AuthInput
              onFocus={() => SetErrMessage("")}
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
          {errMessage.length > 0 && <AuthErr>{errMessage}</AuthErr>}
        </AuthFormItem>
      </AuthFormItems>

      {/* <AuthAlternativeItems>
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
      </AuthAlternativeItems> */}

      <GButton style={{ marginBottom: "20px" }} type="submit" color1="#266ED7" color2="#4D8AEB">
        sign up
      </GButton>

      <AuthToggleForm onClick={() => toggleForm()} type="button">
        I have an account, Login
      </AuthToggleForm>
    </AuthForm>
  );
};

export default AuthSignUpComponent;
