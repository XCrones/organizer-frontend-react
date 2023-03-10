import { AxiosError } from "axios";
import { shallow } from "zustand/shallow";
import { APP_MESSAGES } from "../../common/app-messages";
import { IAxiosError, ICityWeather, IMoveItem, INotifMethods } from "../../models";
import { useWeatherStore } from "../../store";
import { GColor } from "../../ui/variables.style";
import { CityName, CityBtn, WeatherCities, WeatherCity } from "./WeatherCities.style";

interface Props {
  isHide: boolean;
  showForecast: Function;
  cities: ICityWeather[];
  callbackNotif: INotifMethods;
}

const WeatherCitiesComponent = ({ isHide, showForecast, cities, callbackNotif }: Props) => {
  const weatherStore = useWeatherStore(
    (state) => ({
      cityMove: state.cityMove,
      dropCity: state.dropCity,
    }),
    shallow
  );

  const deleteCity = async (id: number) => {
    try {
      await weatherStore.dropCity(id);
      callbackNotif.successful(APP_MESSAGES.DELETE_SUCCES);
    } catch (error) {
      const err = error as AxiosError<IAxiosError>;
      if (!!err.response) {
        callbackNotif.error(err.response.data.message);
      }
    }
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, id: number) => {
    if (!!event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", id.toString());
    }
  };

  const onDrop = async (event: React.DragEvent<HTMLDivElement>, index: number) => {
    if (!!event.dataTransfer) {
      const id = parseInt(event.dataTransfer.getData("itemID"));
      if (id >= 0) {
        const item: IMoveItem = {
          id,
          index,
        };
        try {
          await weatherStore.cityMove(item);
        } catch (error) {
          callbackNotif.error(APP_MESSAGES.ERROR_MOVE_ELEMENT);
        }
      }
    }
  };

  if (!isHide) {
    return null;
  }

  return (
    <WeatherCities>
      {cities.map((city, index) => (
        <WeatherCity
          key={city.id}
          draggable="true"
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={(event) => event.preventDefault()}
          onDrop={(event) => onDrop(event, index)}
          onDragStart={(event) => onDragStart(event, city.id)}
        >
          <CityBtn background="#3794b1" onClick={() => showForecast(city.id)}>
            <i className="bi bi-info-circle"></i>
          </CityBtn>
          <CityName>
            {city.name}, {city.country}
          </CityName>
          <CityBtn background={GColor.errors.red} onClick={() => deleteCity(city.id)}>
            <i className="bi bi-x-lg"></i>
          </CityBtn>
        </WeatherCity>
      ))}
    </WeatherCities>
  );
};

export default WeatherCitiesComponent;
