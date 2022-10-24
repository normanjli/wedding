import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { Reservation, ReservationInterface } from "../../../models/Reservation";
import { db, reservationsCollection } from "../../../utils/firebase";
import {v4 as uuid} from "uuid";

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
  console.log(req.body);
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
  if (method === "POST" || method === "PUT") {
    const { body } = req;

    if (!body) {
      return res.status(200).json({ status: 204, message: "" });
    }
    const existingReservationSnapshot = await reservationsCollection.where("email", "==", body.email).get();

    db.collection("reservations").doc(existingReservationSnapshot?.docs[0]?.id || uuid()).set(body).then(() => {
      res.status(200).json({ reservations: new Reservation(body)});
    }).catch((e) => {
      res.status(200).json({ status: 204, message: e.message});
    })
  }

}
