import { GButtSubmit } from "./../../ui/components/button.style";
import { G_VARIABLES } from "../../ui/variables";
import styled from "styled-components";

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

export const SettingsExit = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
`;

// prettier-ignore
export const SettingsSubmit = styled(GButtSubmit)`
margin-top: 15px;
  color: ${props => props.theme.section.settings.btn.submit.color};
  background: ${(props) => props.theme.section.settings.btn.submit.gradient[0]};
  background: linear-gradient(142deg, ${(props) => props.theme.section.settings.btn.submit.gradient[0]} 0%, ${(props) => props.theme.section.settings.btn.submit.gradient[1]} 100%);
`;
