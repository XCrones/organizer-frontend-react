import styled from "styled-components";

export const Moth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const MonthButt = styled.button.attrs({ type: "button" })`
  font-size: 20px;
  line-height: 15px;
  color: ${(props) => props.theme.section.calendar.month.btn.color};
`;

export const MonthCurr = styled.h2`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 600;
  line-height: 18px;
`;
