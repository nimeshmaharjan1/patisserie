import Category from "../../../models/category";
import connectMongo from "../../../lib/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const category = await Category.find();
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json(error);
      }
    case "POST":
      try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
      } catch (error) {
        res.status(500).json(error);
      }
  }
}
