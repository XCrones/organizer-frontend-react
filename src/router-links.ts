export interface IRouterLinkItem {
  link: string;
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
    link: "/todos",
  },
  calendar: {
    title: "calendar",
    link: "/calendar",
  },
  wather: {
    title: "weather",
    link: "/weather",
  },
  settings: {
    title: "settings",
    link: "/settings",
  },
  auth: {
    title: "auth",
    link: "/auth",
  },
};
