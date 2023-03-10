import { GFonts } from "../../ui/variables.style";
import styled from "styled-components";

export const ToggleWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const ToggleItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ToggleLine = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 10px;
  background-color: #c0c0c0;
  margin: 10px 0;
`;

export const ToggleItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemAbout = styled.div<{}>`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
`;

export const ItemIcon = styled.div`
  font-size: 20px;
`;
export const ItemTitle = styled.div`
  font-size: 14px;
  font-family: ${GFonts.inter};
  &::first-letter {
    text-transform: uppercase;
  }
`;
