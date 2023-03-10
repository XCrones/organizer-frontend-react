import moment from "moment";
import { memo, useEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";
import { useWeatherStore } from "../../store";
import {
  ForecastCurrent,
  CurrTemp,
  CurrIcon,
  ForecastSunRiseSet,
  ForecastTimes,
  ForecastTitle,
  WeatherForecast,
  ForecastTemps,
  TempMinMax,
  ForecastItems,
  ForecastColumn,
  ColumnDate,
  ColumnDay,
  ColumnIcon,
  ColumnTemp,
  ColumnTime,
  ColumnDescr,
  DescrItem,
  ForecastHeader,
  ForecastButt,
} from "./WeatherForecast.style";
import { areEqual, FixedSizeList as List } from "react-window";
import { useWindowSize } from "../../hooks";
import { IForecastItem, IWindowColumn } from "../../models";
import { G_HTML_ICONS, G_INDENTS } from "../../ui/variables.style";
import { WEATHER_CONFIG } from "../../config/components/components-config";

interface Props {
  id: number;
  isHide: boolean;
  callbackClose: Function;
}

interface IWeatherDescr {
  icon: string;
  temp: string | null;
  temp_min: string | null;
  temp_max: string | null;
  feels_like: string | null;
  humidity: number | null;
  wind_speed: number | null;
  pressure: number | null;
  visibility: number | null;
  clouds: number | null;
  dt_txt: string | null;
}

const WeatherForecastComponent = ({ id, isHide, callbackClose }: Props) => {
  const weatherStore = useWeatherStore(
    (state) => ({
      forecast: state.data.forecast,
      getForecast: state.getForecast,
      isPending: state.pending.fetchOne,
    }),
    shallow
  );

  const { size } = useWindowSize({ totalHeight: 0, totalWidth: 0 });

  const [weatherDescr, SetWeatherDescr] = useState<IWeatherDescr>({
    icon: "",
    temp: null,
    temp_max: null,
    temp_min: null,
    clouds: null,
    humidity: null,
    pressure: null,
    wind_speed: null,
    feels_like: null,
    visibility: null,
    dt_txt: null,
  });

  const [currDate, SetCurrDate] = useState<string | null>(null);

  useEffect(() => {
    if (!isHide) {
      weatherStore.getForecast(id);
    }
  }, [isHide]);

  useEffect(() => {
    if (!!weatherStore.forecast) {
      const weatherCurr = weatherStore.forecast.list[0];
      if (!!weatherCurr) {
        const desr: IWeatherDescr = {
          icon: weatherCurr.weather[0].icon,
          temp: weatherCurr.main.temp.toFixed(1),
          temp_max: weatherCurr.main.temp_max.toFixed(1),
          temp_min: weatherCurr.main.temp_min.toFixed(1),
          feels_like: weatherCurr.main.feels_like.toFixed(1),
          humidity: weatherCurr.main.humidity,
          wind_speed: Math.round(weatherCurr.wind.speed),
          pressure: weatherCurr.main.pressure,
          visibility: Math.round(weatherCurr.visibility / 1000),
          clouds: weatherCurr.clouds.all,
          dt_txt: weatherCurr.dt_txt,
        };
        SetWeatherDescr(desr);
        SetCurrDate(desr.dt_txt);
      }
    }
  }, [weatherStore.forecast]);

  const makeTime = (dateUNIX: number, shiftSec: number) =>
    moment.unix(dateUNIX).utc().add(shiftSec, "s").format("HH:mm");

  const memoSunrise = useMemo(
    () =>
      !!weatherStore.forecast ? makeTime(weatherStore.forecast.city.sunrise, weatherStore.forecast.city.timezone) : "",
    [weatherStore.forecast]
  );

  const memoSunset = useMemo(
    () =>
      !!weatherStore.forecast ? makeTime(weatherStore.forecast.city.sunset, weatherStore.forecast.city.timezone) : "",
    [weatherStore.forecast]
  );

  if (isHide) return null;

  const Column = memo(({ index, style, data }: IWindowColumn<IForecastItem[]>) => {
    const parseDate = (date: string) => {
      const dateString = date.split(" ")[0];
      const dateArr = dateString.split("-");
      return `${dateArr[2]}.${dateArr[1]}`;
    };

    const memoDate = useMemo(() => (!!data[index].dt_txt ? parseDate(data[index].dt_txt) : ""), [data[index].dt_txt]);

    const memoTime = useMemo(
      () => makeTime(data[index].dt, !!weatherStore.forecast ? weatherStore.forecast.city.timezone : 0),
      [data[index].dt]
    );

    const setDescr = () => {
      const desr: IWeatherDescr = {
        icon: data[index].weather[0].icon,
        temp: data[index].main.temp.toFixed(1),
        temp_max: data[index].main.temp_max.toFixed(1),
        temp_min: data[index].main.temp_min.toFixed(1),
        feels_like: data[index].main.feels_like.toFixed(1),
        humidity: data[index].main.humidity,
        wind_speed: Math.round(data[index].wind.speed),
        pressure: data[index].main.pressure,
        visibility: Math.round(data[index].visibility / 1000),
        clouds: data[index].clouds.all,
        dt_txt: data[index].dt_txt,
      };
      SetWeatherDescr(desr);
      SetCurrDate(desr.dt_txt);
    };

    const isSelectDate = (date: string) => date === currDate;

    const memoCurrDate = useMemo(() => isSelectDate(data[index].dt_txt), [data[index].dt_txt]);

    return (
      <div style={style}>
        <ForecastColumn onClick={setDescr} isCurrDate={memoCurrDate}>
          <ColumnDay>
            <ColumnDate>{memoDate}</ColumnDate>
            <ColumnTime>{memoTime}</ColumnTime>
          </ColumnDay>
          <ColumnIcon>
            <img src={data[index].weather[0].icon} alt="" />
          </ColumnIcon>
          <ColumnTemp>
            {data[index].main.temp.toFixed(1)}
            {G_HTML_ICONS.deg}
          </ColumnTemp>
        </ForecastColumn>
        <div style={{ width: "10px", flex: "0 0 auto" }}></div>
      </div>
    );
  }, areEqual);

  return (
    <WeatherForecast>
      <ForecastHeader>
        <ForecastButt onClick={() => callbackClose()} background="#c02f0b">
          <i className="bi bi-arrow-left"></i>
        </ForecastButt>
        <ForecastTitle>
          {weatherStore.forecast?.city.name}, {weatherStore.forecast?.city.country}
        </ForecastTitle>
        <ForecastButt
          disabled={weatherStore.isPending}
          onClick={() => weatherStore.getForecast(id)}
          background="#19b34c"
          isRotate={weatherStore.isPending}
        >
          <i className="bi bi-arrow-repeat"></i>
        </ForecastButt>
      </ForecastHeader>

      <ForecastTimes>
        <ForecastSunRiseSet>
          <i className="bi bi-sunrise-fill"></i>
          {memoSunrise}
        </ForecastSunRiseSet>
        <ForecastSunRiseSet>
          <i className="bi bi-sunset"></i>
          {memoSunset}
        </ForecastSunRiseSet>
      </ForecastTimes>

      <ForecastCurrent>
        <CurrIcon src={weatherDescr.icon} alt="icon weather" />
        <CurrTemp>
          {weatherDescr.temp}
          {G_HTML_ICONS.deg}
        </CurrTemp>
      </ForecastCurrent>

      <ForecastTemps>
        <TempMinMax>
          min: {weatherDescr.temp_min}
          {G_HTML_ICONS.deg}
        </TempMinMax>
        <TempMinMax>
          max: {weatherDescr.temp_max}
          {G_HTML_ICONS.deg}
        </TempMinMax>
      </ForecastTemps>

      <ForecastItems>
        <List
          overscanCount={WEATHER_CONFIG.forecast_list.overscanCount}
          height={WEATHER_CONFIG.forecast_list.height}
          itemSize={WEATHER_CONFIG.forecast_list.itemSize}
          itemCount={!!weatherStore.forecast?.list ? weatherStore.forecast.list.length : 0}
          itemData={weatherStore.forecast?.list}
          layout="horizontal"
          width={size.innerWidth - G_INDENTS.left_right}
        >
          {Column}
        </List>
      </ForecastItems>

      <ColumnDescr>
        <DescrItem>
          <i className="bi bi-thermometer-half"></i>
          <span>
            {weatherDescr.feels_like}
            {G_HTML_ICONS.deg}
          </span>
        </DescrItem>
        <DescrItem>
          <i className="bi bi-wind"></i>
          <span>
            {G_HTML_ICONS.nbsp}
            {weatherDescr.wind_speed} <span>m/s</span>
          </span>
        </DescrItem>
        <DescrItem>
          <span>
            {weatherDescr.pressure}
            {G_HTML_ICONS.nbsp}
            <span>hPa</span>
          </span>
        </DescrItem>
        <DescrItem>
          <i className="bi bi-cloud-fill"></i>
          <span>
            {G_HTML_ICONS.nbsp}
            {weatherDescr.clouds}%
          </span>
        </DescrItem>
        <DescrItem>
          <i className="bi bi-moisture"></i>
          <span>
            {G_HTML_ICONS.nbsp}
            {weatherDescr.humidity}%
          </span>
        </DescrItem>
        <DescrItem>
          <i className="bi bi-binoculars"></i>
          <span>
            {G_HTML_ICONS.nbsp}
            {weatherDescr.visibility}
            <span>km</span>
          </span>
        </DescrItem>
      </ColumnDescr>
    </WeatherForecast>
  );
};

export default WeatherForecastComponent;
