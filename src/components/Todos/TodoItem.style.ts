import { GColor } from "../../ui/variables.style";
import styled from "styled-components";
import { GFonts } from "../../ui/variables.style";

export const Item = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  padding: 10px 20px;
  border-radius: 11px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
`;

export const ItemTitle = styled.h3<{}>`
  max-width: 220px;
  font-size: 15px;
  font-family: ${GFonts.inter};
  text-overflow: ellipsis;
  overflow: hidden;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemDate = styled.div<{}>`
  font-size: 13px;
  color: ${GColor.colorAuthTitle};
`;

export const ItemInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ItemEdit = styled.button<{ color: string }>`
  font-size: 22px;
  color: ${(props) => props.color};
`;

export const ItemTriangle = styled.div<{ background: string }>`
  position: absolute;
  top: 0;
  right: 0px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 17px 17px 0;
  border-color: transparent ${(props) => props.background} transparent transparent;
`;
