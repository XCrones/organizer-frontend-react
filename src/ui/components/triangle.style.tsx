import styled from "styled-components";
import { ITriangle } from "../../models/Interfaces";

// prettier-ignore
export const GTriangle = styled.div<ITriangle>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props) => props.size.t}px ${(props) => props.size.r}px ${(props) => props.size.b}px
    ${(props) => props.size.l}px;
  border-color: ${(props) => props.borderColor.t} ${(props) => props.borderColor.r} ${(props) => props.borderColor.b} ${(props) => props.borderColor.l};
`;
