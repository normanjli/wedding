import { createGlobalStyle } from 'styled-components';
import { Colors } from '../Styles/Colors';
export const GlobalStyle = createGlobalStyle`
  body {
    background: url("./Flower1.svg") left -150px top -150px no-repeat, url("./Flower2.svg") fixed right -100px bottom -100px no-repeat;
    background-repeat: no-repeat, no-repeat;
    @media (max-width: 1300px) {
      background: url("./FlowerBottom.svg") fixed center bottom;
    }
    font-family: 'Roboto', sans-serif;
    color:${Colors.primary}
  }
`;
