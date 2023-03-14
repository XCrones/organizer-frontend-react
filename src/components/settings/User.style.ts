import styled from "styled-components";

export const UserWrapper = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.section.block.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`;

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

export const UserSvg = styled.div`
  font-size: 40px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserTitle = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  color: ${(props) => props.theme.section.settings.title};
`;

export const UserSubtitle = styled.h3`
  font-size: 14px;
  color: ${(props) => props.theme.section.settings.subtitle};
`;
