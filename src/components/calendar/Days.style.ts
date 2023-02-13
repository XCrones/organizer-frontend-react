import { color, fonts } from "./../../style/variables.style";
import styled from "styled-components";
import { IParseEvent } from "./Days.component";

export const Days = styled.div`
  font-size: 17px;
  font-family: ${fonts.inter};
`;

export const Moth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const MonthPrev = styled.button`
  font-size: 15px;
  line-height: 15px;
`;

export const MonthCurr = styled.h2`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 600;
  line-height: 18px;
`;

export const MonthNext = styled.button`
  font-size: 15px;
  line-height: 15px;
`;

export const DaysItems = styled.div`
  padding-bottom: 35px;
`;

export const DaysItem = styled.button<{ currDay: boolean }>`
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
  width: 50px;
  height: 100%;
  background: ${(props) => (props.currDay ? "#654ea3" : "#")};
  background: ${(props) =>
    props.currDay ? "linear-gradient(180deg, rgba(101, 78, 163, 1) 0%, rgba(234, 175, 200, 1) 100%)" : "#"};
`;

export const DayWeeek = styled.h4<{ currDay: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.currDay ? "#fff" : "#6A6C7A")};
  line-height: 16px;
`;

export const DayNum = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

export const SheduleWrapper = styled.div``;

export const SheduleItems = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  &:last-child {
    margin-bottom: 30px;
  }
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

export const SheduleLine = styled.div<{}>`
  flex: 1 1 auto;
  width: 100%;
  height: 2px;
  background-color: #2f3045;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #2f3045;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;

export const EventWrapper = styled.div`
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

export const EventItem = styled.div<{ startTime: number; edntTime: number; background: string }>`
  position: absolute;
  top: ${(props) => props.startTime * 40 + 10 + 2}px;
  height: ${(props) => (props.edntTime - props.startTime) * 40 - 4}px;
  left: 0;
  right: 0;
  background-color: ${(props) => props.background};
  text-align: center;
  border-radius: 5px;
  padding: 5px;
`;

export const EventTitle = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
`;

export const EventDescription = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #8eb5f2;
`;
