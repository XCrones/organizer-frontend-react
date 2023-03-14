import { G_VARIABLES } from "../variables";
import styled from "styled-components";

export const GToggle = styled.div<{ width: number; height: number; isSet: boolean }>`
  cursor: pointer;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => (props.isSet ? G_VARIABLES.color.green.medium : G_VARIABLES.color.red.medium)};
  position: relative;
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: ${(props) => (props.isSet ? "55%" : "2%")};
    height: 90%;
    width: 40%;
    background-color: ${G_VARIABLES.color.white};
    border-radius: 50%;
    transition: left 0.2s ease-in-out;
  }
`;
