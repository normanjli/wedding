import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

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
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.active ? '100% 3px' : '0% 3px')};
  transition: background-size 0.3s;
  transition-timing-function: ease-out;
  transition-delay: 0.1s;
  font-family: 'Roboto', sans-serif;
  color: ${Colors.primary};
  font-size: 18px;
  width: 'fit-content';
  :hover,
  :focus {
    background-size: 100% 3px;
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
