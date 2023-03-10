import { GFonts } from "../../ui/variables.style";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 75px;
`;

export const HeaderTitle = styled.h1`
  text-transform: capitalize;
  font-size: 27px;
  font-family: ${GFonts.inter};
  font-weight: 700;
`;

export const HeaderButtns = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;

export const HeaderButt = styled.button.attrs({ type: "button" })`
  font-size: 24px;
  line-height: 32px;
`;
