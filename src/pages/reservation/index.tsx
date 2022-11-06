import type { NextPage } from 'next';
import { ReservationForm } from '../../components/form/Form';
import Header from '../../components/header/Header';
import { MainContainer } from '../../components/main/MainContainer.styles';

const Reservations: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <ReservationForm />
      </MainContainer>
    </div>
  );
};

export default Reservations;
