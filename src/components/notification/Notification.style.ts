import styled, { keyframes } from "styled-components";

const showNotif = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const Notification = styled.div<{ background: string; isHide: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 0;
  background-color: ${(props) => props.background};
  color: #fff;
  z-index: 100;
  animation: ${showNotif} 200ms linear;
`;

export const NotificationTitle = styled.h2`
  padding: 5px 10px;
  &::first-letter {
    text-transform: capitalize;
  }
`;
