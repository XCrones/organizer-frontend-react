import { useState } from "react";
import { useForm } from "react-hook-form";
import { IAuthSignIn } from "../../models/auth.model";
import { useAuthStore } from "../../store/auth.store";
import { GButton } from "../../style/components/button.style";
import AuthPreloaderComponent from "./AuthPreloader.component";
import {
  AuthForm,
  AuthFormItem,
  AuthLabel,
  AuthInput,
  AuthInputIcon,
  AuthFormItems,
  AuthField,
  AuthErr,
  AuthToggleForm,
  AuthTitle,
  AuthSubTitle,
} from "./AuthSign.style";
import { useNavigate } from "react-router-dom";
import { ROUTER_LINKS } from "../../router-links";

interface Props {
  toggleForm: Function;
}

const AuthSignInComponent = ({ toggleForm }: Props) => {
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state);
  const [typePass, SetTypePass] = useState<"password" | "text">("password");
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
      const user: IAuthSignIn = {
        email: data["email"] || "",
        password: data["password"] || "",
      };
      const result = await authStore.singIn(user);
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
      <AuthTitle>sign in to organize pro</AuthTitle>
      <AuthSubTitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </AuthSubTitle>
      <AuthFormItems>
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
              {/* {!errors.email && <i className="bi bi-check2 text-orange-400"></i>} */}
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
              })}
            />
            <AuthInputIcon
              style={{ cursor: "pointer" }}
              onMouseUp={() => SetTypePass("password")}
              onMouseDown={() => SetTypePass("text")}
            >
              {typePass === "text" && <i className="bi bi-eye-fill"></i>}
              {typePass === "password" && <i className="bi bi-eye-slash-fill"></i>}
            </AuthInputIcon>
          </AuthField>
          {errors?.password && <AuthErr>{getError("password")}</AuthErr>}
          {errMessage.length > 0 && <AuthErr>{errMessage}</AuthErr>}
        </AuthFormItem>
      </AuthFormItems>

      <GButton style={{ marginBottom: "20px" }} type="submit" color1="#266ED7" color2="#4D8AEB">
        sign in
      </GButton>

      <AuthToggleForm onClick={() => toggleForm()} type="button">
        I’m a new user. Registration
      </AuthToggleForm>
    </AuthForm>
  );
};

export default AuthSignInComponent;
