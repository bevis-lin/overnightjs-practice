import { NextFunction, Request, Response } from "express";
//import Creator from "../models/creator.model";

export default function checkAddressProvided(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const Creator = require("../models/creator.model.js");
  var walletAddr = req.query.address;
  if (!walletAddr) {
    throw new Error("No address provided");
  } else {
    Creator.findByAddress(walletAddr, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Creator with address ${walletAddr}.`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Creator with address " + walletAddr,
          });
        }
      } else next();
    });
  }
}
