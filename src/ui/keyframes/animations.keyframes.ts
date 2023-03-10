import { keyframes } from "styled-components";

export const GFrameTtoB = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const GFrameSliderLtoR = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const GFrameRotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
