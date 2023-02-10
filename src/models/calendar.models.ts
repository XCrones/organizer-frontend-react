import { IBaseInfo } from "./base.models";

export interface IEventCreate {
  uid: number;
  year: number;
  month: number;
  day: number;
  timeStart: number;
  timeEnd: number;
  title: string;
  description: string;
  color: string;
  background: string;
}

export interface IEvent extends IEventCreate, IBaseInfo {}
