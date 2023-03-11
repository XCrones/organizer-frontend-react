import styled from "styled-components";
import { G_VARIABLES } from "../../ui/variables";

export const FooterNav = styled.nav`
  height: 100%;
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.footer.background};
  transition: ${(props) => props.theme.transition.theme};
`;

export const NavIcon = styled.div`
  font-size: 25px;
  line-height: 25px;
`;

export const NavTitle = styled.h3`
  font-size: 10px;
  line-height: 10px;
`;
