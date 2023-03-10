import styled from "styled-components";
import { GFormError, GFrameSliderLtoR, GButtSubmit } from "../../ui";
import { G_COLOR } from "../../ui/variables.style";

export const WeatherJoin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${G_COLOR.colorSettings};
  animation: ${GFrameSliderLtoR} 150ms linear;
  padding: 5px;
`;

export const JoinHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

export const JoinButt = styled.button.attrs({ type: "button" })`
  color: ${(props) => props.color};
  font-size: 23px;
  padding: 5px;
  border-radius: 5px;
`;

export const JoinGeo = styled(JoinButt)<{ isLock: boolean; color: string }>`
  position: relative;
  color: ${(props) => props.color};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 15px;
    height: 100%;
    width: 2px;
    background-color: ${(props) => (props.isLock ? "#fff" : "")};
    transform: rotate(45deg);
  }
`;

export const JoinClose = styled(JoinButt)``;

export const JoinTitle = styled.div`
  flex: 1 1 auto;
  text-align: center;
  text-transform: capitalize;
`;

export const JoinForm = styled.form``;

export const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const FormTitle = styled.label`
  text-transform: capitalize;
`;

export const FormInput = styled.input.attrs({
  type: "text",
})`
  color: #fff;
  background-color: ${G_COLOR.mainBg};
  border-radius: 4px;
  padding: 2px 5px;
`;

export const FormSubmit = styled(GButtSubmit)`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 50%;
  height: 30px;
  width: 100%;
  border-radius: 5px;
`;

export const FormError = styled(GFormError)`
  text-align: center;
  padding-top: 5px;
`;
