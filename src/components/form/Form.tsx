import React, { useState } from 'react';
import { ReservationStatus } from '../../models/Reservation';
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
  const [isAttending, setAttending] = useState(true);
  const [partySize, setPartySize] = useState<number | undefined>(undefined);
  const [isWarningVisible, setWarningVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const body = {
      name: event.target.name.value,
      email: event.target.email.value,
      partySize: event.target.partySize.value,
      status: event.target.status.value,
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

  const validatePartySize = (event: any) => {
    setWarningVisible(false);
    if (event.target.value === 'e') {
      setPartySize(1);
    }
    if (event.target.value > 5) {
      setWarningVisible(true);
      setPartySize(5);
      return;
    }
    setPartySize(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <LabelContainer htmlFor="name">
          Enter Party Name
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="name"
          />
        </LabelContainer>
        <LabelContainer htmlFor="email">
          Enter Email
          <Input
            type="text"
            id="email"
            name="email"
            required
            placeholder="email"
          />
        </LabelContainer>
        <LabelContainer htmlFor="attending">
          Are you coming?
          <Select
            defaultValue={ReservationStatus.Attending}
            onChange={disablePartySize}
            id="attending"
            name="status"
            required
          >
            <Option value={ReservationStatus.Attending}>attending</Option>
            <Option value={ReservationStatus.NotAttending}>
              not attending
            </Option>
            <Option value={ReservationStatus.Tentative}>tentative</Option>
          </Select>
        </LabelContainer>
        <LabelContainer htmlFor="size">
          How Many?
          <Input
            onChange={validatePartySize}
            {...(isAttending ? { disabled: false } : { disabled: true })}
            type="number"
            id="size"
            name="partySize"
            placeholder="party size"
            defaultValue={0}
            min={1}
            max={5}
            value={partySize}
          />
        </LabelContainer>
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
          onClick={() => setIsEditing(true)}
        >
          Need To make a change?
        </Button>
      </Form>
      {isEditing && (
        <Modal
          requestClose={() => setIsEditing(false)}
          setFormData={() => {}}
        ></Modal>
      )}
    </>
  );
}
