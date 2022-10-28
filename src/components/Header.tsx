import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { HeaderLink, StyledHeader } from './Header.styles';

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Link href="/" passHref>
        <HeaderLink active={router.pathname === '/'}>Home</HeaderLink>
      </Link>
      <Link href="/stay" passHref>
        <HeaderLink active={router.pathname === '/stay'}>
          Where to stay
        </HeaderLink>
      </Link>
      <Link href="/schedule" passHref>
        <HeaderLink active={router.pathname === '/schedule'}>
          Schedule
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
    </StyledHeader>
  );
};

export default Header;
