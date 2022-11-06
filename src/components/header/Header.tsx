import { useState } from 'react';
import { Button } from '../button/Button.style';
import {
  HeaderSubTitle,
  HeaderTitle,
  StyledHeader,
  TitleContainer,
} from './Header.styles';
import FullSizeNav from './nav/FullSizeNav';
import SmallNav from './nav/SmallNav';

const Header = () => {
  const [isHidden, setisHidden] = useState(true);

  const toggleMenuHandler = () => {
    setisHidden(!isHidden);
  };

  const closeMenu = () => setisHidden(false);

  return (
    <>
      <StyledHeader>
        <TitleContainer>
          <div>
            <HeaderTitle>Kaitlin & Norman</HeaderTitle>
            <HeaderSubTitle>April 22nd, 2023 | Crestline, CA</HeaderSubTitle>
          </div>
          <Button onClick={toggleMenuHandler} variant="no-underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="currentColor"
            >
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
          </Button>
        </TitleContainer>
        <SmallNav requestClose={closeMenu} isHidden={isHidden} />
        <FullSizeNav />
      </StyledHeader>
    </>
  );
};

export default Header;
