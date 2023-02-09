import styled from "styled-components";

export const TodoExampleItem = styled.div<{}>`
  border-radius: 11px;
  flex: 0 0 185px;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  &:nth-child(odd) {
    background: rgb(107, 92, 148);
    background: linear-gradient(180deg, rgba(107, 92, 148, 1) 0%, rgba(159, 75, 110, 1) 100%);
  }
  &:nth-child(even) {
    background: rgb(165, 175, 196);
    background: linear-gradient(142deg, rgba(165, 175, 196, 1) 0%, rgba(109, 123, 152, 1) 100%);
  }
`;

export const TodoExampleButt = styled.div<{}>`
  cursor: pointer;
  height: 6px;
  width: 6px;
  background-color: #fff;
  border-radius: 50%;
  align-self: flex-end;
  margin-right: 14px;
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
  margin-left: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -12px;
    width: 4px;
    height: 100%;
    border-radius: 6px;
    background: rgb(255, 201, 44);
    background: linear-gradient(142deg, rgba(255, 201, 44, 1) 0%, rgba(253, 147, 113, 1) 100%);
  }
`;

export const TodoExampleLine = styled.div<{}>`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 12px 0;
  border-radius: 1px;
`;

export const TodoExpampleTime = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  color: #ffff;
  column-gap: 5px;
`;

export const TodoExampleSubTitle = styled.h2<{}>``;

export const TodoExpampleCount = styled(TodoExpampleTime)`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  color: #ffff;
  column-gap: 5px;
  & > i {
    color: rgb(38, 110, 215);
    color: linear-gradient(142deg, rgba(38, 110, 215, 1) 0%, rgba(77, 138, 235, 1) 100%);
  }
`;
