import { useEffect, useState } from "react";
import { HeaderComponent, WeatherCitiesComponent, WeatherForecastComponent } from "../../components";
import { IHeaderButton } from "../../models";
import { WeatherWrapper } from "./Weather.style";
import { shallow } from "zustand/shallow";
import { useWeatherStore } from "../../store";

const WeatherPage = () => {
  const [cityName, SetCityName] = useState("");
  const [isHideForecast, SetHideForecast] = useState(true);

  const weatherStore = useWeatherStore(
    (state) => ({
      cities: state.data.cities,
      getAllData: state.getCities,
      dropCity: state.dropCity,
    }),
    shallow
  );

  const buttonsHeader: IHeaderButton[] = [
    {
      callback: () => {},
      icon: "bi bi-plus-lg",
    },
  ];

  useEffect(() => {
    weatherStore.getAllData();
  }, []);

  const showForecast = (cityName: string) => {
    SetCityName(cityName);
    SetHideForecast(false);
  };

  return (
    <WeatherWrapper>
      <HeaderComponent buttns={buttonsHeader} title={"weather"} />
      <WeatherCitiesComponent
        isHide={isHideForecast}
        showForecast={showForecast}
        cities={weatherStore.cities}
        dropCity={weatherStore.dropCity}
      />
      <WeatherForecastComponent
        cityName={cityName}
        isHide={isHideForecast}
        callbackClose={() => SetHideForecast(true)}
      />
    </WeatherWrapper>
  );
};

export default WeatherPage;
