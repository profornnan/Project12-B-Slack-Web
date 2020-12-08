import { color } from '@theme/index';
import React from 'react';
import styled from 'styled-components';

interface DropMenuBoxProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const BackgroundModal = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: none;
  z-index: 998;
`;

const InnerModal = styled.div<any>`
  position: absolute;
  padding: 1rem 0rem;
  background-color: ${color.modal_bg_inner_secondary};
  z-index: 999;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgb(248 248 248), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  height: fit-content;
`;

const DropMenuBox: React.FC<DropMenuBoxProps> = ({ children, onClick, ...props }) => {
  return (
    <>
      <BackgroundModal onClick={onClick} {...props}></BackgroundModal>
      <InnerModal>{children}</InnerModal>
    </>
  );
};

export { DropMenuBox, DropMenuBoxProps };
