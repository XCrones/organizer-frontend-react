export enum ETheme {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  background: {
    main: string;
  };
  color: {
    main: string;
  };
}
