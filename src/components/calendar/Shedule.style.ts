import styled from "styled-components";

export const Shedule = styled.div``;

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
