import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Button = styled.button<{ variant?: string }>`
  color: ${Colors.primary};
  background-color: white;
  border: unset;
  border-bottom: ${(props) =>
    props.variant === 'no-underline' ? 'unset' : '1px solid ${Colors.primary}'};
  font-size: 20px;
  padding: 0px;
  margin: auto;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    display: ${(props) =>
      props.variant === 'no-underline' ? 'none' : 'block'};
  }
`;
