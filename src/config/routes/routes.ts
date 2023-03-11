export type TCalendarTitle = "calendar";
export type TCalendarPath = "/calendar";

export type TTodoTitle = "todos";
export type TTodoPath = "/todos";

export type TWeatherTitle = "weather";
export type TWeatherPath = "/weather";

export type TAuthTitle = "auth";
export type TAuthPath = "/auth";

export type TSettingsTitle = "settings";
export type TSettingsPath = "/settings";

export type THomeTitle = "home";
export type THomePath = "/";
interface IRouterLinks {
  CALENDAR: {
    PATH: TCalendarPath;
    TITLE: TCalendarTitle;
  };
  TODOS: {
    PATH: TTodoPath;
    TITLE: TTodoTitle;
  };
  WEATHER: {
    PATH: TWeatherPath;
    TITLE: TWeatherTitle;
  };
  SETTINGS: {
    PATH: TSettingsPath;
    TITLE: TSettingsTitle;
  };
  AUTH: {
    PATH: TAuthPath;
    TITLE: TAuthTitle;
  };
  HOME: {
    PATH: THomePath;
    TITLE: THomeTitle;
  };
}

export const ROUTES: IRouterLinks = {
  HOME: {
    TITLE: "home",
    PATH: "/",
  },
  TODOS: {
    TITLE: "todos",
    PATH: "/todos",
  },
  CALENDAR: {
    TITLE: "calendar",
    PATH: "/calendar",
  },
  WEATHER: {
    TITLE: "weather",
    PATH: "/weather",
  },
  SETTINGS: {
    TITLE: "settings",
    PATH: "/settings",
  },
  AUTH: {
    TITLE: "auth",
    PATH: "/auth",
  },
};
