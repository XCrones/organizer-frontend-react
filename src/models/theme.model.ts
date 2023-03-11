export enum ETheme {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  transition: {
    theme: string;
  };
  section: {
    color: string;
    background: string;
    block: {
      background: string;
      color: {
        title: string;
        subtitle: string;
      };
    };
    settings: {
      btn: {
        submit: {
          gradient: string[];
          color: string;
        };
      };
    };
  };
  footer: {
    color: string;
    background: string;
    nav: {
      select: string;
      default: string;
    };
  };
}
