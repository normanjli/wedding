import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderLink, NavMenu } from '../Header.styles';

const SmallNav = ({
  isHidden,
  requestClose,
}: {
  isHidden: boolean;
  requestClose: () => void;
}) => {
  const router = useRouter();

  if (isHidden) {
    return null;
  }

  return (
    <NavMenu onMouseLeave={requestClose}>
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
    </NavMenu>
  );
};

export default SmallNav;
