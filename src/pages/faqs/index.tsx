import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Link } from '../../components/link/Link.style';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { CenteredHeader, Text } from '../../components/main/Text.styles';

const EventInfo: NextPage = () => {
  return (
    <MainContainer>
      <CenteredHeader>Where is the event?</CenteredHeader>
      <Text>
        The wedding will take place at <br></br>
        <NextLink href="https://goo.gl/maps/TznkmPHtauzU94DP9" passHref>
          <Link>24920 Tenniel Rd, Crestline, CA, 92325</Link>
        </NextLink>{' '}
        <br></br>
        on April 22nd, 2023
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        Further questions?
      </CenteredHeader>
      <Text>
        Feel free to reach out to Norman or Kaitlin if you have questions that
        aren&apos;t answered here.
      </Text>
    </MainContainer>
  );
};

export default EventInfo;
