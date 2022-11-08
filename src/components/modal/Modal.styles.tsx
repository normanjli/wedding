import styled from 'styled-components';
import { Button } from '../button/Button.style';

export const ModalContainer = styled.div`
  position: absolute;
  background: rgba(0 0 0 /0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  margin: auto;
  padding: 0;
  min-width: 375px;
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  display: grid;
  gap: 16px;
  background-color: white;
  margin: auto;
  padding: 24px;
  border-radius: 16px;
  max-width: 400px;
  width: 80%;
  text-align: center;
  font-size: 20px;
  z-index: 20;
`;

export const ModalClose = styled(Button)`
  position: absolute;
  background-color: transparent;
  border: unset;
  top: 8px;
  right: 8px;
`;
