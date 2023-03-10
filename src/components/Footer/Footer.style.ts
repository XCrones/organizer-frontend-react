import { GFonts } from "../../ui/variables.style";
import styled from "styled-components";

export const FooterNav = styled.nav<{ bgColor: string }>`
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;
  font-family: ${GFonts.inter};
  background-color: ${(props) => props.bgColor};
`;

export const NavIcon = styled.div`
  font-size: 25px;
  line-height: 25px;
`;

export const NavTitle = styled.h3`
  font-size: 10px;
  line-height: 10px;
`;
