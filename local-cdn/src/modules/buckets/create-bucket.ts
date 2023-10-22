import { Request, Response } from "express";

export async function createBucket(
  req: Request,
  res: Response
): Promise<Response> {
  console.log(req.file);
  return res.status(200).json({ message: "Bucket created" });
}
