export const AUTH_CONFIG = {
  sign_up: {
    name: {
      min: 3,
      max: 20,
    },
    password: {
      min: 6,
      max: 20,
    },
  },
};

export const EVENT_CONFIG = {
  name: {
    min: 2,
    max: 30,
  },
  descr: {
    max: 200,
    rows: 6,
  },
};

export const TODO_CONFIG = {
  name: {
    min: 2,
    max: 20,
  },
  category: {
    min: 2,
    max: 20,
  },
  priority: {
    size: 30,
    rounded: 50,
    levels: {
      low: 2,
      medium: 1,
      hight: 0,
    },
  },
};
