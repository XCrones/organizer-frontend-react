import styled from "styled-components";

export const GRadioItem = styled.div<{ size: number }>`
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

export const GRadioRaplace = styled.div<{ isSelect: boolean; colorSelect: string; rounded: number }>`
  height: 100%;
  width: 100%;
  border-radius: ${(props) => props.rounded}%;
  position: relative;
  background-color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    background-color: ${(props) => (props.isSelect ? props.colorSelect : "")};
    border-radius: ${(props) => props.rounded}%;
  }
`;
