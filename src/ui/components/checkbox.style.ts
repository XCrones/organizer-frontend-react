import styled from "styled-components";

export const GCheckboxItem = styled.div<{ size: number }>`
  position: relative;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;

  & > input {
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 2;
  }
`;

export const GCheckboxReplace = styled.div<{ colorSelect: string; rounded: number }>`
  height: 100%;
  width: 100%;
  border-radius: ${(props) => props.rounded}%;
  position: relative;
  background-color: ${(props) => props.colorSelect};
  transition-property: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;

  &::before {
    content: "";
    position: absolute;
    height: 80%;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border-radius: ${(props) => props.rounded}%;
  }
`;
