import styled from "styled-components";

export const Wrapper = styled.div<{ height_footer: number }>`
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr ${(props) => props.height_footer}px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  color: ${(props) => props.theme.color.main};
  background-color: ${(props) => props.theme.background.main};
  transition: background-color 0.3s ease-in-out;
`;

export const Section = styled.section<{ maxHeight: number; paddingBottom: number }>`
  grid-area: 1 / 1 / 2 / 2;
  overflow-y: auto;
  max-height: ${(props) => props.maxHeight}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
`;

export const Footer = styled.footer`
  grid-area: 2 / 1 / 3 / 2;
`;
