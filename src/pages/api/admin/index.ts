import { NextApiRequest, NextApiResponse } from 'next';
import { Reservation, ReservationInterface } from '../../../models/Reservation';
import { reservationsCollection } from '../../../utils/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const docRefs = await reservationsCollection.get();

  const reservations = docRefs.docs.map((doc) => {
    return new Reservation(doc.data() as ReservationInterface);
  });

  const emails = reservations.map(({ email }) => email);

  const guestList = reservations.flatMap(({ guestList }) => guestList);
  const totalGuests = guestList.length;
  const totalChildren = reservations.reduce(
    (a, b) => a + b.numberOfChildren,
    0
  );

  return res
    .status(200)
    .json({ emails, guestList, totalGuests, totalChildren, reservations });
}
