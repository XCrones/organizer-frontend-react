import styled from "styled-components";
import { GColor } from "../../style/variables.style";

export const SortWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  border-radius: 0 10px 10px 0;
  background-color: ${GColor.footerBg};
  padding: 5px;
  z-index: 10;
`;
