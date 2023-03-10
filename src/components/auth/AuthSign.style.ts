import styled from "styled-components";
import { GColor } from "../../ui/variables.style";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 40px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  text-transform: capitalize;
  color: ${GColor.colorAuth};
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  padding-left: 20px;
`;

export const FormField = styled.div`
  position: relative;
  width: 100%;
`;

export const FormInput = styled.input`
  background: rgb(36, 37, 71);
  background: linear-gradient(142deg, rgba(36, 37, 71, 1) 0%, rgba(36, 37, 71, 1) 44.71%);
  color: #fff;
  padding: 17px 20px;
  border-radius: 10px;
  width: 100%;
`;

export const FormErr = styled.div`
  font-size: 14px;
  padding-left: 20px;
  margin-top: 5px;
  color: #ff0000;
`;

export const FormInputIcon = styled.div<{ color: string }>`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -50%);
  font-size: 20px;
  z-index: 2;
  color: ${(props) => props.color};
`;

export const FormToggle = styled.button.attrs({
  type: "button",
})`
  font-size: 14px;
  line-height: 15px;
  color: ${GColor.colorAuthTitle};
`;

export const FormTitle = styled.h1`
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

export const FormSubtitle = styled.h2`
  max-width: 290px;
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  padding-bottom: 30px;
  color: ${GColor.colorAuthTitle};
`;
