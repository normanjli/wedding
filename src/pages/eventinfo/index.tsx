import type { NextPage } from 'next';
import Header from '../../components/header/Header';
import { MainContainer } from '../../components/main/MainContainer.styles';

const EventInfo: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContainer></MainContainer>
    </div>
  );
};

export default EventInfo;
