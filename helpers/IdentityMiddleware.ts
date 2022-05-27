import { NextFunction, Request, Response } from "express";

export default function checkAddressProvided(
  req: Request,
  res: Response,
  next: NextFunction
) {
  var walletAddr = req.query.address;
  if (!walletAddr) {
    throw new Error("No address provided");
  } else {
    next();
  }
}
