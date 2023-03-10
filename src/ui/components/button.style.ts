import styled from "styled-components";
import { GFrameRotate360 } from "..";
import { GColor } from "../variables.style";

export const GButton = styled.button<{ color1: string; color2: string }>`
  height: 50px;
  width: 100%;
  background: ${(props) => props.color1};
  background: linear-gradient(142deg, ${(props) => props.color2} 0%, ${(props) => props.color1} 100%);
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
`;

export const GButtClose = styled.button.attrs({
  type: "button",
})<{ background: string; isRotate?: boolean }>`
  font-size: 23px;
  background-color: ${(props) => (props.isRotate ? "#15ad36" : GColor.mainBg)};
  padding: 5px;
  border-radius: 5px;

  & i {
    display: inline-block;
    animation: ${(props) => (props.isRotate ? GFrameRotate360 : "")} 700ms linear infinite;
    color: ${(props) => (props.isRotate ? "#000" : "#fff")};
    transition: all 300ms ease-in;
  }
`;

export const GButtSubmit = styled.button.attrs({
  type: "submit",
})<{ color1: string; color2: string }>`
  background: ${(props) => props.color1};
  background: linear-gradient(142deg, ${(props) => props.color2} 0%, ${(props) => props.color1} 100%);
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
`;
