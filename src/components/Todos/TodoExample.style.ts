import styled from "styled-components";

export const TodoExpampleWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
`;

export const TodoExampleItems = styled.div<{}>`
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  max-width: 375px;
  overflow-x: auto;

  &:first-child {
    padding-left: 20px;
  }

  &:last-child {
    padding-right: 20px;
  }
`;
