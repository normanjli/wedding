import type { NextPage } from 'next';
import { ReservationForm } from '../../components/form/Form';
import { MainContainer } from '../../components/main/MainContainer.styles';

const Reservations: NextPage = () => {
  return (
    <MainContainer>
      <ReservationForm />
    </MainContainer>
  );
};

export default Reservations;
