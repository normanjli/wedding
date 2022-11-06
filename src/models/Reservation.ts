/* eslint-disable no-unused-vars */
export enum ReservationStatus {
  Attending = 'attending',
  Tentative = 'tentative',
  NotAttending = 'not attending',
}

export interface ReservationInterface {
  name: string;
  status: ReservationStatus;
  email: string;
  partySize?: number;
  veg?: number;
  guestList?: string[];
}

export class Reservation implements ReservationInterface {
  name = '';

  status: ReservationStatus = ReservationStatus.Attending;

  partySize = 0;

  email = '';

  veg = 0;

  guestList: string[] = [];

  constructor(props?: ReservationInterface) {
    this.email = props?.email || '';
    this.name = props?.name || '';
    this.partySize = props?.partySize || 0;
    this.status = props?.status || ReservationStatus.Attending;
    this.veg = props?.veg || 0;
    this.guestList = props?.guestList || [];
  }
}
