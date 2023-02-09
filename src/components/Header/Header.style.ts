import { fonts } from "./../../style/variables.style";
import styled from "styled-components";

export const Elem = styled.div``;

export const HeaderWrapper = styled.div<{}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 20px;
`;

export const HeaderTitle = styled.h1<{}>`
  text-transform: capitalize;
  font-size: 27px;
  font-family: ${fonts.inter};
  font-weight: 700;
`;

export const HeaderButtns = styled.div<{}>`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;

export const HeaderButt = styled.button<{}>`
  font-size: 24px;
  line-height: 32px;
`;
