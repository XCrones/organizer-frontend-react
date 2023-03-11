import styled from "styled-components";
import { GFrameRotate360, GFrameSliderLtoR } from "../../ui";
import { G_VARIABLES } from "../../ui/variables";

export const WeatherForecast = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding-top: 20px;
  background-color: ${(props) => props.theme.section.background};
  animation: ${GFrameSliderLtoR} 150ms linear;
`;

export const ForecastHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const ForecastButt = styled.button.attrs({ type: "button" })<{ background: string; isRotate?: boolean }>`
  font-size: 23px;
  background-color: ${(props) => (props.isRotate ? "#15ad36" : G_VARIABLES.backgrund.dark_blue)};
  padding: 5px;
  border-radius: 5px;

  & i {
    display: inline-block;
    animation: ${(props) => (props.isRotate ? GFrameRotate360 : "")} 700ms linear infinite;
    color: ${(props) => (props.isRotate ? "#000" : "#fff")};
    transition: all 300ms ease-in;
  }
`;

export const ForecastTitle = styled.h2`
  text-align: center;
  font-size: 27px;
`;

export const ForecastTemp = styled.div``;

// padding-top: 10px;
export const ForecastTimes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export const ForecastSunRiseSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
`;

export const ForecastCurrent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrTemp = styled.h3`
  font-size: 40px;
  line-height: 40px;
`;

export const CurrIcon = styled.img``;

export const ForecastTemps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  font-size: 14px;
  padding-bottom: 20px;
`;

export const TempMinMax = styled.div``;

export const ForecastItems = styled.div`
  padding-left: ${G_VARIABLES.indent.left}px;
  padding-right: ${G_VARIABLES.indent.right}px;
  padding-bottom: 20px;
`;

export const ForecastColumn = styled.div<{ isCurrDate: boolean }>`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.isCurrDate ? "#16599b" : "#102e4b")};
`;

export const ForecastItem = styled.div``;
export const ColumnDay = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
`;
export const ColumnDate = styled.div``;
export const ColumnTime = styled.div``;
export const ColumnIcon = styled.div`
  background-color: ${G_VARIABLES.backgrund.dark_blue};
  border-radius: 50%;
  margin: 10px;
`;
export const ColumnTemp = styled.div``;

export const ColumnDescr = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;
export const DescrItem = styled.div`
  flex: 0 1 27%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 10px;
  padding: 8px 5px;
  border-radius: 15px;
  background-color: #16599b;

  & > span > span {
    font-size: 12px;
  }
`;
