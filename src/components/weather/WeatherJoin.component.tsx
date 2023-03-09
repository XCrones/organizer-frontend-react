import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { shallow } from "zustand/shallow";
import { useGeolocation } from "../../hooks";
import { IAxiosError, INotifMethods, IReqWeatherByGeo } from "../../models";
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
        callbackNotif.successful("add new");
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
        callbackNotif.successful("add new");
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
            minLength={3}
            maxLength={20}
            {...register("nameCity", {
              required: "required filed",
              minLength: {
                value: 3,
                message: "minimum chars 3",
              },
              maxLength: {
                value: 20,
                message: "maximum chars 20",
              },
            })}
          />
        </FormItem>
        <FormError>{errors.nameCity && errors.nameCity.message}</FormError>
        <FormSubmit color1="#356574" color2="#257b96">
          send
        </FormSubmit>
      </JoinForm>
    </WeatherJoin>
  );
};

export default WeatherJoinComponent;
