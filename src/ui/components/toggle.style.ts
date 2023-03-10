import styled from "styled-components";

interface IToggle {
  isSet: boolean;
  colors: {
    true: string;
    false: string;
    slider: string;
  };
  size: {
    width: number;
    height: number;
  };
}

export const GToggle = styled.div<IToggle>`
  cursor: pointer;
  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
  background-color: ${(props) => (props.isSet ? props.colors.true : props.colors.false)};
  position: relative;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: ${(props) => (props.isSet ? "translate(-100%, -50%)" : "translate(0%, -50%)")};
    left: ${(props) => (props.isSet ? "98%" : "2%")};
    height: 90%;
    width: 40%;
    background-color: ${(props) => props.colors.slider};
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
`;
