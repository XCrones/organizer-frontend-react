import { fonts } from "../../style/variables.style";
import styled from "styled-components";

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
