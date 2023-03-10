import { GColor } from "../../ui/variables.style";
import styled from "styled-components";

export const Elem = styled.div``;

export const EmailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
  padding: 0 15px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const AvatarImg = styled.img`
  max-width: 40px;
  max-height: 40px;
`;
export const AvatarSvg = styled.div`
  font-size: 40px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoName = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
`;

export const InfoEmail = styled.h3`
  font-size: 14px;
  color: #a6a6a6;
`;
