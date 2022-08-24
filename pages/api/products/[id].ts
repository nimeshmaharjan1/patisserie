import Product from "../../../models/product";
import connectMongo from "../../../lib/database";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectMongo();
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);
        return res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
    case "PUT":
      try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
  }
};
export default handler;
