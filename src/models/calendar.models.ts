import { IBaseInfo } from ".";

export interface IJoinEvent {
  title: string;
  eventStart: string;
  eventEnd: string;
  background: string;
  description: string;
}
export interface IEvent extends IBaseInfo, IJoinEvent {}

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
