import styled from "styled-components";

export const GButton = styled.button<{ color1: string; color2: string }>`
  height: 50px;
  width: 100%;
  background: ${(props) => props.color1};
  background: linear-gradient(142deg, ${(props) => props.color2} 0%, ${(props) => props.color1} 100%);
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
`;
