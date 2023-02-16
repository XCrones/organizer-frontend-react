import { fonts } from "../../style/variables.style";
import styled from "styled-components";

export const ListItems = styled.div<{}>`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ListItem = styled.div<{ isHide: boolean }>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isHide ? "none" : "flex")};
  flex-direction: column;
  row-gap: 10px;
`;

export const ListTitle = styled.h2<{}>`
  text-transform: capitalize;
  font-weight: 700;
  font-family: ${fonts.inter};
  padding-bottom: 10px;
`;
