import styled from "styled-components";
import { GColor } from "../../style/variables.style";

export const AuthForm = styled.form<{}>`
  display: flex;
  flex-direction: column;
`;

export const AuthFormItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 40px;
`;

export const AuthFormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthLabel = styled.label`
  text-transform: capitalize;
  color: ${GColor.colorAuth};
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  padding-left: 20px;
`;

export const AuthField = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthInput = styled.input`
  background: rgb(36, 37, 71);
  background: linear-gradient(142deg, rgba(36, 37, 71, 1) 0%, rgba(36, 37, 71, 1) 44.71%);
  color: #fff;
  padding: 17px 20px;
  border-radius: 10px;
  width: 100%;
`;

export const AuthErr = styled.div`
  font-size: 14px;
  padding-left: 20px;
  margin-top: 5px;
  color: #ff0000;
`;

export const AuthInputIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -50%);
  font-size: 20px;
  z-index: 2;
`;

export const AuthAlternativeTitle = styled.div`
  font-size: 12px;
  line-height: 19px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export const AuthAlternativetext = styled.div``;

export const AuthAlternativeLine = styled.div`
  flex: 1 1 auto;
  height: 1px;
  background-color: ${GColor.colorAuth};
`;

export const AuthAlternativeItems = styled.div``;
export const AuthAlternativeItem = styled.a``;

export const AuthAlternativeSign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  padding-bottom: 20px;
`;

export const AuthAlternativeSignItem = styled.a<{ color: string }>`
  display: block;
  flex: 0 1 100px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
`;

export const AuthLink = styled.a`
  /* cursor: pointer; */
  text-align: center;
  display: block;
  font-size: 12px;
  color: ${GColor.colorAuthTitle};
  text-decoration: underline;
  padding-bottom: 20px;
  min-height: 38px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const AuthToggleForm = styled.button`
  font-size: 14px;
  line-height: 15px;
  color: ${GColor.colorAuthTitle};
`;

export const AuthTitle = styled.h1`
  max-width: 170px;
  font-size: 27px;
  line-height: 34px;
  font-weight: 700;
  padding-bottom: 16px;
  color: #fff;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const AuthSubTitle = styled.h2`
  max-width: 290px;
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  padding-bottom: 30px;
  color: ${GColor.colorAuthTitle};
`;
