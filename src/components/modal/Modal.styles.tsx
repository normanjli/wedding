import styled from 'styled-components';
import { Button } from '../button/Button.style';

export const ModalContainer = styled.div`
  position: fixed;
  background: rgba(0 0 0 /0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  display: grid;
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
  width: 90%;
  text-align: center;
  font-size: 20px;
`;

export const ModalClose = styled(Button)`
  position: absolute;
  background-color: transparent;
  border: unset;
  top: 5px;
  right: 5px;
`;
