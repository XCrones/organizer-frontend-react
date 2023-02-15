import { IBaseInfo } from "./base.models";

export interface IJoinTodo {
  uid: number;
  title: string;
  category: string;
  priority: number;
  deadline: string;
  status: boolean;
  descritption: string;
  background: string;
}

export interface ITodo extends IJoinTodo, IBaseInfo {}
