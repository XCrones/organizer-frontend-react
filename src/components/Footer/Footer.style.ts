import { fonts } from "./../../style/variables.style";
import styled from "styled-components";

export const Elem = styled.div``;

export const FooterNav = styled.nav<{}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  font-family: ${fonts.inter};
  padding-bottom: 30px;
  padding-top: 15px;
`;

export const FooterIcon = styled.div<{}>`
  font-size: 20px;
`;

export const FooterTitle = styled.h3<{}>`
  font-size: 10.5px;
`;
