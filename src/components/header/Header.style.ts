import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 75px;
`;

export const HeaderTitle = styled.h1`
  text-transform: capitalize;
  font-size: 27px;
  font-weight: 700;
`;

export const HeaderButt = styled.button.attrs({ type: "button" })`
  & i {
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.section.color};
  }
`;
