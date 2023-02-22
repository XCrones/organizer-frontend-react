import { IBaseInfo } from "./base.models";

export interface IJoinTodo {
  title: string;
  category: string;
  priority: number;
  deadline: string;
  status: boolean;
  background: string;
}

export interface ITodo extends IJoinTodo, IBaseInfo {}
