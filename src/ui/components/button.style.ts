import styled from "styled-components";
import { GFrameRotate360 } from "..";
import { GColor } from "../variables.style";

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
})<{ gradient: string[]; mt?: number; mb?: number; fz?: number }>`
  height: 50px;
  width: 100%;
  background: ${(props) => props.gradient[0]};
  background: linear-gradient(142deg, ${(props) => props.gradient[0]} 0%, ${(props) => props.gradient[1]} 100%);
  text-transform: capitalize;
  font-size: ${(props) => (props.fz ? props.fz : 14)}px;
  line-height: 19px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
`;
