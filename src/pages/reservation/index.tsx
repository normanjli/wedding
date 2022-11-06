import type { NextPage } from 'next';
import { ReservationForm } from '../../components/form/Form';
import Header from '../../components/header/Header';

const Reservations: NextPage = () => {
  return (
    <div>
      <main>
        <Header />
        <ReservationForm></ReservationForm>
      </main>
    </div>
  );
};

export default Reservations;
