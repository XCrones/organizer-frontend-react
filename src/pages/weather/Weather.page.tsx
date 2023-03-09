import { useEffect, useState } from "react";
import {
  WeatherJoinComponent,
  HeaderComponent,
  WeatherCitiesComponent,
  WeatherForecastComponent,
  NotificationComponent,
} from "../../components";
import { IHeaderButton } from "../../models";
import { WrapperWeather } from "./Weather.style";
import { shallow } from "zustand/shallow";
import { useWeatherStore } from "../../store";
import { useNotif } from "../../hooks";

const WeatherPage = () => {
  const [cityName, SetCityName] = useState(-1);
  const [isHideForecast, SetHideForecast] = useState(true);
  const [isHideSearch, SetHideSearch] = useState(true);
  const { isHideNotif, metaNotif, showNotif } = useNotif();

  const weatherStore = useWeatherStore(
    (state) => ({
      cities: state.data.cities,
      getAllData: state.getCities,
    }),
    shallow
  );

  const buttonsHeader: IHeaderButton[] = [
    {
      callback: () => SetHideSearch(false),
      icon: "bi bi-plus-lg",
    },
  ];

  useEffect(() => {
    weatherStore.getAllData();
  }, []);

  const showForecast = (id: number) => {
    SetCityName(id);
    SetHideForecast(false);
  };

  return (
    <WrapperWeather>
      <NotificationComponent isHide={isHideNotif} meta={metaNotif} />
      <HeaderComponent buttns={buttonsHeader} title={"weather"} />
      <WeatherCitiesComponent
        callbackNotif={showNotif}
        isHide={isHideForecast}
        showForecast={showForecast}
        cities={weatherStore.cities}
      />
      <WeatherForecastComponent id={cityName} isHide={isHideForecast} callbackClose={() => SetHideForecast(true)} />
      <WeatherJoinComponent isHide={isHideSearch} callbackClose={() => SetHideSearch(true)} callbackNotif={showNotif} />
    </WrapperWeather>
  );
};

export default WeatherPage;
