import styled from "styled-components";

export const GButtSubmit = styled.button.attrs({
  type: "submit",
})<{ gradient?: string[]; mt?: number; mb?: number; fz?: number }>`
  height: 50px;
  width: 100%;
  text-transform: capitalize;
  font-size: ${(props) => (props.fz ? props.fz : 14)}px;
  line-height: 19px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
`;
