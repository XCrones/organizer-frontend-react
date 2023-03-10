import styled from "styled-components";

export const AuthWrapper = styled.div<{ pr: number; pl: number }>`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
`;
