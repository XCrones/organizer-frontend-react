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
  };
  footer: {
    color: string;
    background: string;
  };
}
