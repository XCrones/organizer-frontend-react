import { IBaseInfo } from "./base.models";

export interface IEventCreate {
  uid: number;
  eventStart: Date;
  eventEnd: Date;
  title: string;
  description: string;
  background: string;
}

export interface IEvent extends IBaseInfo {
  uid: number;
  eventStart: string;
  eventEnd: string;
  title: string;
  description: string;
  background: string;
}

export interface IParseEvent {
  id: number;
  hourStart: number;
  minuteStart: number;
  hourEnd: number;
  minuteEnd: number;
  background: string;
  title: string;
  description: string;
}

export interface IJoinEvent {
  uid: number;
  title: string;
  eventStart: Date;
  eventEnd: Date;
  background: string;
  description: string;
}
