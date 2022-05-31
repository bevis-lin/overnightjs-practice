import { NextFunction, Request, Response } from "express";
import Logger from "jet-logger";
import { WalletController } from "../WalletController";

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
          //res.status(404).send({
          //message: `Not found Creator with address ${walletAddr}.`,
          //});
          var walletController = new WalletController();
          next(walletController.reportSpam(req, res));
        } else {
          res.status(500).send({
            message: "Error retrieving Creator with address " + walletAddr,
          });
        }
      } else {
        Logger.info(data.Name);
        req.query.userName = data.Name;
        next();
      }
    });
  }
}
