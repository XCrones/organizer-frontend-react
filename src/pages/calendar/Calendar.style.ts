import styled from "styled-components";
import { G_VARIABLES } from "../../ui/variables";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const Events = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
  font-size: 17px;
  position: relative;
`;

export const DaysList = styled.div`
  padding-bottom: 35px;
`;

export const DaysItem = styled.button.attrs({ type: "button" })<{ currDay: boolean }>`
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
    props.currDay ? "linear-gradient(180deg, rgba(101, 78, 163, 1) 0%, rgba(234, 175, 200, 1) 100%)" : ""};
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
