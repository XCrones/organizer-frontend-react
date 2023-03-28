import { IBaseInfo } from ".";
import { EPriority } from "../Enum";

export interface ITodoJoin {
  name: string;
  category: string;
  priority: TPriority;
  deadLine: string;
  status: boolean;
  background: string;
}

export interface ITodo extends ITodoJoin, IBaseInfo {}

export type TPriority = EPriority.hight | EPriority.medium | EPriority.low;
