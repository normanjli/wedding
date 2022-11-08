import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: ${Colors.primary};
  text-decoration: none;
`;

export const CenteredHeader = styled.h1`
  margin: auto;
  text-align: center;
`;
