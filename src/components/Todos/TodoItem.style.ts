import styled from "styled-components";
import { GTriangle } from "../../ui";
import { G_VARIABLES } from "../../ui/variables";

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

export const ItemTitle = styled.h3`
  max-width: 220px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemDate = styled.div`
  font-size: 13px;
  color: ${G_VARIABLES.color.light_gray};
`;

export const ItemInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ItemEdit = styled.button.attrs({ type: "button" })<{ color: string }>`
  font-size: 22px;
  color: ${(props) => props.color};
`;

export const ItemTriangle = styled(GTriangle)`
  position: absolute;
  top: 0;
  right: 0px;
`;
