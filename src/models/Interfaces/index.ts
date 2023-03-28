import { IBaseResponse } from "./IBaseResponse";
import { IAxiosError } from "./IAxiosError";
import { IHeaderButton } from "./IHeader";
import { IAuthSignIn, IAuthSignUp } from "./IAuth";
import { IBaseInfo } from "./IBaseModel";
import { IJoinEvent, IEvent, IParseEvent } from "./ICalendar";
import { IPending } from "./IPending";
import { ITodoJoin, ITodo, TPriority } from "./ITodos";
import { INotifMeta, INotifMethods } from "./INotification";
import {
  IWeatherForecast,
  ICityWeather,
  IForecastItem,
  IWeatherCurr,
  IReqWeatherByName,
  IReqWeatherByGeo,
} from "./IWeather";
import { IWindowColumn } from "./IWidnowColumn";
import { IMoveItem } from "./IDragDrop";
import { IAuthConfig, IEventConfig, ITodoConfig, IWeatherConfig } from "./IConfig";
import { ITriangleSize, ITriangle, ITriangleBorderColor } from "./ITriangle";
import { ITheme } from "./ITheme";

export type {
  IAuthSignIn,
  IAuthSignUp,
  IBaseInfo,
  IJoinEvent,
  IEvent,
  IParseEvent,
  IHeaderButton,
  IPending,
  ITodoJoin,
  ITodo,
  INotifMeta,
  INotifMethods,
  IAxiosError,
  IWeatherCurr,
  IWeatherForecast,
  ICityWeather,
  IForecastItem,
  IReqWeatherByName,
  IReqWeatherByGeo,
  IWindowColumn,
  IMoveItem,
  TPriority,
  IAuthConfig,
  IEventConfig,
  ITodoConfig,
  ITriangleSize,
  ITriangle,
  ITriangleBorderColor,
  IWeatherConfig,
  ITheme,
  IBaseResponse,
};
