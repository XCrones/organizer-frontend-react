import styled from "styled-components";
import { GColor, GFonts } from "../../ui/variables.style";

export const Elem = styled.div``;
export const WeatherCities = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const WeatherCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${GColor.todoItem};
  padding: 15px;
  border-radius: 11px;
`;

export const CityName = styled.div`
  flex: 1 1 auto;
  font-size: 18px;
  font-family: ${GFonts.inter};
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
