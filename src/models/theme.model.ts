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
      title: string;
      btn: {
        submit: {
          gradient: string[];
          color: string;
        };
      };
    };
    weather: {
      cities: {
        item: {
          background: string;
          color: string;
        };
        btn: {
          color: string;
        };
      };
      forecast: {
        background: {
          item: string;
        };
        color: {
          item: string;
        };
        iconWeather: {
          background: string;
        };
        day_times: {
          background: {
            select: string;
            default: string;
          };
          color: {
            select: string;
            default: string;
          };
        };
        descr: {
          background: string;
          color: string;
        };
      };
      join: {
        background: string;
        color: string;
        field: {
          background: string;
          color: string;
        };
        icon_color: string;
        submit: {
          gradient: string[];
          color: string;
        };
      };
    };
    calendar: {
      month: {
        btn: {
          color: string;
        };
      };
      day: {
        gradient: string[];
        border: {
          select: string;
          default: string;
        };
      };
    };
    todos: {
      background: string;
      color: {
        title: string;
        subtitle: string;
      };
      chekcbox: {
        active: string;
      };
    };
    auth: {
      submit: {
        gradient: string[];
        color: string;
      };
      title: string;
      subtitle: string;
      field: {
        background: string;
        label: string;
        text_color: string;
        error: string;
      };
    };
    editor: {
      background: string;
      color: string;
      field: {
        background: string;
        color: string;
      };
      butt: {
        delete: {
          graient: string[];
          color: string;
        };
        submit: {
          graient: string[];
          color: string;
        };
        cancel: {
          graient: string[];
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
