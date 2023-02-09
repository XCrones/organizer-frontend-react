import styled from "styled-components";
import { fonts } from "../../style/variables.style";

export const TodoItem = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  padding: 19px 20px 17px 20px;
  border-radius: 11px;
  background-color: ${(props) => props.bgColor};
`;

export const TodoItemButt = styled.div<{}>`
  position: relative;
`;

export const TodoItemRadio = styled.input<{}>`
  opacity: 0;
  position: absolute;
  z-index: 2;
  height: 18px;
  width: 18px;
  cursor: pointer;
`;

export const TodoItemRadioReplace = styled.div<{ color: string; isStatus: boolean }>`
  height: 18px;
  width: 18px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &::before {
    content: "";
    position: absolute;
    height: 80%;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${(props) => (props.isStatus ? props.color : "#1e203b")};
  }
`;

export const TodoItemTitle = styled.div<{}>`
  font-size: 13px;
  font-family: ${fonts.inter};
`;
