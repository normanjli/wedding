import { DocumentData } from 'firebase-admin/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from "../../utils/firebase";


type Data = {
   reservations: DocumentData[]
 }

 export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
 ) {

    const test = db.collection("reservations");
    const reservation = (await test.get()).docs;
    res.status(200).json({ reservations: reservation })
 }