import styled from "styled-components";
import { GFonts } from "../../ui/variables.style";

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Todos = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
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
  font-family: ${GFonts.inter};
  padding-bottom: 10px;
`;
