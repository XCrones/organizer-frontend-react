import { IBaseInfo } from ".";

export interface ITodoJoin {
  title: string;
  category: string;
  priority: number;
  deadline: string;
  status: boolean;
  background: string;
}

export interface ITodo extends ITodoJoin, IBaseInfo {}
