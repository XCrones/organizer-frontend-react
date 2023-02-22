import styled from "styled-components";

export const PulseLoader = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
