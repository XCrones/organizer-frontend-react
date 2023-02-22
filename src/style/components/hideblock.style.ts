import styled from "styled-components";

export const GHideBlock = styled.div<{ isHide: boolean }>`
  display: ${(props) => (props.isHide ? "block" : "none")};
`;
