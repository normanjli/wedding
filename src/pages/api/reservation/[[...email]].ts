import type { NextApiRequest, NextApiResponse } from 'next';
import { Reservation, ReservationInterface } from '../../../models/Reservation';
import { reservationsCollection } from '../../../utils/firebase';

type Data =
  | {
      reservation: Reservation;
    }
  | {
      status: number;
      message: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === 'GET') {
    const { email } = req?.query;

    if (!email) {
      return res.status(200).json({ status: 204, message: '' });
    }

    const data = (
      await reservationsCollection.where('email', '==', email).get()
    ).docs;

    if (!data?.[0]?.data?.()) {
      return res.status(200).json({ status: 204, message: '' });
    }

    const reservation = new Reservation(data[0].data() as ReservationInterface);
    res.status(200).json({ reservation: reservation });
  }
  if (method === 'POST' || method === 'PUT') {
    const body = req?.body;
    if (!body) {
      return res.status(200).json({ status: 204, message: '' });
    }

    const existingReservationSnapshot = await reservationsCollection
      .doc(body.email)
      .get();

    reservationsCollection
      .doc(existingReservationSnapshot?.id || body.email)
      .set(body)
      .then(() => {
        res.status(200).json({ reservation: new Reservation(body) });
      })
      .catch((e) => {
        res.status(200).json({ status: 204, message: e.message });
      });
  }
}
