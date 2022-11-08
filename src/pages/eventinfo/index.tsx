import type { NextPage } from 'next';
import Header from '../../components/header/Header';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { CenteredHeader } from '../../components/main/Text.styles';

const EventInfo: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <CenteredHeader>Check back soon for information!</CenteredHeader>
      </MainContainer>
    </div>
  );
};

export default EventInfo;
