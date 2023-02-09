import styled from "styled-components";
import { color } from "../../style/variables.style";

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
  color: ${color.colorAuth};
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
  background-color: ${color.colorAuth};
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

export const AuthAlternativeSignItem = styled.a`
  display: block;
  flex: 0 1 100px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
`;

export const AuthLink = styled.a`
  text-align: center;
  display: block;
  font-size: 12px;
  &::first-letter {
    text-transform: uppercase;
  }
  color: ${color.colorAuthTitle};
  text-decoration: underline;
  padding-bottom: 20px;
`;

export const AuthSubmit = styled.button`
  height: 50px;
  width: 100%;
  background: rgb(38, 110, 215);
  background: linear-gradient(142deg, rgba(38, 110, 215, 1) 0%, rgba(77, 138, 235, 1) 0%);
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`;

export const AuthToggleForm = styled.button`
  font-size: 14px;
  line-height: 15px;
  color: ${color.colorAuthTitle};
`;
