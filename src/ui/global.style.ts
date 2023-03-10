import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      &::-webkit-scrollbar {
      width: 4px;
      height: 0px;
      background-color: #143861;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #347184;
      border-radius: 10px;

      &:hover {
        background-color: #7ed6cf;
      }
    }
  }
`;
