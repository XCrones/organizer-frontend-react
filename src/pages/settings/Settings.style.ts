import { color } from "./../../style/variables.style";
import styled from "styled-components";

export const Elem = styled.div``;

export const SettingsWrapper = styled.div`
  /* height: 100%;
  width: 100%; */
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const SettingsItems = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Settingsitem = styled.div`
  padding: 5px;
  background-color: ${color.colorSettings};
  border-radius: 10px;
`;

export const SettingsExit = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
