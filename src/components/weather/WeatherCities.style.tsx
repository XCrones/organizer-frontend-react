import styled from "styled-components";
import { G_COLOR, G_FONTS } from "../../ui/variables.style";

export const WeatherCities = styled.div<{ pr: number; pl: number }>`
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const WeatherCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${G_COLOR.todoItem};
  padding: 15px;
  border-radius: 11px;
`;

export const CityName = styled.div`
  flex: 1 1 auto;
  font-size: 18px;
  font-family: ${G_FONTS.inter};
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
