import type { NextApiRequest, NextApiResponse } from "next";
import { Reservation, ReservationInterface } from "../../../models/Reservation";
import { db, reservationsCollection } from "../../../utils/firebase";

type Data =
  | {
      reservations: Reservation;
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

  if (method === "GET") {
    const { email } = req?.query;

    if (!email) {
      return res.status(200).json({ status: 204, message: "" });
    }
    const data = (
      await reservationsCollection.where("email", "==", email[0]).get()
    ).docs;

    if (!data) {
      return res.status(200).json({ status: 204, message: "" });
    }

    const reservation = new Reservation(data[0].data() as ReservationInterface);
    res.status(200).json({ reservations: reservation });
  }
  if (method === "POST") {
    const { body } = req;

    // const reservation = setDoc(doc(db,"/reservations", body);

    // const doc = await reservationsCollection.add(reservation);

    // if (!doc) {
    //   return res.status(200).json({ status: 422, message: "" });
    // }

    res.status(200).json({ reservations: new Reservation(body) });
  }

  if (method === "PUT") {
    return;
  }
}
