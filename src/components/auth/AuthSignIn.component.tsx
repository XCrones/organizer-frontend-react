import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { APP_MESSAGES } from "../../common/app-messages";
import { RegExp } from "../../common/regexp";
import { ROUTES } from "../../config/routes/routes";
import { IAuthSignIn, IAxiosError } from "../../models";
import { useAuthStore } from "../../store";
import { GPulseLoader } from "../../ui";
import {
  FormErr,
  FormField,
  AuthForm,
  FormItem,
  FormItems,
  FormInput,
  FormInputIcon,
  FormLabel,
  FormSubtitle,
  FormTitle,
  FormToggle,
  FormSubmit,
} from "./AuthSign.style";

interface Props {
  toggleForm: Function;
}

interface IFormInputs {
  email: string;
  password: string;
}

const AuthSignInComponent = ({ toggleForm }: Props) => {
  const navigate = useNavigate();
  const authStore = useAuthStore(
    (state) => ({
      isPending: state.isPending,
      signIn: state.singIn,
    }),
    shallow
  );
  const [typePass, SetTypePass] = useState<"password" | "text">("password");
  const [isHidePass, SetHidePass] = useState(false);
  const [errMessage, SetErrMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormInputs) => {
    if (isValid) {
      try {
        const user: IAuthSignIn = {
          email: data.email,
          password: data.password,
        };

        await authStore.signIn(user);
        navigate(ROUTES.TODOS.PATH, { replace: false });
      } catch (error) {
        const err = error as AxiosError<IAxiosError>;
        SetErrMessage(err.response ? String(err.response.data.message) : "");
      }
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      {authStore.isPending && <GPulseLoader />}
      <FormTitle>sign in to organize pro</FormTitle>
      <FormSubtitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </FormSubtitle>
      <FormItems>
        <FormItem>
          <FormLabel>email</FormLabel>
          <FormField>
            <FormInput
              onFocus={() => SetErrMessage("")}
              type="email"
              {...register("email", {
                required: APP_MESSAGES.REQ_FIELD,
                pattern: {
                  value: RegExp.email,
                  message: APP_MESSAGES.EMAIL_INV,
                },
              })}
            />
            <FormInputIcon isError={!!errors.email}>{errors.email && <i className="bi bi-x-lg"></i>}</FormInputIcon>
          </FormField>
          {errors?.email && <FormErr>{errors.email.message}</FormErr>}
          {errMessage.length > 0 && <FormErr>{errMessage}</FormErr>}
        </FormItem>

        <FormItem>
          <FormLabel>password</FormLabel>
          <FormField>
            <FormInput
              onFocus={() => SetErrMessage("")}
              type={typePass}
              {...register("password", {
                required: APP_MESSAGES.REQ_FIELD,
              })}
            />
            <FormInputIcon
              isError={isHidePass}
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetHidePass((prev) => !prev);
                if (isHidePass) {
                  SetTypePass("password");
                } else {
                  SetTypePass("text");
                }
              }}
            >
              {typePass === "text" && <i className="bi bi-eye-fill"></i>}
              {typePass === "password" && <i className="bi bi-eye-slash-fill"></i>}
            </FormInputIcon>
          </FormField>
          {errors?.password && <FormErr>{errors.password.message}</FormErr>}
          {errMessage.length > 0 && <FormErr>{errMessage}</FormErr>}
        </FormItem>
      </FormItems>

      <FormSubmit mb={20}>sign in</FormSubmit>

      <FormToggle onClick={() => toggleForm()}>I’m a new user. Registration</FormToggle>
    </AuthForm>
  );
};

export default AuthSignInComponent;
