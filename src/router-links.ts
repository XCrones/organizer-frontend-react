export interface IRouterLinkItem {
  path: string;
  title: string;
}

interface IRouterLinks {
  calendar: IRouterLinkItem;
  todos: IRouterLinkItem;
  wather: IRouterLinkItem;
  settings: IRouterLinkItem;
  auth: IRouterLinkItem;
}

export const ROUTER_LINKS: IRouterLinks = {
  todos: {
    title: "todos",
    path: "/todos",
  },
  calendar: {
    title: "calendar",
    path: "/calendar",
  },
  wather: {
    title: "weather",
    path: "/weather",
  },
  settings: {
    title: "settings",
    path: "/settings",
  },
  auth: {
    title: "auth",
    path: "/auth",
  },
};
