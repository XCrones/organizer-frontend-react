import { ETheme } from "../models";
import { G_COLOR } from "./variables.style";
import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  background: {
    main: G_COLOR.mainBg,
  },
  color: {
    main: "#fff",
  },
  type: ETheme.dark,
};

export const LightTheme: DefaultTheme = {
  background: {
    main: "#fff",
  },
  color: {
    main: "#000",
  },
  type: ETheme.light,
};
