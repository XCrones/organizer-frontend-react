interface IRouterLinks {
  CALENDAR: {
    PATH: "/calendar";
    TITLE: "calendar";
  };
  TODOS: {
    PATH: "/todo";
    TITLE: "todo";
  };
  WEATHER: {
    PATH: "/weather";
    TITLE: "weather";
  };
  SETTINGS: {
    PATH: "/settings";
    TITLE: "settings";
  };
  AUTH: {
    PATH: "/auth";
    TITLE: "auth";
  };
  HOME: {
    PATH: "/";
    TITLE: "home";
  };
}

export const ROUTES: IRouterLinks = {
  HOME: {
    TITLE: "home",
    PATH: "/",
  },
  TODOS: {
    TITLE: "todo",
    PATH: "/todo",
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
