import styled, { StyledComponent } from 'styled-components';
import { Colors } from '../Styles/Colors';

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
interface HeaderLinkProps {
  active: boolean;
}
export const HeaderLink = styled.a<HeaderLinkProps>`
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  text-decoration: ${(props) => (props.active ? 'underline' : 'unset')};
  font-family: 'Roboto', sans-serif;
  color: ${Colors.primary};
`;

export const ActiveHeaderLink = styled(HeaderLink)`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`;
