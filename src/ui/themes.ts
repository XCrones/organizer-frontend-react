import { ETheme } from "../models";
import { G_VARIABLES } from "./variables";
import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  transition: {
    theme: G_VARIABLES.transition.theme,
  },
  section: {
    background: G_VARIABLES.backgrund.section.dark,
    color: G_VARIABLES.color.section.dark,
  },
  footer: {
    background: G_VARIABLES.backgrund.footer.dark,
    color: G_VARIABLES.color.footer.dark,
    nav: {
      default: G_VARIABLES.backgrund.nav.dark.default,
      select: G_VARIABLES.backgrund.nav.dark.select,
    },
  },
  type: ETheme.dark,
};

export const LightTheme: DefaultTheme = {
  transition: {
    theme: G_VARIABLES.transition.theme,
  },
  section: {
    background: G_VARIABLES.backgrund.section.light,
    color: G_VARIABLES.color.section.light,
  },
  footer: {
    background: G_VARIABLES.backgrund.footer.light,
    color: G_VARIABLES.color.footer.light,
    nav: {
      default: G_VARIABLES.backgrund.nav.light.default,
      select: G_VARIABLES.backgrund.nav.light.select,
    },
  },
  type: ETheme.light,
};
