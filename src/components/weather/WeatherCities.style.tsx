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
  background-color: ${(props) => props.theme.section.block.background};
  padding: 15px;
  border-radius: 11px;
`;

export const CityName = styled.div`
  flex: 1 1 auto;
  font-size: 18px;
  text-transform: capitalize;
  padding-left: 10px;
  color: ${(props) => props.theme.section.weather.cities.item.color};
`;

export const CityBtn = styled.button.attrs({
  type: "button",
})<{ background: string }>`
  border-radius: 7px;
  transition: all 150ms ease-in;
  color: ${(props) => props.theme.section.weather.cities.btn.color};
  font-size: 20px;
  width: 30px;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.background};
  }
`;
