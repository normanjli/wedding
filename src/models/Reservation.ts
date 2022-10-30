/* eslint-disable no-unused-vars */
export enum ReservationStatus {
  Attending = 'attending',
  Tentative = 'tentative',
  NotAttending = 'not attending',
}

export interface ReservationInterface {
  name: string;
  status: ReservationStatus;
  partySize: number;
  email: string;
}

export class Reservation implements ReservationInterface {
  name = '';

  status: ReservationStatus = ReservationStatus.NotAttending;

  partySize = 0;

  email = '';

  constructor(props: ReservationInterface) {
    this.email = props.email;
    this.name = props.name;
    this.partySize = props.partySize;
    this.status = props.status;
  }
}
