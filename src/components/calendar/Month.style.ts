import styled from "styled-components";

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
