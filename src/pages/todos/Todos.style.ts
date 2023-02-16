import styled from "styled-components";
import { fonts } from "../../style/variables.style";

const Scroll = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #143861;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #347184;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #7ed6cf;
  }
  background-color: red;
`;

export const TodosWrapper = styled.div`
  /* height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px; */

  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const TodoHeader = styled.header<{}>`
  padding-left: 20px;
  padding-right: 20px;
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

export const Examples = styled.div<{}>`
  flex: 0 0 140px;
`;

export const Items = styled.div`
  flex: 1 1 auto;
  position: relative;
`;

export const ListItems = styled.div<{}>`
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

export const ListTitle = styled.h2<{}>`
  text-transform: capitalize;
  font-weight: 700;
  font-family: ${fonts.inter};
  padding-bottom: 10px;
`;
