import { TPriority } from ".";

export interface IAuthConfig {
  sign_up: {
    name: {
      min: number;
      max: number;
    };
    password: {
      min: number;
      max: number;
    };
  };
}

export interface IEventConfig {
  name: {
    min: number;
    max: number;
  };
  descr: {
    max: number;
    rows: number;
  };
}

export interface ITodoConfig {
  name: {
    min: number;
    max: number;
  };
  category: {
    min: number;
    max: number;
  };
  priority: {
    size: number;
    rounded: number;
    levels: {
      low: TPriority;
      medium: TPriority;
      hight: TPriority;
    };
  };
}
