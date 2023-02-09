import { fonts } from "../../style/variables.style";
import styled from "styled-components";

export const TodoListWrapper = styled.div`
  max-height: 380px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const TodoListEmpty = styled.div<{}>``;

export const TodoListTitle = styled.h2<{}>`
  text-transform: capitalize;
  font-weight: 700;
  font-family: ${fonts.inter};
  padding-bottom: 10px;
  padding-top: 35px;
`;

export const TodoListItems = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;