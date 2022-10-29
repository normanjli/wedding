import styled, { StyledComponent } from 'styled-components';
import { Colors } from '../Styles/Colors';

export const StyledHeader = styled.header`
  grid-template-rows: 1fr 1fr;
  display: grid;
  width: 100%;
  align-content: center;
  text-align: center;
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
  font-size: 18px;
  width: 'fit-content';
  :hover {
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-evenly;
  text-align: center;
  margin: auto;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${Colors.primary};
  font-size: 40px;
`;

export const HeaderSubTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${Colors.primary};
  font-size: 24px;
  margin: 0;
  margin-top: 10px;
  font-weight: 400;
`;
