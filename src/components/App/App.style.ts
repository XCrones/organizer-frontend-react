import styled from "styled-components";

export const Wrapper = styled.div<{ colorBg: string }>`
  min-height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.colorBg};
`;

export const Header = styled.header<{}>``;

export const Section = styled.section<{}>`
  min-height: 100%;
  min-width: 100%;
  flex: 1 1 auto;
`;

export const Footer = styled.footer<{ colorBg: string }>`
  background-color: ${(props) => props.colorBg};
`;
