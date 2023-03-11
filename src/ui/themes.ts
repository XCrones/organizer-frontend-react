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
    block: {
      background: G_VARIABLES.backgrund.block.dark,
      color: {
        title: G_VARIABLES.color.block.title.dark,
        subtitle: G_VARIABLES.color.block.subtitle.dark,
      },
    },
    settings: {
      btn: {
        submit: {
          gradient: G_VARIABLES.color.gradient.blue.dark,
          color: G_VARIABLES.color.white,
        },
      },
    },
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
    block: {
      background: G_VARIABLES.backgrund.block.light,
      color: {
        title: G_VARIABLES.color.block.title.light,
        subtitle: G_VARIABLES.color.block.subtitle.light,
      },
    },
    settings: {
      btn: {
        submit: {
          gradient: G_VARIABLES.color.gradient.blue.light,
          color: G_VARIABLES.color.white,
        },
      },
    },
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
