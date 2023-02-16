import styled, { keyframes } from "styled-components";
import { color } from "../../style/variables.style";

const slider = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const PopupWrapper = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
  border-radius: 10px 10px 0 0;
  background-color: ${color.mainBg};
  padding: 5px;
  z-index: 10;
  animation: ${slider} 150ms linear;
`;

export const PopupHeader = styled.div<{}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-transform: capitalize;
`;

export const PopupCancel = styled.button<{}>`
  text-transform: capitalize;
  color: #ff0000;
`;

export const PopupEventTitle = styled.div<{}>``;

export const PopupSubmit = styled.button<{}>`
  text-transform: capitalize;
`;

export const PopupItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 5px;
  position: relative;
`;

export const PopupItem = styled.div`
  width: 100%;
  background-color: ${color.colorSettings};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

const DefaultInput = styled.input`
  width: 100%;
  background-color: ${color.colorSettings};
  outline: 0;
  font-size: 15px;
`;

export const PopupEventName = styled(DefaultInput)`
  &::placeholder {
    font-size: 14px;
    color: ${color.colorAuthTitle};
  }
`;

export const PopupTitle = styled.h3`
  flex: 0 0 80px;
  text-transform: capitalize;
`;

export const PopupEventDate = styled(DefaultInput)``;

export const PopupDescription = styled.textarea`
  width: 100%;
  background-color: ${color.colorSettings};
  outline: 0;
  resize: none;
  font-size: 15px;
`;

export const PopupPallete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PopupPalleteItem = styled.div<{ background: string; isSelect: boolean }>`
  cursor: pointer;
  flex: 0 0 45px;
  height: 45px;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  border: ${(props) => (props.isSelect ? "2px solid #000" : "0")};
  &:hover {
    outline: 1px solid #000;
    transition: all 0.2s ease-in-out;
  }
`;

export const PopupRadioItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;
