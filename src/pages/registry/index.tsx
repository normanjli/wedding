import type { NextPage } from 'next';
import Header from '../../components/header/Header';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { CenteredHeader } from '../../components/main/Text.styles';

const Registry: NextPage = () => {
  return (
    <div>
      <Header />
      <CenteredHeader>Check back soon for information!</CenteredHeader>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Registry;
