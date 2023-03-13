import { GFrameSliderLtoR } from "./../keyframes/animations.keyframes";
import { G_VARIABLES } from "../variables";
import styled from "styled-components";

export const GEditWrapper = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.section.editor.background};
  padding: 5px;
  z-index: 10;
  animation: ${GFrameSliderLtoR} 150ms linear;
  color: ${(props) => props.theme.section.editor.color};
`;

export const GEditHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-transform: capitalize;
`;

export const GEditCancel = styled.button.attrs({
  type: "button",
})`
  text-transform: capitalize;
  color: ${(props) => props.theme.section.editor.butt.cancel.color};
  padding: 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.section.editor.butt.cancel.graient[0]};
  background: linear-gradient(
    142deg,
    ${(props) => props.theme.section.editor.butt.cancel.graient[0]} 0%,
    ${(props) => props.theme.section.editor.butt.cancel.graient[1]} 100%
  );
`;

export const GEditWinTitle = styled.div`
  color: ${(props) => props.theme.section.editor.color};
  font-size: 20px;
`;

export const GEditSubmit = styled.button.attrs({
  type: "submit",
})<{ isValid: boolean }>`
  text-transform: capitalize;
  color: ${(props) => (props.isValid ? props.theme.section.editor.butt.submit.color : "#c0c0c0")};
  cursor: ${(props) => (props.isValid ? "pointer" : "not-allowed")};
  border: 1px solid
    ${(props) =>
      props.isValid ? props.theme.section.editor.butt.submit.graient[0] : props.theme.section.editor.butt.submit.color};
  padding: 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.section.editor.butt.submit.graient[0]};
  background: linear-gradient(
    142deg,
    ${(props) => props.theme.section.editor.butt.submit.graient[0]} 0%,
    ${(props) => props.theme.section.editor.butt.submit.graient[1]} 100%
  );
`;

export const GEditItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 5px;
  position: relative;
`;

export const GEditItem = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.section.editor.field.background};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

const DefaultInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.section.editor.field.background};
  outline: 0;
  font-size: 15px;
`;

export const GEditName = styled(DefaultInput).attrs({
  type: "text",
})`
  &::placeholder {
    font-size: 14px;
    color: ${G_VARIABLES.color.gray.light};
  }
`;

export const GEditTitle = styled.h3`
  flex: 0 0 80px;
  text-transform: capitalize;
`;

export const GEditDate = styled(DefaultInput)``;

export const GEditDecr = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.section.editor.field.background};
  outline: 0;
  resize: none;
  font-size: 15px;
`;

export const GEditPallete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const GEditPalleteItem = styled.div<{ background: string; isSelect: boolean }>`
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

export const GEditRadioItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

// prettier-ignore
export const GEditButt = styled.button.attrs({ type: "button" })`
  height: 50px;
  width: 100%;
  text-transform: capitalize;
  font-size: 19px;
  color: #fff;
  background: ${(props) => props.theme.section.editor.butt.delete.graient[0]};
  background: linear-gradient(142deg, ${(props) => props.theme.section.editor.butt.delete.graient[0]} 0%, ${(props) => props.theme.section.editor.butt.delete.graient[1]} 100%);
`;
