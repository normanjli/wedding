import React, { useCallback, useState } from 'react';
import { Reservation } from '../../models/Reservation';
import { Button } from '../button/Button.style';
import { Input } from '../form/Form.style';
import { ModalClose, ModalContainer, ModalContent } from './Modal.styles';
import axios from 'axios';

export type ModalProps = {
  requestClose: () => void;
  // eslint-disable-next-line no-unused-vars
  setFormData: (reservation: Reservation) => void;
};

export const Modal = ({ requestClose, setFormData }: ModalProps) => {
  const [input, setInputVal] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const onChangeEmailInput = (event: any) => {
    setInputVal(event.target.value);
  };

  const searchEmail = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const endpoint = `/api/reservation?email=${input}`;

    const { data } = await axios.get(endpoint);
    setIsLoading(false);

    if (!data) {
      return;
    }

    const reservation = new Reservation(data.reservation);
    setFormData(reservation);
    requestClose();
  }, [isLoading, setIsLoading, setFormData, input, requestClose]);

  return (
    <>
      <ModalContainer onClick={requestClose} />
      <ModalContent>
        <ModalClose onClick={requestClose}>X</ModalClose>
        Enter your email below to retrieve your Reservation
        <Input
          onChange={onChangeEmailInput}
          type="text"
          id="email-lookup"
          name="email"
          required
          placeholder="email"
        />
        <Button onClick={searchEmail}>Submit</Button>
      </ModalContent>
    </>
  );
};

export default Modal;
