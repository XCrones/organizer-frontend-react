import { color } from "./../../style/variables.style";
import styled from "styled-components";

export const CreateWrapper = styled.form`
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px 10px 0 0;
  background-color: #111219;
  padding: 5px;
`;

export const CreateHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  text-transform: capitalize;
`;

export const CreateCancel = styled.button`
  text-transform: capitalize;
  color: #ff0000;
`;

export const CreateType = styled.h3``;

export const CreateJoin = styled.button`
  text-transform: capitalize;
`;

export const CreateItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 5px;
  position: relative;
`;

export const CreateItem = styled.div`
  width: 100%;
  background-color: ${color.colorSettings};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

export const DefaultInput = styled.input`
  width: 100%;
  background-color: ${color.colorSettings};
  outline: 0;
  font-size: 15px;
`;

export const CreateEventName = styled(DefaultInput)`
  &::placeholder {
    font-size: 14px;
    color: ${color.colorAuthTitle};
  }
`;

export const CreateTitle = styled.h3`
  flex: 0 0 70px;
  text-transform: capitalize;
`;

export const CreateTime = styled.div``;

export const CreateStartEvent = styled(DefaultInput)``;

export const CreateEndEvent = styled(DefaultInput)``;

export const CreateDescription = styled.textarea`
  width: 100%;
  background-color: ${color.colorSettings};
  outline: 0;
  resize: none;
  font-size: 15px;
`;

export const CreateBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  & > div {
    cursor: pointer;
    flex: 0 0 45px;
    height: 45px;
    border-radius: 5px;
    &:hover {
      outline: 1px solid #000;
      transition: all 0.2s ease-in-out;
    }
  }
`;
