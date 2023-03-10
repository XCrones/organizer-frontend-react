export const APP_MESSAGES = {
  succes: (text?: string | string[]) => `Succes:${!!text ? ` ${text}` : ""}!`,
  error: (text?: string | string[]) => `Error:${!!text ? ` ${text}` : ""}!`,
  warn: (text?: string | string[]) => `Warning:${!!text ? ` ${text}` : ""}!`,
  REQ_FIELD: "Required filed",
  EMAIL_INV: "Email invalid",
  MIN_CHAR: (count: number) => `Min chars ${String(count)}`,
  MAX_CHAR: (count: number) => `Max chars ${String(count)}`,
};
