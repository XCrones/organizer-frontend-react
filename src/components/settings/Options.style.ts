import styled from "styled-components";

export const OptionsItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const OptionsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.section.block.color.title};
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.section.block.background};
`;

export const ItemAbout = styled.div<{}>`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
`;

export const ItemIcon = styled.div<{ isDarkTheme: boolean }>`
  font-size: 20px;
  color: ${(props) => (!props.isDarkTheme ? "#000" : "#fff")};
  transition: ${(props) => props.theme.transition.theme};
`;
export const ItemTitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.section.settings.title};
  &::first-letter {
    text-transform: uppercase;
  }
`;
