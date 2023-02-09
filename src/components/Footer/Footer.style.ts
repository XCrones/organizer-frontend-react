import { fonts } from "../../style/variables.style";
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
  font-family: ${fonts.inter};
  background-color: ${(props) => props.bgColor};
`;

export const FooterIcon = styled.div<{}>`
  font-size: 25px;
  line-height: 25px;
`;

export const FooterTitle = styled.h3<{}>`
  font-size: 10px;
  line-height: 10px;
`;

export const IconTodo = styled.div<{}>`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
