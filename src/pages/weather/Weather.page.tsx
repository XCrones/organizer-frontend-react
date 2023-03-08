import { useEffect, useState } from "react";
import { HeaderComponent, WeatherForecastComponent } from "../../components";
import { IHeaderButton } from "../../models";
import { WeatherButn, CityName, WeatherCities, WeatherCity, WeatherContent, WeatherWrapper } from "./Weather.style";
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
      icon: "",
    },
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
      {isHideForecast && (
        <WeatherContent>
          <WeatherCities>
            {weatherStore.cities.map((city) => (
              <WeatherCity key={city.id}>
                <WeatherButn background="#3794b1" onClick={() => showForecast(city.name)}>
                  <i className="bi bi-info-circle"></i>
                </WeatherButn>
                <CityName>
                  {city.name}, {city.country}
                </CityName>
                <WeatherButn background="#ff0000" onClick={() => weatherStore.dropCity(city.id)}>
                  <i className="bi bi-x-lg"></i>
                </WeatherButn>
              </WeatherCity>
            ))}
          </WeatherCities>
        </WeatherContent>
      )}
      <WeatherForecastComponent
        cityName={cityName}
        isHide={isHideForecast}
        callbackClose={() => SetHideForecast(true)}
      />
    </WeatherWrapper>
  );
};

export default WeatherPage;
