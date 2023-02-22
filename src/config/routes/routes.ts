export interface IRouterLinkItem {
  PATH: string;
  TITLE: string;
}

interface IRouterLinks {
  CALENDAR: IRouterLinkItem;
  TODOS: IRouterLinkItem;
  WEATHER: IRouterLinkItem;
  SETTINGS: IRouterLinkItem;
  AUTH: IRouterLinkItem;
}

export const ROUTES: IRouterLinks = {
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
