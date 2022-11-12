import type { NextPage } from 'next';
// import NextLink from 'next/link';
// import { Link } from '../../components/link/Link.style';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { CenteredHeader, Text } from '../../components/main/Text.styles';

const EventInfo: NextPage = () => {
  return (
    <MainContainer>
      <CenteredHeader>When do I need to RSVP by?</CenteredHeader>
      <Text>
        <strong>March 11, 2023</strong> is the last day we will accept RSVPs
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        What will the weather be like?
      </CenteredHeader>
      <Text>
        The mountains have unpredictable weather, but generally in April the
        weather is fair, with temperatures in the high 60s. At this elevation we
        strongly recommend wearing sunscreen as well.
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        Am I allowed to bring my children?
      </CenteredHeader>
      <Text>
        Absolutely! Please mark them in your RSVP if they under 10. As this
        venue is outdoors and could last several hours, please bring everything
        you&apos;ll need for your child.
      </Text>
      <CenteredHeader style={{ marginTop: '40px' }}>
        Will I have cell service?
      </CenteredHeader>
      <Text>
        It&apos;s carrier dependant, but generally the service at the orchard is
        very poor.
      </Text>
      {/* <CenteredHeader style={{ marginTop: '40px' }}>
        Will there be an open bar?
      </CenteredHeader>
      <Text>
        No clue
      </Text> */}
      <CenteredHeader style={{ marginTop: '40px' }}>
        Where should I bring/send wedding gifts?
      </CenteredHeader>
      <Text>
        At this time, we do not wish for anything other than your continued love
        and support. If you would like to give us a gift, please send any
        phyical gifts directly to our home in Salt Lake, We will be travelling
        directly after our wedding and will have limited car space on our trip.
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
