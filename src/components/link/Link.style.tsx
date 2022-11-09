import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Link = styled.a<{ variant?: string }>`
  color: ${Colors.primary};
  background-color: white;
  border: unset;
  font-size: 20px;
  text-decoration: unset;
  padding: 0px;
  margin: auto;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (min-width: 800px) {
    display: ${(props) =>
      props.variant === 'no-underline' ? 'none' : 'inline'};
  }
`;
