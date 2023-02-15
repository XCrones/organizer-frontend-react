import { IBaseInfo } from "./base.models";

export interface ITodoCreate {
  uid: number;
  title: string;
  category: string;
  priority: number;
  deadline: Date;
  status: boolean;
  descritption: string;
}

export interface ITodo extends ITodoCreate, IBaseInfo {}

export interface IJoinTodo {
  uid: number;
  title: string;
  category: string;
  priority: number;
  deadline: Date;
  status: boolean;
  descritption: string;
}
