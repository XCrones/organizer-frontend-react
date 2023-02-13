import styled from "styled-components";

export const Elem = styled.div``;

export const SheduleWrapper = styled.div``;

export const SheduleItems = styled.div`
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
`;

export const SheduleTime = styled.div`
  flex: 0 0 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SheduleLine = styled.div`
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
