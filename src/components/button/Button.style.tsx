import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Button = styled.button`
  color: ${Colors.primary};
  background-color: white;
  border: unset;
  border-bottom: 1px solid ${Colors.primary};
  font-size: 20px;
  padding: 0px;
  margin: auto;
  :hover {
    cursor: pointer;
  }
`;
