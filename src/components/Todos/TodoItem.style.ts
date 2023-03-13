import styled from "styled-components";
import { GCheckboxReplace, GTriangle } from "../../ui";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  padding: 10px 20px;
  border-radius: 11px;
  background-color: ${(props) => props.theme.section.todos.background};
  position: relative;
  overflow: hidden;
`;

export const ItemTitle = styled.h3`
  max-width: 220px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${(props) => props.theme.section.todos.color.title};
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ItemSubtitle = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.section.todos.color.subtitle};
`;

export const ItemInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  color: ${(props) => props.theme.section.todos.color.subtitle};
`;

export const ItemButt = styled.button.attrs({ type: "button" })<{ color: string }>`
  font-size: 22px;
  color: ${(props) => props.color};
`;

export const ItemTriangle = styled(GTriangle)`
  position: absolute;
  top: 0;
  right: 0px;
`;

export const ItemCheckBox = styled(GCheckboxReplace)<{ isActive: boolean }>`
  &::before {
    background-color: ${(props) => (props.isActive ? props.colorSelect : props.theme.section.todos.chekcbox.active)};
  }
`;
