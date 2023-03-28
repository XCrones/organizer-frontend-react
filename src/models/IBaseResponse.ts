export interface IBaseResponse<T> {
  message?: string;
  code: number;
  data: T;
}
