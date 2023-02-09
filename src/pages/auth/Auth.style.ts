import { color } from "./../../style/variables.style";
import styled from "styled-components";

export const AuthWrapper = styled.div<{}>`
  height: 100%;
  width: 100%;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AuthTitle = styled.h1`
  max-width: 170px;
  font-size: 27px;
  line-height: 34px;
  font-weight: 700;
  padding-bottom: 16px;
  color: #fff;
`;

export const AuthSubTitle = styled.h2`
  max-width: 290px;
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  padding-bottom: 30px;
  color: ${color.colorAuthTitle};
`;
