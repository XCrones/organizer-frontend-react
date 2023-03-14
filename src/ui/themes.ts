import { ETheme } from "../models";
import { G_VARIABLES } from "./variables";
import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  transition: {
    theme: G_VARIABLES.transition.theme,
  },
  section: {
    background: G_VARIABLES.color.dark_blue.medium,
    color: G_VARIABLES.color.white,
    block: {
      background: G_VARIABLES.color.dark_blue.light,
      color: {
        title: G_VARIABLES.color.white,
        subtitle: G_VARIABLES.color.gray.medium,
      },
    },
    settings: {
      title: G_VARIABLES.color.white,
      subtitle: G_VARIABLES.color.light_gray.medium,
      btn: {
        submit: {
          gradient: G_VARIABLES.gradient.blue.medium,
          color: G_VARIABLES.color.white,
        },
      },
    },
    weather: {
      cities: {
        item: {
          background: G_VARIABLES.color.light_blue.light,
          color: G_VARIABLES.color.white,
        },
        btn: {
          color: G_VARIABLES.color.white,
        },
      },
      forecast: {
        background: {
          item: G_VARIABLES.color.light_blue.light,
        },
        color: {
          item: G_VARIABLES.color.white,
        },
        iconWeather: {
          background: G_VARIABLES.color.blue.medium,
        },
        day_times: {
          background: {
            select: G_VARIABLES.color.blue.medium,
            default: G_VARIABLES.color.blue.hight,
          },
          color: {
            select: G_VARIABLES.color.white,
            default: G_VARIABLES.color.white,
          },
        },
        descr: {
          background: G_VARIABLES.color.blue.medium,
          color: G_VARIABLES.color.white,
        },
      },
      join: {
        background: G_VARIABLES.color.dark_blue.medium,
        color: G_VARIABLES.color.white,
        field: {
          background: G_VARIABLES.color.light_blue.light,
          color: G_VARIABLES.color.black,
        },
        icon_color: G_VARIABLES.color.white,
        submit: {
          gradient: G_VARIABLES.gradient.purple_orange.light,
          color: G_VARIABLES.color.white,
        },
      },
    },
    calendar: {
      month: {
        btn: {
          color: G_VARIABLES.color.white,
        },
      },
      day: {
        gradient: G_VARIABLES.gradient.purple_pink.light,
        border: {
          select: G_VARIABLES.color.orange.medium,
          default: G_VARIABLES.color.white,
        },
      },
    },
    todos: {
      background: G_VARIABLES.color.purple.light,
      color: {
        title: G_VARIABLES.color.white,
        subtitle: G_VARIABLES.color.light_blue.light,
      },
      chekcbox: {
        active: G_VARIABLES.color.dark_blue.light,
      },
    },
    auth: {
      submit: {
        gradient: G_VARIABLES.gradient.blue.light,
        color: G_VARIABLES.color.white,
      },
      title: G_VARIABLES.color.white,
      subtitle: G_VARIABLES.color.gray.light,
      field: {
        background: G_VARIABLES.color.dark_blue.light,
        label: G_VARIABLES.color.white,
        text_color: G_VARIABLES.color.white,
        error: G_VARIABLES.color.orange.medium,
      },
    },
    editor: {
      background: G_VARIABLES.color.dark_blue.medium,
      color: G_VARIABLES.color.white,
      field: {
        background: G_VARIABLES.color.dark_blue.light,
        color: G_VARIABLES.color.white,
      },
      butt: {
        cancel: {
          graient: G_VARIABLES.gradient.blue.light,
          color: G_VARIABLES.color.white,
        },
        submit: {
          graient: G_VARIABLES.gradient.teal.light,
          color: G_VARIABLES.color.white,
        },
        delete: {
          graient: G_VARIABLES.gradient.red.light,
          color: G_VARIABLES.color.white,
        },
      },
    },
  },
  footer: {
    background: G_VARIABLES.color.dark_blue.hight,
    color: G_VARIABLES.color.white,
    nav: {
      default: G_VARIABLES.color.gray.light,
      select: G_VARIABLES.color.white,
    },
  },
  type: ETheme.dark,
};

export const LightTheme: DefaultTheme = {
  transition: {
    theme: G_VARIABLES.transition.theme,
  },
  section: {
    background: G_VARIABLES.color.light_gray.light,
    color: G_VARIABLES.color.black,
    block: {
      background: G_VARIABLES.color.light_blue.light,
      color: {
        title: G_VARIABLES.color.white,
        subtitle: G_VARIABLES.color.light_black.light,
      },
    },
    settings: {
      title: G_VARIABLES.color.black,
      subtitle: G_VARIABLES.color.light_gray.hight,
      btn: {
        submit: {
          gradient: G_VARIABLES.gradient.blue.light,
          color: G_VARIABLES.color.white,
        },
      },
    },
    weather: {
      cities: {
        item: {
          background: G_VARIABLES.color.light_blue.light,
          color: G_VARIABLES.color.black,
        },
        btn: {
          color: G_VARIABLES.color.black,
        },
      },
      forecast: {
        background: {
          item: G_VARIABLES.color.light_blue.light,
        },
        color: {
          item: G_VARIABLES.color.black,
        },
        iconWeather: {
          background: G_VARIABLES.color.blue_light.hight,
        },
        day_times: {
          background: {
            select: G_VARIABLES.color.blue_light.hight,
            default: G_VARIABLES.color.blue_light.light,
          },
          color: {
            select: G_VARIABLES.color.white,
            default: G_VARIABLES.color.black,
          },
        },
        descr: {
          background: G_VARIABLES.color.blue_light.hight,
          color: G_VARIABLES.color.white,
        },
      },
      join: {
        background: G_VARIABLES.color.light_gray.light,
        color: G_VARIABLES.color.black,
        field: {
          background: G_VARIABLES.color.light_blue.light,
          color: G_VARIABLES.color.black,
        },
        icon_color: G_VARIABLES.color.black,
        submit: {
          gradient: G_VARIABLES.gradient.purple_orange.light,
          color: G_VARIABLES.color.white,
        },
      },
    },
    calendar: {
      month: {
        btn: {
          color: G_VARIABLES.color.black,
        },
      },
      day: {
        gradient: G_VARIABLES.gradient.purple_pink.medium,
        border: {
          select: G_VARIABLES.color.orange.medium,
          default: G_VARIABLES.color.black,
        },
      },
    },
    todos: {
      background: G_VARIABLES.color.light_blue.light,
      color: {
        title: G_VARIABLES.color.black,
        subtitle: G_VARIABLES.color.gray.hight,
      },
      chekcbox: {
        active: G_VARIABLES.color.white,
      },
    },
    auth: {
      submit: {
        gradient: G_VARIABLES.gradient.blue.medium,
        color: G_VARIABLES.color.white,
      },
      title: G_VARIABLES.color.black,
      subtitle: G_VARIABLES.color.gray.hight,
      field: {
        background: G_VARIABLES.color.light_blue.light,
        label: G_VARIABLES.color.black,
        text_color: G_VARIABLES.color.black,
        error: G_VARIABLES.color.red.medium,
      },
    },
    editor: {
      background: G_VARIABLES.color.light_gray.light,
      color: G_VARIABLES.color.black,
      field: {
        background: G_VARIABLES.color.light_blue.light,
        color: G_VARIABLES.color.white,
      },
      butt: {
        cancel: {
          graient: G_VARIABLES.gradient.blue.medium,
          color: G_VARIABLES.color.white,
        },
        submit: {
          graient: G_VARIABLES.gradient.teal.medium,
          color: G_VARIABLES.color.white,
        },
        delete: {
          graient: G_VARIABLES.gradient.red.medium,
          color: G_VARIABLES.color.white,
        },
      },
    },
  },
  footer: {
    background: G_VARIABLES.color.light_gray.medium,
    color: G_VARIABLES.color.white,
    nav: {
      default: G_VARIABLES.color.light_gray.hight,
      select: G_VARIABLES.color.black,
    },
  },
  type: ETheme.light,
};
