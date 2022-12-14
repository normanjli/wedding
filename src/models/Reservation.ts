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
  guestList?: Guest[];
  numberOfChildren: number;
}

export interface GuestInterface {
  guestName: string;
  isChild: boolean;
}

export class Reservation implements ReservationInterface {
  name = '';

  status: ReservationStatus = ReservationStatus.Attending;

  partySize: number = 0;

  email = '';

  veg: number = 0;

  guestList: Guest[] = [];

  numberOfChildren: number = 0;

  constructor(props?: ReservationInterface) {
    this.email = props?.email || '';
    this.name = props?.name || '';
    this.partySize = Number(props?.partySize) || 0;
    this.status = props?.status || ReservationStatus.Attending;
    this.veg = Number(props?.veg) || 0;
    this.guestList = props?.guestList || [];
    this.numberOfChildren = Number(props?.numberOfChildren) || 0;
  }
}

export class Guest implements GuestInterface {
  guestName = '';

  isChild = false;

  constructor(props?: GuestInterface) {
    this.guestName = props?.guestName || '';
    this.isChild = props?.isChild || false;
  }
}
