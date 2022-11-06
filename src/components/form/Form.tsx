import React, { useState } from 'react';
import { Reservation, ReservationStatus } from '../../models/Reservation';
import { Colors } from '../../styles/Colors';
import { Button } from '../button/Button.style';
import { Modal } from '../modal/Modal';
import {
  ButtonContainer,
  Form,
  Input,
  LabelContainer,
  Option,
  Select,
} from './Form.style';
import axios from 'axios';

export function ReservationForm() {
  const [formData, setFormData] = useState<Reservation>(new Reservation());

  const [isAttending, setAttending] = useState(
    formData.status !== ReservationStatus.NotAttending
  );
  const [isWarningVisible, setWarningVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullNameInputs, setFullNameInputs] = useState<JSX.Element[]>([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    formData.guestList = [formData.name];
    for (let i = 0; i < formData.partySize - 1; i++) {
      formData.guestList.push(event.target[`guest${i + 1}`].value);
    }

    const body = {
      ...formData,
    };

    const endpoint = '/api/reservation';
    await axios.post(endpoint, body);
  };

  const disablePartySize = (event: any) => {
    if (event.target.value === ReservationStatus.NotAttending) {
      setAttending(false);
      return;
    }
    setAttending(true);
  };

  const onChangeName = (event: any) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const onChangeEmail = (event: any) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const onChangeAttending = (event: any) => {
    setFormData({ ...formData, status: event.target.value });
    disablePartySize(event);
  };

  const renderInputs = (number: number, previousGuests?: string[]) => {
    const inputs = [];

    if (number > 1) {
      for (let i = 1; i <= number - 1; i++) {
        inputs.push(
          <LabelContainer key={i} htmlFor={`guest${i}`}>
            Enter Full Name of Guest {i}
            <Input
              type="text"
              id={`guest${i}`}
              name={`guest${i}`}
              required
              placeholder={`guest ${i}`}
              defaultValue={previousGuests?.[i] || ''}
            />
          </LabelContainer>
        );
      }
      setFullNameInputs(inputs);
      return;
    }
    setFullNameInputs([]);
  };

  const validatePartySize = (event: any) => {
    if (event.target.value == 0) {
      setFormData({
        ...formData,
        status: ReservationStatus.NotAttending,
        partySize: 0,
      });
      renderInputs(0);
      setAttending(false);
      return;
    }

    setWarningVisible(false);
    if (event.target.value > 5) {
      setWarningVisible(true);
      setFormData({ ...formData, partySize: 5 });
      renderInputs(5);
      return;
    }
    setFormData({ ...formData, partySize: event.target.value });
    renderInputs(event.target.value);
  };

  const validateMeals = (event: any) => {
    if (event.target.value > formData.partySize) {
      setFormData({ ...formData, veg: formData.partySize });

      return;
    }
    setFormData({ ...formData, veg: event.target.value });
  };

  const setFormDataHandler = (reservation: Reservation) => {
    renderInputs(reservation.guestList.length, reservation.guestList);
    setFormData(reservation);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <LabelContainer htmlFor="name">
          Enter Your Name
          <Input
            onChange={onChangeName}
            type="text"
            id="name"
            name="name"
            required
            placeholder="full name"
            value={formData.name}
          />
        </LabelContainer>
        <LabelContainer htmlFor="email">
          Enter Email
          <Input
            onChange={onChangeEmail}
            type="text"
            id="email"
            name="email"
            required
            placeholder="email"
            value={formData.email}
          />
        </LabelContainer>
        <LabelContainer htmlFor="attending">
          Are you coming?
          <Select
            onChange={onChangeAttending}
            id="attending"
            name="status"
            required
            value={formData.status}
          >
            <Option value={ReservationStatus.Attending}>attending</Option>
            <Option value={ReservationStatus.NotAttending}>
              not attending
            </Option>
            <Option value={ReservationStatus.Tentative}>tentative</Option>
          </Select>
        </LabelContainer>
        {isAttending && (
          <>
            <LabelContainer htmlFor="size">
              How Many?
              <Input
                onChange={validatePartySize}
                {...(isAttending ? { disabled: false } : { disabled: true })}
                type="number"
                id="size"
                name="partySize"
                placeholder="party size"
                min={0}
                max={5}
                value={formData.partySize}
              />
            </LabelContainer>
            {fullNameInputs.map((el) => el)}
            <LabelContainer htmlFor="size">
              Number of Vegan meals?
              <Input
                onChange={validateMeals}
                {...(isAttending ? { disabled: false } : { disabled: true })}
                type="number"
                id="veg"
                name="veg"
                placeholder="vegan meals"
                min={0}
                max={formData.partySize}
                value={formData.veg}
              />
            </LabelContainer>
          </>
        )}
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
        {isWarningVisible && (
          <p>
            If you need more than five party members please reach out to Kaitlin
            or Norman to discuss your needs!
          </p>
        )}
        <Button
          type="button"
          style={{
            fontSize: '14px',
            color: Colors.accent,
            borderBottom: `1px solid ${Colors.accent}`,
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Need To make a change?
        </Button>
      </Form>
      {isModalOpen && (
        <Modal
          requestClose={() => setIsModalOpen(false)}
          setFormData={setFormDataHandler}
        />
      )}
    </>
  );
}
