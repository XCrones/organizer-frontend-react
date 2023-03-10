import { IBaseInfo } from ".";

export interface ITodoJoin {
  title: string;
  category: string;
  priority: TPriority;
  deadline: string;
  status: boolean;
  background: string;
}

export interface ITodo extends ITodoJoin, IBaseInfo {}

export type TPriority = 0 | 1 | 2;
