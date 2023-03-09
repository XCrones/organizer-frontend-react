export const APP_MESSAGES = {
  succes: (text?: string | string[]) => `Succes:${!!text ? ` ${text}` : ""}!`,
  error: (text?: string | string[]) => `Error:${!!text ? ` ${text}` : ""}!`,
  warn: (text?: string | string[]) => `Warning:${!!text ? ` ${text}` : ""}!`,
};
