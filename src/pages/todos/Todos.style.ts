import styled from "styled-components";
import { G_FONTS } from "../../ui/variables.style";

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Todos = styled.div<{ pr: number; pl: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  position: relative;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
`;

export const ListItems = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
`;

export const ListItem = styled.div<{ isHide: boolean }>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isHide ? "none" : "flex")};
  flex-direction: column;
  row-gap: 10px;
`;

export const ListTitle = styled.h2`
  text-transform: capitalize;
  font-weight: 700;
  font-family: ${G_FONTS.inter};
  padding-bottom: 10px;
`;
