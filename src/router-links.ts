export interface IRouterLinkItem {
  link: string;
  title: string;
}

interface IRouterLinks {
  calendar: IRouterLinkItem;
  todos: IRouterLinkItem;
  wather: IRouterLinkItem;
  settings: IRouterLinkItem;
}

export const ROUTER_LINKS: IRouterLinks = {
  calendar: {
    title: "calendar",
    link: "/calendar",
  },
  todos: {
    title: "todos",
    link: "/todos",
  },
  wather: {
    title: "weather",
    link: "/weather",
  },
  settings: {
    title: "settings",
    link: "/settings",
  },
};
