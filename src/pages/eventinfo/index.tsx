import type { NextPage } from 'next';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { CenteredHeader } from '../../components/main/Text.styles';

const EventInfo: NextPage = () => {
  return (
    <MainContainer>
      <CenteredHeader>Check back soon for information!</CenteredHeader>
    </MainContainer>
  );
};

export default EventInfo;
