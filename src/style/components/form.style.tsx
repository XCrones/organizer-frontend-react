import styled from "styled-components";

export const GFormError = styled.div<{ color?: string; fz?: number }>`
  color: ${(props) => (props.color ? props.color : "#ff0000")};
  font-size: ${(props) => (props.fz ? props.fz : "14px")};
`;
