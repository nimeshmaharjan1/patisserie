import Order from "../../../models/order";
import connectMongo from "../../../lib/database";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectMongo();
  const { method } = req;
  switch (method) {
    case "POST": {
      try {
        const orders = await Order.create(req.body);
        return res.status(200).json({ orders });
      } catch (error) {
        res.status(500).json(error);
      }
    }
  }
};
export default handler;
