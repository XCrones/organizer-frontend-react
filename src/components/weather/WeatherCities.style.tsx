import styled from "styled-components";
import { G_VARIABLES } from "../../ui/variables";

export const WeatherCities = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const WeatherCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${G_VARIABLES.backgrund.dark_blue};
  padding: 15px;
  border-radius: 11px;
`;

export const CityName = styled.div`
  flex: 1 1 auto;
  font-size: 18px;
  text-transform: capitalize;
  padding-left: 10px;
`;

export const CityBtn = styled.button.attrs({
  type: "button",
})<{ background: string }>`
  padding: 5px;
  border-radius: 7px;
  transition: all 150ms ease-in;
  color: #808080;
  font-size: 18px;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.background};
  }
`;
