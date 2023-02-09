import styled from "styled-components";

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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
`;

export const Examples = styled.div<{}>`
  flex: 1 1 auto;
`;

export const Items = styled.div`
  flex: 1 1 auto;
  padding: 0 5px;
`;
