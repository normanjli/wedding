import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HeaderLink,
  HeaderSubTitle,
  HeaderTitle,
  Nav,
  StyledHeader,
} from './Header.styles';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <StyledHeader>
        <div>
          <HeaderTitle>Kaitlin & Norman</HeaderTitle>
          <HeaderSubTitle>April 23rd, 2023 | Crestline, CA</HeaderSubTitle>
        </div>
        <Nav>
          <Link href="/" passHref>
            <HeaderLink active={router.pathname === '/'}>Home</HeaderLink>
          </Link>
          <Link href="/stay" passHref>
            <HeaderLink active={router.pathname === '/stay'}>
              Where to stay
            </HeaderLink>
          </Link>
          <Link href="/eventinfo" passHref>
            <HeaderLink active={router.pathname === '/eventinfo'}>
              Event Information
            </HeaderLink>
          </Link>
          <Link href="/registry" passHref>
            <HeaderLink active={router.pathname === '/registry'}>
              Registry
            </HeaderLink>
          </Link>
          <Link href="/reservations" passHref>
            <HeaderLink active={router.pathname === '/reservations'}>
              RSVP
            </HeaderLink>
          </Link>
        </Nav>
      </StyledHeader>
    </>
  );
};

export default Header;
