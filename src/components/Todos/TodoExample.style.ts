import styled from "styled-components";

export const TodoExpampleWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  max-height: 100%;
  margin-left: 20px;
  overflow: hidden;
`;

export const TodoExampleItems = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;

export const TodoExampleItem = styled.div<{}>`
  background: rgb(107, 92, 148);
  background: linear-gradient(180deg, rgba(107, 92, 148, 1) 0%, rgba(159, 75, 110, 1) 100%);
  border-radius: 11px;
  flex: 0 1 185px;
  width: 100%;
  height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
`;

export const TodoExampleButt = styled.div<{}>`
  cursor: pointer;
  height: 6px;
  width: 6px;
  background-color: #fff;
  border-radius: 50%;
  align-self: flex-end;
  margin-right: 25px;
  margin-top: 15px;
  margin-bottom: 6px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 6px;
    width: 6px;
    background-color: #fff;
    border-radius: 50%;
  }

  &::before {
    transform: translateX(-150%);
  }
  &::after {
    transform: translateX(150%);
  }
`;

export const TodoExampleTitle = styled.h2<{}>`
  text-transform: capitalize;
  max-width: 110px;
  font-size: 15px;
  margin-left: 35px;
`;

export const TodoExpampleTime = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  color: #8a8888;
`;

export const TodoExampleSubTitle = styled.h2<{}>``;
