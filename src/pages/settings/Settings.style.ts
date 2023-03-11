import { G_VARIABLES } from "../../ui/variables";
import styled from "styled-components";

export const Elem = styled.div``;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const SettingsItems = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Settingsitem = styled.div`
  padding: 5px;
  background-color: ${G_VARIABLES.backgrund.medium_blue};
  border-radius: 10px;
`;

export const SettingsExit = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
`;
