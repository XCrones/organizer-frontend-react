import { ICityWeather } from "../../models";
import { CityName, Elem, CityBtn, WeatherCities, WeatherCity } from "./WeatherCities.style";

interface Props {
  isHide: boolean;
  showForecast: Function;
  cities: ICityWeather[];
  dropCity: Function;
}

const WeatherCitiesComponent = ({ isHide, showForecast, cities, dropCity }: Props) => {
  if (!isHide) {
    return null;
  }

  return (
    <WeatherCities>
      {cities.map((city) => (
        <WeatherCity key={city.id}>
          <CityBtn background="#3794b1" onClick={() => showForecast(city.name)}>
            <i className="bi bi-info-circle"></i>
          </CityBtn>
          <CityName>
            {city.name}, {city.country}
          </CityName>
          <CityBtn background="#ff0000" onClick={() => dropCity(city.id)}>
            <i className="bi bi-x-lg"></i>
          </CityBtn>
        </WeatherCity>
      ))}
    </WeatherCities>
  );
};

export default WeatherCitiesComponent;
