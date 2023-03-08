import { GColor } from "../../style/variables.style";
import styled from "styled-components";
import { GArotate360, GAsliderLtoR } from "../../ui";

export const WrapperForecast = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding-top: 20px;
  background-color: ${GColor.mainBg};
  animation: ${GAsliderLtoR} 150ms linear;
`;

export const ForecastHeader = styled.div<{}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const ForecastButt = styled.button.attrs({
  type: "button",
})<{ background: string; isRotate?: boolean }>`
  font-size: 23px;
  background-color: ${(props) => (props.isRotate ? "#15ad36" : GColor.mainBg)};
  padding: 5px;
  border-radius: 5px;

  & i {
    display: inline-block;
    animation: ${(props) => (props.isRotate ? GArotate360 : "")} 700ms linear infinite;
    color: ${(props) => (props.isRotate ? "#000" : "#fff")};
    transition: all 300ms ease-in;
  }
`;

export const ForecastTitle = styled.h2`
  text-align: center;
  font-size: 27px;
`;

export const ForecastTemp = styled.div<{}>``;

export const ForecastTimes = styled.div<{}>`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export const ForecastSunRiseSet = styled.div<{}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
`;

export const ForecastCurrent = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrTemp = styled.h3<{}>`
  font-size: 50px;
`;

export const CurrIcon = styled.img<{}>``;

export const ForecastTemps = styled.div<{}>`
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  font-size: 14px;
`;
export const TempMinMax = styled.div<{}>``;

export const ForecastItems = styled.div<{}>`
  padding: 20px;
`;

export const ForecastColumn = styled.div<{ isCurrDate: boolean }>`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.isCurrDate ? "#16599b" : "#102e4b")};
`;
export const ForecastItem = styled.div<{}>``;
export const ColumnDay = styled.div<{}>`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
`;
export const ColumnDate = styled.div<{}>``;
export const ColumnTime = styled.div<{}>``;
export const ColumnIcon = styled.div<{}>`
  background-color: ${GColor.mainBg};
  /* border: 1px solid #00ffff; */
  border-radius: 50%;
  margin: 10px;
`;
export const ColumnTemp = styled.div<{}>``;

export const ColumnDescr = styled.div<{}>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;
export const DescrItem = styled.div<{}>`
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
