import { GColor } from "../../ui/variables.style";
import styled from "styled-components";

export const Elem = styled.div``;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const SettingsItems = styled.div<{ pr: number; pl: number }>`
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Settingsitem = styled.div`
  padding: 5px;
  background-color: ${GColor.colorSettings};
  border-radius: 10px;
`;

export const SettingsExit = styled.div<{ pr: number; pl: number }>`
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
`;
