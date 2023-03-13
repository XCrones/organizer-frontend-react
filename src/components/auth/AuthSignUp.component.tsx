import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { ROUTES } from "../../config/routes/routes";
import { IAuthSignUp, IAxiosError } from "../../models";
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
import { RegExp } from "../../common/regexp";
import { APP_MESSAGES } from "../../common/app-messages";
import { FORM_AUTH_CONFIG } from "../../config/forms/form-config";
import { G_VARIABLES } from "../../ui/variables";

interface Props {
  toggleForm: Function;
}

interface IFormInputs {
  email: string;
  password: string;
  name: string;
}

const AuthSignUpComponent = ({ toggleForm }: Props) => {
  const navigate = useNavigate();

  const authStore = useAuthStore(
    (state) => ({
      isPending: state.isPending,
      singUp: state.singUp,
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
        const user: IAuthSignUp = {
          email: data.email,
          password: data.password,
          name: data.name,
          urlAvatar: "",
        };

        await authStore.singUp(user);
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
      <FormTitle>sign up to organize pro</FormTitle>
      <FormSubtitle>
        Lorem ipsum dolor sit amet, consetetur sadipscing, lorem ipsum dolorsed diam nonumy amet eirmod.
      </FormSubtitle>
      <FormItems>
        <FormItem>
          <FormLabel>first name</FormLabel>
          <FormField>
            <FormInput
              minLength={FORM_AUTH_CONFIG.sign_up.name.min}
              maxLength={FORM_AUTH_CONFIG.sign_up.name.max}
              onFocus={() => SetErrMessage("")}
              type="text"
              {...register("name", {
                required: APP_MESSAGES.REQ_FIELD,
                minLength: {
                  value: FORM_AUTH_CONFIG.sign_up.name.min,
                  message: APP_MESSAGES.MIN_CHAR(FORM_AUTH_CONFIG.sign_up.name.min),
                },
                maxLength: {
                  value: FORM_AUTH_CONFIG.sign_up.name.max,
                  message: APP_MESSAGES.MAX_CHAR(FORM_AUTH_CONFIG.sign_up.name.max),
                },
              })}
            />
            <FormInputIcon isError={!!errors.name}>{errors.name && <i className="bi bi-x-lg"></i>}</FormInputIcon>
          </FormField>
          {errors?.name && <FormErr>{errors.name.message}</FormErr>}
        </FormItem>

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
              minLength={FORM_AUTH_CONFIG.sign_up.password.min}
              maxLength={FORM_AUTH_CONFIG.sign_up.password.max}
              onFocus={() => SetErrMessage("")}
              type={typePass}
              {...register("password", {
                required: APP_MESSAGES.REQ_FIELD,
                minLength: {
                  value: FORM_AUTH_CONFIG.sign_up.password.min,
                  message: APP_MESSAGES.MIN_CHAR(FORM_AUTH_CONFIG.sign_up.password.min),
                },
                maxLength: {
                  value: FORM_AUTH_CONFIG.sign_up.password.max,
                  message: APP_MESSAGES.MAX_CHAR(FORM_AUTH_CONFIG.sign_up.password.max),
                },
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
        </FormItem>
      </FormItems>

      <FormSubmit mb={20}>sign up</FormSubmit>

      <FormToggle onClick={() => toggleForm()}>I have an account, Login</FormToggle>
    </AuthForm>
  );
};

export default AuthSignUpComponent;
