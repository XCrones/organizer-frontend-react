import styled from "styled-components";
import { G_VARIABLES } from "../../ui/variables";

interface ITime {
  hour: number;
  minute: number;
}

interface IEventItem {
  startTime: ITime;
  endTime: ITime;
  background: string;
}

export const Shedule = styled.div``;

export const SheduleItems = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const SheduleItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  position: relative;
  height: 20px;
`;

export const SheduleTime = styled.div`
  flex: 0 0 50px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const SheduleLine = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 2px;
  background-color: ${G_VARIABLES.color.medium_blue.light}70;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${G_VARIABLES.color.medium_blue.light};
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;

export const SheduleEvents = styled.div`
  position: absolute;
  top: 0;
  left: 75px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const Events = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const EventItem = styled.div<IEventItem>`
  position: absolute;
  top: ${(props) => props.startTime.hour * 40 + 10 + (40 * props.startTime.minute) / 60}px;
  height: ${(props) => (props.endTime.hour - props.startTime.hour) * 40 + (40 * props.endTime.minute) / 60}px;
  left: 0;
  right: 0;
  background-color: ${(props) => `${props.background}90`};
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.background};
    border-radius: 5px 0 0 5px;
  }
`;

export const EventTitle = styled.h4`
  flex: 0 0 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
  color: ${(props) => props.theme.section.calendar.title};
`;

export const EventDescription = styled.h5`
  flex: 1 1 auto;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
