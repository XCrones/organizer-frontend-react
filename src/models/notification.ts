export interface INotifMeta {
  background: string;
  title: string | string[];
}

export interface INotifMethods {
  default: (meta: INotifMeta, timeout?: number) => void;
  successful: (title: string, timeout?: number) => void;
  error: (title: string | string[], timeout?: number) => void;
}
