import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { shallow } from "zustand/shallow";
import { APP_MESSAGES } from "../../common/app-messages";
import { FORM_WEATHER_CONFIG } from "../../config/forms/form-config";
import { useGeolocation } from "../../hooks";
import { IAxiosError, INotifMethods, IReqWeatherByGeo } from "../../models/Interfaces";
import { useWeatherStore } from "../../store";
import {
  FormError,
  FormInput,
  FormItem,
  FormSubmit,
  FormTitle,
  JoinClose,
  JoinForm,
  JoinGeo,
  JoinHeader,
  JoinTitle,
  WeatherJoin,
} from "./WeatherJoin.style";

interface Props {
  isHide: boolean;
  callbackClose: Function;
  callbackNotif: INotifMethods;
}

interface IFormInputs {
  nameCity: string;
}

const WeatherJoinComponent = ({ isHide, callbackClose, callbackNotif }: Props) => {
  const { geolocation, isLockGeo } = useGeolocation();

  const weatherStore = useWeatherStore(
    (state) => ({
      pending: state.pending.fetchOne,
      fetchByName: state.joinCityByName,
      fetchByGeo: state.joinCityByGeo,
    }),
    shallow
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormInputs) => {
    if (isValid) {
      try {
        await weatherStore.fetchByName(data.nameCity.trim());
        callbackNotif.successful(APP_MESSAGES.ADD_NEW_SECCUS);
        callbackClose();
        reset();
      } catch (error) {
        const err = error as AxiosError<IAxiosError>;
        if (!!err.response) {
          callbackNotif.error(err.response.data.message);
        }
      }
    }
  };

  if (isHide) {
    return null;
  }

  const searchByGeo = async () => {
    if (!!geolocation) {
      try {
        const reqData: IReqWeatherByGeo = {
          lat: +geolocation.latitude.toFixed(4),
          lon: +geolocation.longitude.toFixed(4),
        };

        await weatherStore.fetchByGeo(reqData);
        callbackNotif.successful(APP_MESSAGES.ADD_NEW_SECCUS);
        callbackClose();
        reset();
      } catch (error) {
        const err = error as AxiosError<IAxiosError>;
        if (!!err.response) {
          callbackNotif.error(err.response.data.message);
        }
      }
    }
  };

  return (
    <WeatherJoin>
      <JoinHeader>
        <JoinGeo isLock={isLockGeo} color={!!geolocation ? "#1fa535" : "#ff0000"} onClick={() => searchByGeo()}>
          <i className="bi bi-geo-alt"></i>
        </JoinGeo>
        <JoinTitle>add city</JoinTitle>
        <JoinClose onClick={() => callbackClose()}>
          <i className="bi bi-x-lg"></i>
        </JoinClose>
      </JoinHeader>
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <FormTitle>name:</FormTitle>
          <FormInput
            minLength={FORM_WEATHER_CONFIG.name.min}
            maxLength={FORM_WEATHER_CONFIG.name.max}
            {...register("nameCity", {
              required: APP_MESSAGES.REQ_FIELD,
              minLength: {
                value: FORM_WEATHER_CONFIG.name.min,
                message: APP_MESSAGES.MIN_CHAR(FORM_WEATHER_CONFIG.name.min),
              },
              maxLength: {
                value: FORM_WEATHER_CONFIG.name.max,
                message: APP_MESSAGES.MAX_CHAR(FORM_WEATHER_CONFIG.name.max),
              },
            })}
          />
        </FormItem>
        <FormError>{errors.nameCity && errors.nameCity.message}</FormError>
        <FormSubmit>send</FormSubmit>
      </JoinForm>
    </WeatherJoin>
  );
};

export default WeatherJoinComponent;
