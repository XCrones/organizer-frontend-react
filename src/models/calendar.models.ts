import { IBaseInfo } from "./base.models";

export interface IEventCreate {
  uid: number;
  eventStart: Date;
  eventEnd: Date;
  title: string;
  description: string;
  color: string;
  background: string;
}

export interface IEvent extends IEventCreate, IBaseInfo {}
