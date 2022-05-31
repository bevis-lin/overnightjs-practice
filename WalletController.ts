import { Controller, Middleware, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import Logger from "jet-logger";
import { StatusCodes } from "http-status-codes";

@Controller("wallet")
export class WalletController {
  public reportSpam(req: Request, res: Response) {
    Logger.err("provide none user wallet address", false);
    return res.status(404).json({
      message: "provide none user wallet address",
      address: req.query.address,
    });
  }
}
