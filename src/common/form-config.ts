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
