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
        The wedding will take place <strong>outdoors</strong> in the historic
        apple orchard at <br></br>
        <NextLink href="https://goo.gl/maps/TznkmPHtauzU94DP9" passHref>
          <Link>24920 Tenniel Rd, Crestline, CA, 92325</Link>
        </NextLink>{' '}
        <br></br>
        on April 22nd, 2023
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        When is the event?
      </CenteredHeader>
      <Text>
        Ceremony to begin promptly at 3:00PM, followed by Cocktails and
        Reception on premises at 3:30PM. The evening to conclude at 10:00PM.
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        What should I wear?
      </CenteredHeader>
      <Text>
        The dress code is{' '}
        <NextLink href="" passHref>
          <Link>Cocktail</Link>
        </NextLink>
        , however we encourage guests to wear low-heeled shoes due to the
        location of our wedding to be held on the family property surrounded by
        beautiful fruit trees and wooded areas.
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        Where do I park?
      </CenteredHeader>
      <Text>Parking will be available on or near site.</Text>
    </MainContainer>
  );
};

export default EventInfo;
