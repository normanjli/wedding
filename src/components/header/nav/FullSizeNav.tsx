import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderLink, Nav } from '../Header.styles';

const FullSizeNav = () => {
  const router = useRouter();
  return (
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
      <Link href="/reservation" passHref>
        <HeaderLink active={router.pathname === '/reservation'}>
          RSVP
        </HeaderLink>
      </Link>
    </Nav>
  );
};

export default FullSizeNav;
